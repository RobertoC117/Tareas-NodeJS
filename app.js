const color = require('colors')
const {argv} =  require('./config/yargs')
const { crearTarea, getListado, actualizarTarea, eliminarTarea } = require('./por-hacer/por-hacer')

//console.log(argv)

let command = argv._[0]

switch (command) {
    case 'crear':

        console.log('Crear notas')
        let tarea = crearTarea( argv.descripcion )
        console.log(tarea)
        break;


    case 'listar':

        let lista = getListado();
        if(lista.length === 0)
        {
            console.log('== AUN NO EXISTEN TAREAS =='.red)
            break;
        }
        console.log('======== TAREAS ========'.green)
        for (const tarea of lista) {
            console.log(tarea.descripcion)
            console.log(`Estado: ${tarea.estado ? 'realizada' : 'pendiente' } `)
            console.log('========================'.green)
        }
        console.log('Listar notas')
        break;


    case 'actualizar':

        if(actualizarTarea(argv.descripcion, argv.estado))
            console.log('Hecho!!'.green)
        else 
            console.log('Algo salio mal :('.red)
        break;


    case 'eliminar':

        if(eliminarTarea(argv.descripcion))
            console.log('Hecho!!'.green)
        else 
            console.log('Algo salio mal :('.red)
        break;


    default:

        console.log('Comando desconocido')
        break;
}
