const express = require("express");
const router = express.Router();

const Hospital = require("../models/Hospital");


router.get("/", async (req, res) => {

    try {

        const hospitals = await Hospital.find();

        res.json(hospitals);

    } catch (error) {

        res.status(500).json({
            message: "Error fetching hospitals",
            error: error.message
        });

    }

});


router.get("/:id", async (req, res) => {

    try {

        const hospital = await Hospital.findById(req.params.id);

        if (!hospital) {
            return res.status(404).json({
                message: "Hospital not found"
            });
        }

        res.json(hospital);

    } catch (error) {

        res.status(500).json({
            message: "Error fetching hospital",
            error: error.message
        });

    }

});


router.post("/", async (req, res) => {

    try {

        const {
            name,
            city,
            totalBeds,
            availableBeds
        } = req.body;

        const hospital = new Hospital({
            name,
            city,
            totalBeds,
            availableBeds
        });

        await hospital.save();

        res.status(201).json({
            message: "Hospital added successfully",
            hospital
        });

    } catch (error) {

        res.status(500).json({
            message: "Error adding hospital",
            error: error.message
        });

    }

});


router.put("/:id", async (req, res) => {

    try {

        const hospital = await Hospital.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!hospital) {
            return res.status(404).json({
                message: "Hospital not found"
            });
        }

        res.json({
            message: "Hospital updated successfully",
            hospital
        });

    } catch (error) {

        res.status(500).json({
            message: "Error updating hospital",
            error: error.message
        });

    }

});


router.delete("/:id", async (req, res) => {

    try {

        const hospital = await Hospital.findByIdAndDelete(
            req.params.id
        );

        if (!hospital) {
            return res.status(404).json({
                message: "Hospital not found"
            });
        }

        res.json({
            message: "Hospital deleted successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: "Error deleting hospital",
            error: error.message
        });

    }

});


module.exports = router;