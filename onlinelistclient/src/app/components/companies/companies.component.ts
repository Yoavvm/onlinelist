import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/comapny.model';
import { CompanyService } from 'src/app/services/company.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

  constructor(public companyService: CompanyService, public userService: UserService) { }

  getAllCompanies = () => {
    this.companyService.getAllCompanies();
  }

  getCompanyUsers = (event) => {
    console.log(event.target)
    // this.userService.getCompanyUsers()
  }

  setCompany = (company: Company) => {
    console.log(company);
    
    this.userService.chosenCompany = company;

  }

  ngOnInit(): void {
    this.companyService.getAllCompanies();
  }

}
