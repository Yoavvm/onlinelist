import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../models/comapny.model';
import { User } from '../models/user.model';
import { CompanyService } from './company.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) {}

  users: User[] = [];
  chosenCompany: Company;


  getCompanyUsers = () => {
    const observable:Observable<any> = this.http.get(`http://localhost:3001/users/${this.chosenCompany.companyId}`);
    observable.subscribe((response: User[]) => {
      console.log(response)
      this.users = response;
    })
  }
}
