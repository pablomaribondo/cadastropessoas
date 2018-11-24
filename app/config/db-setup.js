const env = require('./env.js');
const mysql = require('mysql2');

const mysqlDB = mysql.createConnection({
        user: env.username,
        password: env.password,
        host: env.host,
        port: env.port
});

mysqlDB.connect((error) => {
    if (error) {
        console.log(error)
    } else {
        console.log(`MySQL database running on port ${env.port}...`)
        mysqlDB.query("SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = 'cadastropessoas_db'", (error, result) => {
            if (error) {
                console.log(error);
            } else {
                if (typeof result != "undefined" && result != null && result.length != null && result.length === 0) {
                    mysqlDB.query("CREATE DATABASE cadastropessoas_db", (error, result) => {
                        if (error) {
                            console.log(error);
                        } else {
                            console.log('Database created!');
                        }
                    });
                    mysqlDB.query("CREATE TABLE cadastropessoas_db.pessoas (id VARCHAR(36) NOT NULL, nome VARCHAR(255) NOT NULL, dataNascimento DATE NOT NULL, cpf VARCHAR(20) NOT NULL UNIQUE, cep INT NOT NULL,endereco VARCHAR(255) NOT NULL, enderecoNumero VARCHAR(20), bairro VARCHAR(50) NOT NULL, cidade VARCHAR(50) NOT NULL, estado VARCHAR(50) NOT NULL, enderecoComplemento VARCHAR(50), PRIMARY KEY (id))", (error, result) => {
                        if (error) {
                            console.log(error);
                        } else {
                            console.log('Table created!');
                        }
                    });
                }
            }
        });
    }
});
