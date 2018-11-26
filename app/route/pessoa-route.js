module.exports = (app) => {

    const pessoa = require('../controller/pessoa-controller.js');
   
    app.get('/', pessoa.findAll);

    app.get('/adicionar-pessoas', (req, res, next) => {
        res.render('pessoa-add');
    });

    app.post('/adicionar-pessoas', pessoa.create);

    app.get('/editar-pessoas/:pessoaId', pessoa.findById);
    //Falta implementar front end do 'editar pessoas'
    app.put('/editar-pesoas/:pessoaId', pessoa.update);

    app.delete('/editar-pessoas/:pessoaId', pessoa.delete);

}