import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  addPostURL : string;
  getPostURL : string;
  updatePostUrl : string;
  deletePostUrl : string;

  constructor(private http : HttpClient) {

    this.addPostURL = 'http://localhost:9091/post/addPost';
    this.getPostURL = 'http://localhost:9091/post/getAll';
    this.updatePostUrl = 'http://localhost:9091/post/updatePost';
    this.deletePostUrl = 'http://localhost:9091/post/deletePostById';

   }

   addPost(post : Post): Observable<Post> {
     return this.http.post<Post>(this.addPostURL,post);
   }

   getAllPost(): Observable<Post[]>{
     return this.http.get<Post[]>(this.getPostURL);
   }

   updatePost(post : Post) : Observable<Post>{
     return this.http.put<Post>(this.updatePostUrl, post);
   }

   deletePost(post : Post) : Observable<Post> {
     return this.http.delete<Post>(this.deletePostUrl+'/'+ post.id);
   }
  

}