import Express from 'express';
import routes from './routes';
import './database';
import path from 'path';

class App {
    constructor() {
        this.server = new Express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.server.use(Express.json());
        this.server.use(
            '/files',
            Express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
        );
    }

    routes() {
        this.server.use(routes);
    }
}

export default new App().server;
