import { Make } from './carsApiType';


class CarsAPI {
    public constructor() {

    }

    getMakesAsync(year: string) : Promise<Make[]> {
        const promise : Promise<Make[]> = new Promise((resolve, reject) => {
                let makes : Make[];
                makes=[];

                resolve(makes);

        });
        return promise;
    }

    getModelsAsync(year: string,make: string) : Promise<Make[]> {
        const promise : Promise<Make[]> = new Promise((resolve, reject) => {
                let makes : Make[];
                makes=[];

                resolve(makes);

        });
        return promise;
    }
}

export default new CarsAPI();