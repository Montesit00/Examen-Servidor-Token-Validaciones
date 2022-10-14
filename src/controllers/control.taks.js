const Task = require("../models/tareas");

const controlTarea = {}

controlTarea.createTask = async (req, res) => {
    const { titulo, descrip } = req.body;

    const task = new Task({
        titulo,
        descrip,
        userId: req.user._id
    });


    try {
        const newTask = await task.save();

        return res.json({
            msg: 'Tarea creada correctamente',
            newTask
        })
    } catch (error) {
        return res.status(500).json({
            msg:'Error al crear la tarea'
        })
    }
}

controlTarea.getTaskID = async (req, res) => {
    try {
        const TaskID = req.params.idTask;
        const Tasks = await Task.findOne({$and: [{"_id":TaskID},{isActive:true}]});

        if (Tasks) {
            return res.json({
                message: 'Tarea encontrado',
                Tasks
            });
        }error

    } catch(error) {
        return res.status(404).json({message: 'No se encontro la Tarea'})  
    }
}


controlTarea.getTask = async (req, res) => {
    const tasks = await Task.find({ userId: req.user._id })
    .populate('userId', ['username','email'])
    return res.json(tasks);
}


controlTarea.postTarea = async (req, res) => {
    const {titulo,descrip} = req.body;
    const newTarea = new Task({
        titulo,
        descrip
    }); 

    const tarea = await newTarea.save();

    return res.json({msg: 'Tarea creada correctamente',tarea});
}

controlTarea.putTask = async (req,res) => {
    const id = req.params.id;
    const { titulo, descrip, ...otroDatos } = req.body;

    if (!id || !descrip || !titulo) {
        return res.status(400).json({
            msg: 'No viene id en la petición',
        });
    };

    try {
        const tareaActualizada = await Task.findByIdAndUpdate(id, { titulo, descrip })

        if(actualizarTarea == null){
            return res.status(400).json({
                msg:"Error al actualizar la tarea - id incorrecto"
            })
        }

        return res.json({
            msg: 'Tarea actualizada correctamente',
        });
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            msg: 'Error al actualizar la tarea'
        })
    }
};
controlTarea.deleteTask = async (req,res) => {
    const id = req.params.id;

    try {
        await Task.findByIdAndUpdate(id, { isActive: false })
        return res.json('Tarea eliminada correctamente');
    } catch (err) {
        console.log(err.message)
        return res.status(500).json({
            msg: 'Error al eliminar la tarea'
        });
    }
};

module.exports = controlTarea;