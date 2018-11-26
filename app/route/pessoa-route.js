module.exports = (app) => {

    const pessoa = require('../controller/pessoa-controller.js');
   
    app.get('/', pessoa.findAll);

    app.get('/adicionar-pessoas', (req, res, next) => {
        res.render('pessoa-add');
    });

    app.post('/adicionar-pessoas', pessoa.create);

    app.get('/editar-pessoas/:pessoaId', pessoa.findById);

    app.put('/api/pessoas/:pessoaId', pessoa.update);

    app.delete('/editar-pessoas/:pessoaId', pessoa.delete);

}