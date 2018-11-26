# Cadastro de Pessoas

Este é um projeto que por funcionalidade principal o cadastro de pessoas.

## Instalação

Instale os pacotes necessários do projeto.

```bash
npm install
```

Configure o arquivo /app/config/db-config.js com os dados da sua conexão com o MySQL.

Rode esse código para criar a base de dados e as tabelas.

```bash
npm run db-setup
```

Inicie o projeto.

```bash
npm start
```

Caso um erro do sequelize apareça, mude o parâmetro 'force' para 'true' e rode novamente. Depois lembre de voltar para 'false', pois com o parâmetro sendo 'true', o banco será apagado toda vez que reiniciar a aplicação.

```javascript
db.sequelize.sync({
    force: false
}).then(() => {
    console.log('Sync');
});
```

