import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Order } from '../model/order';


const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})

export class OrderService {
  private url = `${base_url}/Orders`;
  private listaCambio = new Subject<Order[]>();
  constructor(private http: HttpClient) {}
  list() {
    return this.http.get<Order[]>(this.url);
  }
  insert(or: Order) {
    return this.http.post(this.url, or);
  }
  setList(listaNueva: Order[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
  }
}
