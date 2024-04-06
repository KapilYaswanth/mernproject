const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");
const User = require("../models/users");
const HttpError = require("../models/http-error");
const uri =
  "mongodb+srv://admin:root@cluster0.ouknejc.mongodb.net/mern_test_db?retryWrites=true&w=majority&appName=cluster0";

const createUser = async (req, res, next) => {
  const requestBody = req.body;
  console.log("sss", requestBody);

  const client = new MongoClient(uri);
  // try {
  //   await client.connect();
  //   const db = client.db("mern_test_db"); //no need to specify db name as mern_test_db if it already given in uri
  //   await db.collection("users").insertOne({
  //     name: requestBody.name,
  //     email: requestBody.email,
  //   });
  //   res.status(200).send({ message: "success users new", success: true });
  // } catch (err) {
  //   next(new HttpError(500, err.message));
  // } finally {
  //   await client.close();
  // }

  try {
    await mongoose.connect(uri);
    // const result = new User({
    //   name: requestBody.name,
    //   email: requestBody.email,
    // });
    // await result.save(); // or below line
    await User.create({
      name: requestBody.name,
      email: requestBody.email,
    })
    res.status(200).send({ message: "success users new", success: true });
  } catch (err) {
    next(new HttpError(500, err.message));
  }
};

const deleteUser = (req, res) => {
  const requestBody = req.body;
  console.log("sss", requestBody);
  res.status(200).send({ message: "success users delete", success: true });
};

const updateUser = (req, res) => {
  const requestBody = req.body;
  console.log("sss", requestBody);
  res.status(200).send({ message: "success users update", success: true });
};

const userDetails = (req, res) => {
  const userId = req.params.userId;
  console.log("sss", userId);
  res.status(200).send({ message: "success user id get", success: true });
};

const getUsers = async (req, res, next) => {
  // const client = new MongoClient(uri);
  // try {
  //   await client.connect();
  //   const db = client.db("mern_test_db");
  //   const result = await db.collection("users").find().toArray();
  //   res
  //     .status(200)
  //     .send({ message: "success users get", success: true, data: result });
  // } catch (err) {
  //   next(new HttpError(500, err.message));
  // } finally {
  //   await client.close();
  // }

  try {
    await mongoose.connect(uri);
    const result = await User.find().exec();
    res.status(200).send({ message: "success users new", success: true, data: result });
  } catch (err) {
    next(new HttpError(500, err.message));
  }
};

module.exports = {
  createUser,
  deleteUser,
  updateUser,
  userDetails,
  getUsers,
};
