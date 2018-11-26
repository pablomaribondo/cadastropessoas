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
                    msg: 'Campo de ID vazio!'
                }
            }
        },
        nome: {
            allowNull: false,
            type: Sequelize.STRING,
            validate: {
                notEmpty: {
                    args: true,
                    msg: 'Campo de nome vazio!'
                }
            }
        },
        dataNascimento: {
            allowNull: false,
            type: Sequelize.DATEONLY,
            validate: {
                notEmpty: {
                    args: true,
                    msg: 'Campo de data de nascimento vazio!'
                }
            }
        },
        cpf: {
            allowNull: false,
            type: Sequelize.STRING(20),
            unique: {
                args: true,
                msg: 'CPF já cadastrado!'
            },
            validate: {
                notEmpty: {
                    args: true,
                    msg: 'Campo de CPF vazio!'
                },
                validarCpf: (value, next) => {
                    var numeros, digitos, soma, i, resultado, digitos_iguais;
                    digitos_iguais = 1;
                    if (value.length < 11) {
                        return next('CPF inválido!');
                    }
                    for (i = 0; i < value.length - 1; i++)
                        if (value.charAt(i) != value.charAt(i + 1)) {
                            digitos_iguais = 0;
                            break;
                        }
                    if (!digitos_iguais) {
                        numeros = value.substring(0, 9);
                        digitos = value.substring(9);
                        soma = 0;
                        for (i = 10; i > 1; i--) {
                            soma += numeros.charAt(10 - i) * i;
                        }
                        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
                        if (resultado != digitos.charAt(0)) {
                            return next('CPF inválido!');
                        }
                        numeros = value.substring(0, 10);
                        soma = 0;
                        for (i = 11; i > 1; i--) {
                            soma += numeros.charAt(11 - i) * i;
                        }
                        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
                        if (resultado != digitos.charAt(1)) {
                            return next('CPF inválido!');
                        }
                        return next();
                    } else {
                        return next('CPF inválido!');
                    }
                }
            }
        },
        cep: {
            allowNull: false,
            type: Sequelize.INTEGER,
            validate: {
                notEmpty: {
                    args: true,
                    msg: 'Campo de CEP vazio!'
                }
            }
        },
        endereco: {
            allowNull: false,
            type: Sequelize.STRING,
            validate: {
                notEmpty: {
                    args: true,
                    msg: 'Campo de endereço vazio!'
                }
            }
        },
        enderecoNumero: {
            type: Sequelize.STRING(20)
        },
        bairro: {
            allowNull: false,
            type: Sequelize.STRING(50),
            validate: {
                notEmpty: {
                    args: true,
                    msg: 'Campo de bairro vazio!'
                }
            }
        },
        cidade: {
            allowNull: false,
            type: Sequelize.STRING(50),
            validate: {
                notEmpty: {
                    args: true,
                    msg: 'Campo de cidade vazio!'
                }
            }
        },
        estado: {
            allowNull: false,
            type: Sequelize.STRING(50),
            validate: {
                notEmpty: {
                    args: true,
                    msg: 'Campo de estado vazio!'
                }
            }
        },
        enderecoComplemento: {
            type: Sequelize.STRING(50)
        }
    });
    return Pessoa;
}