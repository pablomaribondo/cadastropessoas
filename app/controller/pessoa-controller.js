const db = require('../config/db-config.js');
const Pessoa = db.pessoas;

exports.create = (req, res) => {
    Pessoa.create({
        id: Pessoa.id,
        nome: req.body.nome,
        dataNascimento: req.body.dataNascimento,
        cpf: req.body.cpf,
        cep: req.body.cep,
        endereco: req.body.endereco,
        enderecoNumero: req.body.enderecoNumero,
        bairro: req.body.bairro,
        cidade: req.body.cidade,
        estado: req.body.estado,
        enderecoComplemento: req.body.enderecoComplemento
    }).then(pessoa => {
        res.send(pessoa);
    }).catch((error) => {
        res.status(400).send(error.message);
    });
};

exports.findAll = (req, res) => {
    Pessoa.findAll().then(pessoas => {
        res.send(pessoas);
    });
};

exports.findById = (req, res) => {
    Pessoa.findById(req.params.pessoaId).then(pessoa => {
        res.send(pessoa);
    });
};

exports.update = (req, res) => {
    const id = req.params.pessoaId;
    Pessoa.update({
        nome: req.body.nome,
        dataNascimento: req.body.dataNascimento,
        cpf: req.body.cpf,
        cep: req.body.cep,
        endereco: req.body.endereco,
        enderecoNumero: req.body.enderecoNumero,
        bairro: req.body.bairro,
        cidade: req.body.cidade,
        estado: req.body.estado,
        enderecoComplemento: req.body.enderecoComplemento
    },
    { 
        where: {id: req.params.pessoaId} 
    }).then(() => {
        res.status(200).send('Pessoa atualizada!');
    });
};

exports.delete = (req, res) => {
    const id = req.params.pessoaId;
    Pessoa.delete({
        where: {id: id}
    }).then(() => {
        res.status(200).send('Pessoa excluída!');
    });
};