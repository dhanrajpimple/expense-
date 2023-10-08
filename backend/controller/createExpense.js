const User = require("../models/User");

exports.createExpense = async (req, res) => {
  try {
    console.log("req body", req.body);
    const { name,date, amount } = req.body;
    if (!name || !amount || !date) {
      console.log("not all fields...");
      return res.status(400).json({
        status: 400,
        message: "Please fill all fields",
      });
    }
    const user = await User.create({
      name,
      date,
      amount
    });
    return res.status(200).json({
      status: 201,
      message: "expense  created successfully",
      data: user,
    });
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};
