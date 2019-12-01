import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AsyncService {

  constructor(private http:HttpClient) { }

  read():Observable<any>{
    return this.http.get<any>('http://localhost:8080/Crud/ws/v1/read');
  }
}
