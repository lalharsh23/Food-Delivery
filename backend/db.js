const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://lalharsh23:Lovesuta@ordernow.vqzt5ss.mongodb.net/ordernow?retryWrites=true&w=majority&appName=ordernow";
const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log("Connected to MongoDB");
    // Accessing the collection directly
    const collection = mongoose.connection.db.collection("foodData");
    // Using await to get the data
    const data = await collection.find({}).toArray();
    global.foodData = data;

    const foodCategory = mongoose.connection.db.collection("foodCategory");
    const data1 = await foodCategory.find({}).toArray();
    global.foodCategory = data1;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = mongoDB;
