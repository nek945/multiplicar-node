const fs = require('fs');

crearArchivo = (base) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }
        let data = '';

        for (let i = 1; i <= 10; i++) {

            data += `${base} * ${i} = ${base*i} \n`;

        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`);

        });

    });

}

let listarTabla = (base, limite = 10) => {

    for (let i = 1; i <= limite; i++) {

        console.log(`${base} * ${i} = ${base*i}`);

    }
}

module.exports = {
    crearArchivo,
    listarTabla
}