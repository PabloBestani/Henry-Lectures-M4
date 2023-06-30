const {Router} = require("express");
const {
    createPostHandler,

} = require ("../handlers/PostsHandlers");



const postsRouter = Router();

postsRouter.post("/posts/", createPostHandler);

module.exports = postsRouter;