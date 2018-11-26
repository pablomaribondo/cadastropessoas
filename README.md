# Cadastro de Pessoas

Este é um projeto que visa gerir dados de pessoas.

## Instalação

Instale os pacotes necessários do projeto.

```bash
npm install
```

Configure o arquivo db-config.js com os dados do seu mysql.

Rode o arquivo db-setup.js

```bash
node /app/config/db-setup.js
```

Rode o arquivo principal.

```bash
node server.js
```

Caso um erro do sequelize apareça, mude o parâmetro force para true e rode novamente. Depois lembre de voltar para false, pois com o parâmetro sendo true, o banco será apagado toda vez que reiniciar a aplicação.

```javascript
db.sequelize.sync({
    force: false
}).then(() => {
    console.log('Sync');
});
```

