const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const variavel = express();

const corsOptions = {
    origin: 'http://localhost:3000', // ajuste conforme necessário
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204
};

variavel.use(cors(corsOptions));
variavel.use(bodyParser.json());
variavel.use(bodyParser.urlencoded({ extended: true }));

const conectar = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'pdv2'
});

conectar.connect((erro) => {
    if (erro) {
        console.error('Erro com o banco de dados, tente novamente :(', erro);
    } else {
        console.log('Conectado ao banco de dados :)');
    }
});

variavel.post('/adicionar', (requisicao, resposta) => {
    const { nome, email, cpf, telefone, cep, bairro, complemento } = requisicao.body;
    const query = 'INSERT INTO informacao (nome, email, telefone, cep, bairro, complemento) VALUES ( ?, ?, ?, ?, ?, ?)';
    
    conectar.query(query, [nome, email, cpf, telefone, cep, bairro, complemento], (erro) => {
        if (erro) {
            resposta.status(500).send('Erro ao adicionar dados, tente novamente.');
        } else {
            resposta.send('Cliente adicionado');
        }
    });
});

variavel.get('/listar', (requisicao, resposta) => {
    const query = 'SELECT * FROM informacao';
    
    conectar.query(query, (erro, resultado) => {
        if (erro) {
            resposta.status(500).send('Erro, tente novamente');
        } else {
            resposta.json(resultado);
        }
    });
});

variavel.listen(3001, () => {
    console.log('Servidor rodando na porta 3001');
});
