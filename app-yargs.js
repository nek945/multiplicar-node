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

let argv2 = process.argv;

console.log(argv.base);
console.log('limite', argv.limite);