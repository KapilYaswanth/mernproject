const {validationResult} = require('express-validator');
const HttpError = require('../models/http-error');

const createPlace = (req, res, next) => {
  const validationErrors = validationResult(req);
  console.log('validationErrors', validationErrors);
  if(validationErrors.errors.length) {
   return next(new HttpError(422, 'invalid data'))
  }

  const requestBody = req.body;
  console.log('sss', requestBody);
  res.status(200).send({ message: "success places new", success: true });
}

const deletePlace = (req, res) => {
  const requestBody = req.body;
  console.log('sss', requestBody);
  res.status(200).send({ message: "success places delete", success: true });
};

const updatePlace = (req, res) => {
  const requestBody = req.body;
  console.log('sss', requestBody);
  res.status(200).send({ message: "success places update", success: true });
};

const placeDetails = (req, res) => {
  const placeId = req.params.placeId;
  console.log('sss', placeId);
  res.status(200).send({ message: "success place id get", success: true });
}

const getPlaces = (req, res) => {
  res.status(200).send({ message: "success places get", success: true });
};

module.exports = {
  createPlace,
  deletePlace,
  updatePlace,
  placeDetails,
  getPlaces
}