import Application = require("koa");
import * as Router from "koa-router";
import {AuthController} from "./auth-controller";

export class Server {
    private app: Application = new Application();

    constructor(private auth: AuthController) {
        let router = new Router();
        router.get('/', context => {
            context.response.body = 'Hello';
        });
        router.use(this.auth.router().middleware());
        this.app.use(router.middleware());
    }

    listen() {
        this.app.listen(8080, () => {
            console.log('listening on port: 8080');
        })
    }
}
