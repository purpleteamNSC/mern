const mongoose = require("mongoose");

const connectDatabase = () => {
    console.log("Wait connecting too the database");

    mongoose
        .connect("mongodb+srv://gestor:D6famq28J7LEgyml@cluster0.3vq8uuy.mongodb.net/?retryWrites=true&w=majority",
            { useNewUrlParser: true, useUnifiedTopology: true }
        ).then(() => console.log("MongoDB Atlas Connected"))
        .catch((error) => console.log(error));
};

module.exports = connectDatabase;