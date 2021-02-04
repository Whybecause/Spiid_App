const Rental = require('../models/rental.model');
const User = require('../models/user.model');
const Vehicule = require('../models/vehicule.model');

exports.addRental = async (req, res) => {
    vehicule = req.params.id;
    user = req.userId;
    const rental = new Rental({vehicule, user});
    try {
        //on enregistre les détails de la commande dans l'user
        await User.updateOne(
            {_id: user},
            {$set: {rentals: rental, vehicules: vehicule}},
            function() {}
        )

        const currentVehicule = await Vehicule.findById(vehicule)
        //si le véhicule est indisponible on bloque la réservation
        if (currentVehicule.available === false) {
            return res.status(500).send({message: 'Ce véhicule est indisponible'})
        } else {
            //on met à jour la disponibilité du véhicule
            currentVehicule.available = false;
            await currentVehicule.save();
        }
        const result = await rental.save();
        res.status(200).send({rental: result})

    } catch (e) {
        res.send(e);
    }
}

exports.endRental = async (req, res) => {
    // ON UTILISE CETTE FONCTION APRES QUE LE PAIEMENT AIT ETE VALIDE
    try {

        //on récupère l'utilisateur
        const user = await User.findById(req.userId)
        .populate('rentals')
        .populate('vehicules');
        
        //On récupère le rental et le vehicule en cours à partir de l'utilisateur
        const rental = user.rentals[0]
        const vehicule = user.vehicules[0];
        
        //update du status du rental;
        rental.isFinished = true;
        
        //update de la disponibilité du véhicule
        vehicule.available = !vehicule.available;
        await vehicule.save();
        
        //update des coordonnées du véhicule (à récupérer dans le client)
        const { newLat, newLong } = req.body;
        await vehicule.updateOne({$set: {lat : newLat, long: newLong}})
        
        await rental.save();
        res.status(200).send({message: 'Votre location est terminée !'})
    } catch (e) {
        res.send(e);
    }

}

exports.getUserRentals = async (req, res) => {
    const user = req.userId;
    try {

            await Rental.where({ user })
            .populate('user')
            .populate('vehicule')
            .exec( (err, foundRentals) => {
                if (err) {
                    return console.log(err);
                }
                if (foundRentals.length === 0) {
                    return res.send({message: 'Pas de réservation en cours'})
                }
                return res.send({rentals: foundRentals, length: foundRentals.length})
            })
            

    } catch (e) {
        return console.log(e);
    }
}