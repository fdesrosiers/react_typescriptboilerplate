import * as carSaga from './carSaga';

const sagas:any = {
    ...carSaga
};

export function registerWithMiddleware(middleware: { run: Function }) {
    for (let name in sagas) {
        middleware.run(sagas[name]);
    }
}