const mongoose = require('mongoose');

const { schema, model } = mongoose;
const usersSchema = new schema({
    name: {

        type: String,
        require: true,
    },
    phone: {
        type: String,
        require: true,
        unique: true
    },
    location: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
    }

});

const user = model("user", usersSchema);

module.export = user;