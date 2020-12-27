import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }
  getAllStudents(){
    return this.http.get(environment.USERS_API.API_STUDENTS, { responseType: 'json' });
  }
}
