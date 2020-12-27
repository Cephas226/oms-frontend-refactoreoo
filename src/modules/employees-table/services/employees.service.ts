import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
 

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class EmployeesService {

  constructor(private http: HttpClient) { }
  getAllEmployees(){
    return this.http.get(environment.USERS_API.API_EMPLOYEES, { responseType: 'json' });
  }

}
