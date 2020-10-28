const fs = require("fs"); //file system module included with node - because we're going to be dealing with files
const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv");

//Load env vars
dotenv.config({ path: "./config/config.env" });

//Load models
const Asset = require("./models/Asset");
const Product = require("./models/Product");

//Connect to DB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

//Read JSON files
const assets = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/assets.json`, "utf-8")
);
const products = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/products.json`, "utf-8")
);

//Import into DB
const importData = async () => {
  try {
    await Asset.create(assets); //the goal is to import it to the db so that's why 
    // we're not doing const something = await because we don't need to respond with anything
    await Product.create(products);
    console.log("Data Imported...".green.inverse);
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

//Delete data
const deleteData = async () => {
  try {
    await Asset.deleteMany(); //if we don't pass anything in, it's just going to delete all of them and that's what we want to do
    await Product.deleteMany();
    console.log("Data Destroyed...".red.inverse);
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

if (process.argv[2] === "-i") {
  importData();
} else if (process.argv[2] === "-d") {
  deleteData();
}
//if we run node seeder -i in the console, it should automatically import data to the db
//if we run node seeder -d in the console, it should automatically delete all data from the db
