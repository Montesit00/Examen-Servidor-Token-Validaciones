const Tarea = require("../models/tareas");

const controlTarea = {}

controlTarea.getTarea = async (req,res) => {
    const tasks = await Tarea.find({ isActive: true });

    return res.render('index', {tasks});
};

controlTarea.postTarea = async (req, res) => {
    const {titulo,descrip} = req.body;
    const newTarea = new Tarea({
        titulo,
        descrip
    }); 

    const tarea = await newTarea.save();

    return res.json({msg: 'Tarea creada correctamente',tarea});
}

controlTarea.putTarea = async (req,res) => {
    const id = req.params.id;
    const { titulo, descripcion, ...otroDatos } = req.body;

    if (!id || !descripcion || !titulo) {
        return res.status(400).json({
            msg: 'No viene id en la petición',
        });
    };

    try {
        const tareaActualizada = await Tasks.findByIdAndUpdate(id, { titulo, descripcion })

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
controlTarea.deleteTarea = async (req,res) => {
    const id = req.params.id;

    try {
        await Tarea.findByIdAndUpdate(id, { isActive: false })
        return res.json('Tarea eliminada correctamente');
    } catch (err) {
        console.log(err.message)
        return res.status(500).json({
            msg: 'Error al eliminar la tarea'
        });
    }
};

module.exports = controlTarea;