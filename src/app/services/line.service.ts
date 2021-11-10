import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Line } from '../models/line';



@Injectable({
  providedIn: 'root'
})
export class LineService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Line[]>(`localhost:3000/line`);
  }

  getById(id: string) {
      return this.http.get<Line>(`localhost:3000/line/${id}`);
  }

  
}
