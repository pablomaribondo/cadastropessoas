export default (sequelize, Sequelize) => {
    const Pessoa = sequelize.define('pessoa', {
        id: {
            primaryKey: true,
            allowNull: false,
            type: Sequelize.UUID,
            validate: {
                notNull: true
            }
        },
        nome: {
            allowNull: false,
            type: Sequelize.STRING,
            validate: {
                notNull: true
            }
        }, 
        dataNascimento: {
            allowNull: false,
            type: Sequelize.DATE,
            validate: {
                notNull: true
            }
        }, 
        cpf: {
            allowNull: false,
            type: Sequelize.STRING,
            validate: {
                notNull: true
            },
            unique: {
                args: true,
                msg: 'CPF existente!'
            }
        },
        cep: {
            allowNull: false,
            type: Sequelize.INTEGER,
            validate: {
                notNull: true
            }
        },
        endereco: {
            allowNull: false,
            type: Sequelize.STRING,
            validate: {
                notNull: true
            }
        },
        enderecoNumero: {
            type: Sequelize.STRING
        },
        bairro: {
            allowNull: false,
            type: Sequelize.STRING,
            validate: {
                notNull: true
            }
        },
        cidade: {
            allowNull: false,
            type: Sequelize.STRING,
            validate: {
                notNull: true
            }
        },
        estado: {
            allowNull: false,
            type: Sequelize.STRING,
            validate: {
                notNull: true
            }
        },
        enderecoComplemento: {
            type: Sequelize.STRING
        }
    });
    return Pessoa;
}