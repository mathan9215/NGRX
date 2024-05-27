import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { blogModel } from './store/blog/blog.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http:HttpClient) { }

  getAllBlogs():Observable<blogModel[]>{
    return this.http.get<blogModel[]>('http://localhost:3000/bloglist');
    
  }
}
