import { Make, Model } from './carsApiType';

 export default class CarsAPI {

    private apiUrlComplet:string = 'https://www.carqueryapi.com/api/0.3/?cmd=';
    private proxyUrl:string = 'https://cors-anywhere.herokuapp.com/';
    private requestHeader: HeadersInit  

    public constructor() {
       this.requestHeader = new Headers();
        this.requestHeader.set('Content-Type', 'application/json');
        this.requestHeader.set('Accept', 'application/json');
        this.requestHeader.set('origin', 'x-requested-with');

        this.fetchApi = this.fetchApi.bind(this);
        this.getMakesAsync = this.getMakesAsync.bind(this);
        this.getModelsAsync = this.getModelsAsync.bind(this);
    }
//Fonction qui pourrait être dans une base class
    private async fetchApi<T>(
        request: RequestInfo,
        header:HeadersInit
    ): Promise<T> {
        const response = await fetch(request,{headers:header});
        const body = await response.json();
        return body;
    }

    async getMakesAsync(year: string) : Promise<Make[]> {

        const data = await this.fetchApi<Make[]>(
            `${this.proxyUrl}${this.apiUrlComplet}getMakes&year=${year}`,
            this.requestHeader 
          );

          return data;
    }

    async getModelsAsync(year: string,make: string) : Promise<Model[]>{

        const data = await this.fetchApi<Model[]>(
            `${this.proxyUrl}${this.apiUrlComplet}getModels&make=${make}&year=${year}`,
            this.requestHeader 
          );

          return data;
    }
}