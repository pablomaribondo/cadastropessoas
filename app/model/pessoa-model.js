module.exports = (sequelize, Sequelize) => {
    const Pessoa = sequelize.define('pessoa', {
        id: {
            primaryKey: true,
            allowNull: false,
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            validate: {
                notEmpty: {
                    args: true,
                    msg: 'Campo vazio!'
                }
            }
        },
        nome: {
            allowNull: false,
            type: Sequelize.STRING,
            validate: {
                notEmpty: {
                    args: true,
                    msg: 'Campo vazio!'
                }
            }
        }, 
        dataNascimento: {
            allowNull: false,
            type: Sequelize.DATE,
            validate: {
                notEmpty: {
                    args: true,
                    msg: 'Campo vazio!'
                }
            }
        }, 
        cpf: {
            allowNull: false,
            type: Sequelize.STRING,
            unique: {
                args: true,
                msg: 'CPF já cadastrado!'
            },
            validate: {
                notEmpty: {
                    args: true,
                    msg: 'Campo vazio!'
                }
            }
        },
        cep: {
            allowNull: false,
            type: Sequelize.INTEGER,
            validate: {
                notEmpty: {
                    args: true,
                    msg: 'Campo vazio!'
                }
            }
        },
        endereco: {
            allowNull: false,
            type: Sequelize.STRING,
            validate: {
                notEmpty: {
                    args: true,
                    msg: 'Campo vazio!'
                }
            }
        },
        enderecoNumero: {
            type: Sequelize.STRING
        },
        bairro: {
            allowNull: false,
            type: Sequelize.STRING,
            validate: {
                notEmpty: {
                    args: true,
                    msg: 'Campo vazio!'
                }
            }
        },
        cidade: {
            allowNull: false,
            type: Sequelize.STRING,
            validate: {
                notEmpty: {
                    args: true,
                    msg: 'Campo vazio!'
                }
            }
        },
        estado: {
            allowNull: false,
            type: Sequelize.STRING,
            validate: {
                notEmpty:  {
                    args: true,
                    msg: 'Campo vazio!'
                }
            }
        },
        enderecoComplemento: {
            type: Sequelize.STRING
        }
    });
    return Pessoa;
}