module.exports = (app) => {

    const pessoa = require('../controller/pessoa-controller.js');
   
    app.get('/', pessoa.findAll);

    app.post('/api/pessoas', pessoa.create);

    app.get('/api/pessoas', pessoa.findAll);

    app.get('/api/pessoas/:pessoaId', pessoa.findById);

    app.put('/api/pessoas/:pessoaId', pessoa.update);

    app.delete('/api/pessoas/:pessoaId', pessoa.delete);

}