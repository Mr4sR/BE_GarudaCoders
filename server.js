'use strict';

const Hapi = require('@hapi/hapi');

const init = async () => {

    const server = Hapi.server({
        port: 3000, // Tentukan port yang Anda inginkan
        host: 'localhost' // Tentukan host (biasanya 'localhost' untuk pengembangan)
    });

    // Definisikan rute (route) pertama Anda
    server.route([ // <-- Tambahkan kurung siku di sini
        {
            method: 'GET',
            path: '/pegawai',
            handler: (request, h) => {
                return 'Nama Pegawai';
            }
        },
        {
            method: 'GET',
            path: '/pegawai/kelola',
            handler: (request, h) => {
                return 'List Pegawai';
            }
        },
        {
            method: 'POST',
            path: '/pegawai/kelola/tambah',
            handler: (request, h) => {
                return 'Minta Nama, Alamat Dll';
            }
        },
        {
            method: 'POST',
            path: '/pegawai/kelola/edit',
            handler: (request, h) => {
                return 'Minta ID, Nama, Alamat Dll';
            }
        }
    ]); // <-- Tambahkan kurung siku penutup di sini

    await server.start();
    console.log('Server berjalan di %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();