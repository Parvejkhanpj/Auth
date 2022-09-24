const mongoose = require("mongoose");

module.exports = () => {
  const connectParam = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  try {
    mongoose.connect(process.env.DB, connectParam);
    console.log("coneected To Database Sucesssfull");
  } catch (error) {
    console.log(error);
    console.log("could not conected to database");
  }
};
