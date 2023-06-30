const {Router} = require("express");
const {
    getUsersHandler,
    getDetailHandler,
    createUserHandler,
    updateHandler,
    deleteHandler,
} = require ("../handlers/usersHandlers");



const usersRouter = Router();

usersRouter.post("/users", createUserHandler); //!dsfsdfsd

usersRouter.get("/users/:id", getDetailHandler);//!dsfsdfsd

usersRouter.get("/users", getUsersHandler); //!dsfsdfsd

usersRouter.put("/update", updateHandler);//!dsfsdfsd

usersRouter.delete("/delete/:id", deleteHandler) //!dsfsdfsd

module.exports = usersRouter;