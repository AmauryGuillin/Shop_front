import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductPayload } from '../types/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private _baseUrl = 'http://localhost:8080/api/product';
  private _findAll = 'findAll';
  private _create = 'create';
  private _update = 'update';
  private _delete = 'delete';

  constructor(private _http: HttpClient) {}

  getAllProducts$() {
    return this._http.get<ProductPayload>(`${this._baseUrl}/${this._findAll}`);
  }
}
