const keeperModel = require('../models/KeeperModels')

module.exports = {

    create:async (req, res) => {

        const notesData = new keeperModel({title: req.body.title, text: req.body.text})

        await notesData.save()

        res.send('successfully saved')
    },

    getAll:async (req, res) => {

        const allNotes = await keeperModel.find()

        res.send(allNotes)
    },

    remove:async (req, res) => {

        const {id} = req.params

        await keeperModel.findByIdAndDelete(id)

        res.send('successfully deleted')
    }

}