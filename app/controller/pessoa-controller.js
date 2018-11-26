const db = require('../config/db-config.js');
const handlebars = require('handlebars');
const Sequelize = require('sequelize');
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
        res.redirect('/');
    }).catch(Sequelize.ValidationError, (error) => {
        res.render('pessoa-add', {
            error: error
        });
    });
};

exports.findAll = (req,res) => {
    Pessoa.findAll().then(pessoas => {
        res.render('pessoa-list', {
            pessoas: pessoas,
            helpers: {
                list: () => {
                    let str = '';
                    for (let i = 0; i < pessoas.length; i++) {
                        str += `<tr><td>${pessoas[i].dataValues.nome}</td><td>${pessoas[i].dataValues.dataNascimento}</td><td>${pessoas[i].dataValues.cpf}</td><td>${pessoas[i].dataValues.cep}</td><td>${pessoas[i].dataValues.endereco}</td><td>${pessoas[i].dataValues.enderecoNumero}</td><td>${pessoas[i].dataValues.bairro}</td><td>${pessoas[i].dataValues.cidade}</td><td>${pessoas[i].dataValues.estado}</td><td>${pessoas[i].dataValues.enderecoComplemento}</td></tr>`;
                    };
                    return new handlebars.SafeString(str);
                }
            }
        });
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