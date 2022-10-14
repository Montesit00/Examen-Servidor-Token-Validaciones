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
    isDone:{
        type:Boolean,
        default:false
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

tareaSchema.methods.toJSON = function(){
    const {_id,...task}=this.toObject();
    task.uid = _id;
    return task
}

module.exports = model('Taks', tareaSchema);