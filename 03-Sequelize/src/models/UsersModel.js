const {DataTypes} = require("sequelize");
const { sequelize } = require("../db");

//*sequelize.define(nombre-tabla, modelo-objeto, configs-extra)
//* DEFINIR la tabla en singular (User) porque luego Sequilize lo va a transformar a plural (tabla Users). Se puede configurar para que no lo haga en el 3er arg.

module.exports = (sequelize) => {
    sequelize.define("User", 
        {
            id: {
                type: DataTypes.UUID, //crea un string combinado de nums y letras
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4  //*IMPORTANTE es un algoritmo que genera un UUID aleatorio
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                set(value) {
                    this.setDataValue("name", value.toLowerCase());
                }
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            fechaNacimiento: {
                type: DataTypes.DATE,
                defaultValue: new Date("1987-05-18")
            },
            age: {
                type: DataTypes.VIRTUAL,
                get(){
                    const hoy = new Date();
                    const nacimiento = new Date(this.fechaNacimiento);
                    const calculo = hoy.getTime() - nacimiento.getTime();
                    return Math.floor(calculo / (1000*60*60*24*365.25));
                }
            }
        },
        {timestamps: false}
    );
}