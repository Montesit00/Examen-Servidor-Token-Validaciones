const { model, Schema } = require('mongoose');

const UserSchema = new Schema({
    usuario: {
        type: String,
        required: true,
    },
    contraseña: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
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

module.exports = model('Users', UserSchema);