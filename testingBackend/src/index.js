

const Koa = require("koa");
const Router = require("koa-router");


const app = new Koa();
const router = new Router();

router.get("/api/hello", (ctx) => {
    ctx.body = {
        message: 'world!'
    };
    ctx.status = 200;
});

app.use(router.routes()).use(router.allowedMethods());


app.listen(4000, () => {
  console.log("app is listening port", 4000);
});
