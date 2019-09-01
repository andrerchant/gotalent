import { Injectable } from '@angular/core';
import { Companies } from './companies';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  constructor() { }

  companies:Array<Companies> = [
    {id:1,filename:"logo.png",company:"Círculo de crédito S.A de C.V",managment:"Alejandra de los Santos Berlanga",date:"04/01/2019",users:150,articles:200,credits_limit:false},
    {id:2,filename:"logo.png",company:"Círculo de crédito S.A de C.V",managment:"Alejandra de los Santos Berlanga",date:"04/01/2019",users:150,articles:200,credits_limit:false},
    {id:3,filename:"logo.png",company:"Círculo de crédito S.A de C.V",managment:"Alejandra de los Santos Berlanga",date:"04/01/2019",users:150,articles:200,credits_limit:false},
    {id:4,filename:"",company:"Círculo de crédito S.A de C.V",managment:"Alejandra de los Santos Berlanga",date:"04/01/2019",users:150,articles:200,credits_limit:false},
    {id:5,filename:"logo.png",company:"Círculo de crédito S.A de C.V",managment:"Alejandra de los Santos Berlanga",date:"04/01/2019",users:150,articles:200,credits_limit:false},
    {id:6,filename:"logo.png",company:"Círculo de crédito S.A de C.V",managment:"Alejandra de los Santos Berlanga",date:"04/01/2019",users:150,articles:200,credits_limit:false},
    {id:7,filename:"",company:"Círculo de crédito S.A de C.V",managment:"Alejandra de los Santos Berlanga",date:"04/01/2019",users:150,articles:200,credits_limit:false},
    {id:8,filename:"logo.png",company:"Círculo de crédito S.A de C.V",managment:"Alejandra de los Santos Berlanga",date:"04/01/2019",users:150,articles:200,credits_limit:false},
    {id:9,filename:"logo.png",company:"Círculo de crédito S.A de C.V",managment:"Alejandra de los Santos Berlanga",date:"04/01/2019",users:150,articles:200,credits_limit:false},
    {id:10,filename:"logo.png",company:"Círculo de crédito S.A de C.V",managment:"Alejandra de los Santos Berlanga",date:"04/01/2019",users:150,articles:200,credits_limit:false},

  ]

}
