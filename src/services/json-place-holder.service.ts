import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';
import {EmpType} from '../Emp/Type';
import {DepType} from '../Dep/Type';

@Injectable({
  providedIn: 'root'
})
export class JsonPlaceHolderService {

  serchUrl = 'http://localhost:3000/serch';
  delUrl = 'http://localhost:3000/delete';
  EditUrl = 'http://localhost:3000/edit';
  depUrl = 'http://localhost:3000/departments';
  empURl = 'http://localhost:3000/getall';
  PaginUrl = 'http://localhost:3000/find';
  AmountURl = 'http://localhost:3000/amount';

  constructor(
    private  http: HttpClient
  ) {
  }

  getAmount(): Observable<number> {
    return this.http.get<number>(this.AmountURl);
  }

  postDel(id) {
    return this.http.post(this.delUrl, {id});
  }

  getSome(skip): Observable<DepType[]> {
    return this.http.post<DepType[]>(this.PaginUrl, {skip});
  }

  getDep(): Observable<DepType[]> {
    return this.http.get<DepType[]>(this.depUrl);
  }


  getAll(): Observable<EmpType[]> {
    return this.http.get<EmpType[]>(this.empURl);
  }

  postSerch(name) {

    return this.http.post(this.serchUrl, {name});
  }

  postEdit(body) {
    return this.http.post(this.EditUrl, body);
  }


}
