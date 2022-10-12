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
    isActive: {
        type: Boolean,
        required: true,
        default: true,
    },
    userId:{
        type:Schema.Types.ObjectId, ref: 'users'
    },
    categories: [
        { type: Schema.Types.ObjectId, ref: 'Categories' }
    ]
}, {
    versionKey: false,
    timestamps: true
});

module.exports = model('Taks', tareaSchema);