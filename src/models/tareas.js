const { model, Schema } = require('mongoose');

const tareaSchema = new Schema({
    titulo: {
        type: String,
        required: true,
    },
    descrip: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        required: true,
        default: true,
    },
}, {
    versionKey: false,
    timestamps: true
});

module.exports = model('Taks', tareaSchema);