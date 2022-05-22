import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../models/comapny.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  constructor(private http: HttpClient) { }

  companies: Company[] = [];

  baseUrl: string = 'http://localhost:3001/companies/'

  getAllCompanies = () => {
    const observable = this.http.get(this.baseUrl);
    observable.subscribe((response: Company[]) => {
     try {
       console.log(response)
      this.companies = response;
       
     } catch (error) {
       console.log(error)
       alert(error)
     }
    })
  }



}
