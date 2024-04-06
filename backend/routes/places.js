const express = require("express");
const {check} = require('express-validator')
const {createPlace, deletePlace, updatePlace, getPlaces, placeDetails} = require('../controllers/places-controller');

const router = express.Router();

router.get("/", getPlaces);

router.get("/:placeId", placeDetails);

router.post("/new", [check('title').not().isEmpty(), check('description').isLength({min: 5})], createPlace);

router.patch("/:placeId", updatePlace);

router.delete("/:placeId", deletePlace);

module.exports = router;
