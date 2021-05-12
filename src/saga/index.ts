/* à déterminer */ 
const sagas = {

};

export function registerWithMiddleware(middleware: { run: Function }) {
    for (const field of Object.keys(sagas)) {
        // middleware.run(sagas[field]);
    }
}