const Vehicule = require('../models/vehicule.model');
const QRCode = require('qrcode');
const fs = require('fs');

exports.getVehicule = async (req, res) => {
    const vehiculeId = req.params.id;
    try {
        const result = await Vehicule.findById(vehiculeId)
        return res.status(200).send({vehicule: result});
    } catch (e) {
        return res.send({message: `Désolé, ce véhicule n'existe pas(encore)`})
    }
}

exports.getAvailableVehicules = async (req, res) => {
    const available = true
    try {
        const result = await Vehicule.where({available})
        return res.send({vehicules: result})        
        
    } catch (e) {
        console.log(e);
    }
}
exports.getAllVehicules = async (req, res) => {
    Vehicule.find()
    .then((vehicules) => res.send({vehicules: vehicules}))
}
exports.addVehicule = async (req, res) => {
    const { lat, long } = req.body;
    const allVehicules = await Vehicule.find()
    const totalOfVehicules = allVehicules.length;
    vehiculeNumber = totalOfVehicules + 1;
    
    const vehicule = new Vehicule({lat, long, vehiculeNumber});
    try {
        const result = await vehicule.save();
        console.log(result);
        res.status(201).json({
            message: 'Vehicule created',
            result: result,
        });
    } catch (e) {
        res.status(500).json({
            message: 'Error' + e,
        });
    }
};

//PATCH to create or change the qr code
exports.generateQrCode = async (req, res) => {
    const vehiculeId = req.params.id;
    try {
        const foundVehicule = await Vehicule.findById(vehiculeId)
        const vehiculeNumber = foundVehicule.vehiculeNumber;
        const generateQR = await QRCode.toDataURL(vehiculeId);
        fs.writeFileSync(`../pwa/assets/qrcode/${vehiculeNumber}.html`, `<img src="${generateQR}">`);
        const qr = generateQR.split(',')[1];
        const newqr = {
            qrcode: qr
        }
        await Vehicule.findByIdAndUpdate(vehiculeId, {$set: newqr })
        res.status(200).send({message: 'QR code added!'})
    } catch (e) {
        res.status(400).send({message : 'Erreur' + e})
    }

}


