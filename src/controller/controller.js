const Icecream = require("../model/icecream.js")

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        })
    }

    const icecream = new Icecream({
        flavor: req.body.flavor
    })

    Icecream.create(icecream, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while creating icecream."
            })
        } else res.status(201).send(data)
    })
}

exports.findAll = (req, res) => {
    Icecream.getAll((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while receiveing icecream."
            })
        } else res.status(200).send(data)
    })
}

exports.update = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        })
    }

    console.log("req.body", req.body);

    Icecream.updateById(req.params.id, req.body.flavor, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `There's no icecream with id ${req.params.id}`
                })
            } else {
                res.status(500).send({
                    message: `Error updating icecream with id ${req.params.id}`
                })
            }
        } else res.status(200).send(data)
    })
}

exports.delete = (req, res) => {
    Icecream.remove(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `There's no icecream with id ${req.params.id}`
                })
            } else {
                res.status(500).send({
                    message: `Could not delete icecream with id ${req.params.id}`
                })
            }
        } else res.status(200).send({ message: "Icecream deleted successfully!" })
    })
}