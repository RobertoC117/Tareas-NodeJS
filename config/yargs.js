
const descripcion = {
        demand: true,
        type:'string',
        desc: 'Descripcion de la tarea por hacer',
        alias: 'd'
}

const estado = {
    default: true,
    type: 'boolean',
    desc: 'Cambia el estado de la tarea',
    alias:'e'
}

const argv =  require('yargs')
.command('crear', 'crea una nueva tarea',{
    descripcion
})
.command('actualizar', 'actualiza el estado de la tarea',{
    descripcion,
    estado
})
.command('eliminar', 'borra una tarea',{
    descripcion
})
.help()
.argv

module.exports = {
    argv
}