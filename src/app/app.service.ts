// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  sendQuery(data: any) {
    const post = localStorage.setItem("contacts", JSON.stringify(data));
    return post;
  }

  getData() {
    const get = localStorage.getItem("contacts");
    return get;
  }
}
