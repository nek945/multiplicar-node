const argv = require('./config/yargs').argv;

const { crearArchivo, listarTabla } = multiplicar = require('./multiplicar/multiplicar');


let comando = argv._[0];
let argv2 = process.argv;

switch (comando) {

    case 'listar':
        listarTabla(arg.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(arg.base)
            .then(archivo => console.log(`Archivo creado ${archivo}`))
            .catch(e => console.log(e));
        break;
    case 'default':
        console.log('Comando no reconocido');

}