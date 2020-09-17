
const fs = require('fs');

let listado_notas = [];

const crearTarea  = ( descripcion ) => {

    cargarDB(); 

    let nuevaNota ={
        descripcion,
        estado: false
    };

    listado_notas.push(nuevaNota);

    guardar();

    return nuevaNota;
}

const actualizarTarea = (descripcion, estado = true) =>{
    cargarDB();
    let index = listado_notas.findIndex(tarea => tarea.descripcion === descripcion)
    if(index >= 0)
    {
        listado_notas[index].estado = estado;
        guardar()
        return true
    }

    return false
}

const eliminarTarea = (descripcion) =>{
        cargarDB();
        let lista = listado_notas.filter(tarea => tarea.descripcion != descripcion)
        if(lista.length === listado_notas.length)
            return false
            
        listado_notas = lista;
        guardar();
        return true
}
 
const guardar = () =>{

    let data = JSON.stringify(listado_notas);

    fs.writeFile('db/data.json', data, (err) =>{
        if(err)
            throw new Error('No se pudo crear la tarea', err)
    })

}

const cargarDB = () =>{
    try {
        listado_notas = require('../db/data.json')   
    } catch (error) {
        listado_notas = []
    }
}

const getListado = () =>{
    cargarDB();
    return listado_notas
}

module.exports = {
    crearTarea,
    actualizarTarea,
    eliminarTarea,
    getListado
}