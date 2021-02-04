const User = require("../models/user.model");
const Role = require("../models/role.model");
const bcrypt = require("bcrypt");
const functions = require("../functions/user.functions");
const jwt = require("jsonwebtoken");
const Validator = require("validator");
const cookies = require("cookies");

exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email }).populate(
      "roles",
      "-__v"
    );
    if (!user) {
      return res.status(401).json({ message: "Mauvais identifiants" });
    }
    const isValidPass = await bcrypt.compare(req.body.password, user.password);
    if (!isValidPass) {
      return res.status(401).json({ message: "Mauvais identifiants" });
    }
    let authentification = new cookies(req, res, { keys: process.env.JWT_KEY });
    const token = await jwt.sign({ id: user.id}, process.env.JWT_KEY, {
      expiresIn: 86400,
    });
    authentification.set("JWT", token);

    const authorities = [];
    for (let i = 0; i < user.roles.length; i++) {
      authorities.push("ROLE_" + user.roles[i].name.toUpperCase());
    }
    res.status(200).json();
  } catch (e) {
    res.status(401).json({ message: "Erreur" + e });
  }
};

exports.signup = async (req, res, next) => {
  const user = new User(req.body);
  try {
    if (req.body.email == undefined || req.body.email.length == 0) {
      return res.status(400).json({ message: "Email field is required" });
    }
    if (!Validator.isEmail(req.body.email)) {
      return res.status(400).json({ messagee: "Email is invalid !" });
    }
    if (req.body.password == undefined || req.body.password.length == 0) {
      return res.status(400).json({ message: "Password field is required" });
    }
    if (
      req.body.passwordConfirm == undefined ||
      req.body.passwordConfirm.length == 0
    ) {
      return res
        .status(400)
        .json({ message: "Confirm password field is required" });
    }
    if (req.body.password != req.body.passwordConfirm) {
      return res.status(400).json({ message: "Password must match" });
    }
    const giveRole = await Role.findOne({ name: "user" }, (err, role) => {
      if (err) {
        return res.status(500).send({ message: err });
      }
      user.roles = [role._id];
    });
    user.password = await functions.hashPassword(req.body.password);
    const result = await user.save();
    res.status(201).json({
      message: "User created",
      result: result,
    });
  } catch (e) {
    res.status(500).json({
      message: "Invalid authentification credentials",
    });
  }
};

exports.logout = async (req, res, next) => {
  let authentification = new cookies(req, res, { keys: process.env.JWT_KEY });
  req.jwt = await authentification.get('JWT')
  if (req.jwt) {
      authentification.set('JWT', null);
      return next();
  } else {
    return;
  }
}

exports.currentUser = async (req, res, next) => {
  let authentification = new cookies(req, res, { keys: process.env.JWT_KEY});
  req.jwt = await authentification.get('JWT')

  if (req.jwt) {
    const user = await User.findById(req.userId);
    res.status(200).send({id: req.userId, name : user.name})
    return next();
  } else {
    return res.send(undefined);
  }
}

exports.getUser = async (req, res, next) => {
  if (req.userId === req.params.id) {
    try {

      const result = await User.findById(req.params.id).populate('rentals').populate('vehicules')
      return res.status(200).send({user: result});
    } catch(e) {
      return console.log(e);
    }
  } else {
    return res.send({message: 'Unauthorized'});
  }
}