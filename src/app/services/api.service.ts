import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public get http(): HttpClient {
    return this._http;
  }
  public set http(value: HttpClient) {
    this._http = value;
  }

  constructor(private _http: HttpClient) { }

  apiConnect() {
    return this.http.get("https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple")
  }
}