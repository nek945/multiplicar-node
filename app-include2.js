const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            defaul: 10
        }
    })
    .help()
    .argv;

const { crearArchivo, listarTabla } = multiplicar = require('./multiplicar/multiplicar');


let comando = argv._[0];


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