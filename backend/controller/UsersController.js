const userModel = require('../models/Users');
const cloudinary = require("cloudinary").v2;

exports.getUsers = async (req, res, next) => {
    const allUsers = await userModel.find();
    res.send(allUsers);
}

exports.addUser = async (req, res, next) => {
    const newUser = new userModel(req.body);
    await newUser.save();
    res.send('user added');
}
/* exports.addUser = async (req, res, next) => {
    const {image} = req.body;
    const uploadResult = await cloudinary.uploader.upload(image);
    const userData = {...req.body, imageUrl:uploadResult.secure_url}
    const newUser = new userModel(userData);
    await newUser.save();
    res.send('user added');
} */