import User from "../models/User.js";

//export const getAllUsers = (req, res) => {
//   User.find()
//     .then((data) => res.status(200).json({ users: data }))
//     .catch((err) => res.status(500).json(err));

export const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find();
    res.status(200).json({ users: allUsers });
  } catch (error) {
    res.status(500).json(err);
  }
};

export const getSingleUser = async (req, res) => {
  try {
    const { id } = req.params;
    const singleUser = await User.findById(id);
    res.status(200).json(singleUser);
  } catch (error) {
    res.status(500).json(err);
  }
};

export const createNewUser = async (req, res) => {
  try {
    const { first_name, last_name, age } = req.body;
    const newUser = await User.create({ first_name, last_name, age });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.status(200).send("User successfully deleted");
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { first_name, last_name, age } = req.body;
    const modifiedUser = await User.findByIdAndUpdate(
      id,
      { first_name, last_name, age },
      { new: true }
    );
    res.status(200).json(modifiedUser);
  } catch (error) {
    res.status(500).json(error);
  }
};
