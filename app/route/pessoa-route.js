module.exports =  (app) => {
    const pessoas = require('../controller/pessoa-controller.js');
    app.post('/api/pessoas', pessoas.create);
    app.get('/api/pessoas', pessoas.findAll);
    app.get('/api/pessoas/:pessoaId', pessoas.findById);
    app.put('/api/pessoas/:pessoaId', pessoas.update);
    app.delete('/api/pessoas/:pessoaId', pessoas.delete);
}