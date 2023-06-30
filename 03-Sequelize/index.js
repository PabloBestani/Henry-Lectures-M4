const server = require("./src/app");
const {sequelize} = require("./src/db");
const PORT = 3001;

server.listen(PORT, () => {
    //! POr ahora lo seteamos en true porque queremos que las tablas se reseteen en cada inicializacion. Pero despues cuando el proyecto este en uso necesitamos que no se reseteen (force:false) para que guarde la data de cada usuario
    sequelize.sync({force:true});
    // sequelize.sync({force:false});
    console.log(`Listening on port ${PORT}`);
});