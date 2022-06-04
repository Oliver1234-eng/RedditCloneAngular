import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Korisnik } from '../model/korisnik';

@Injectable({
  providedIn: 'root'
})
export class KorisnikService {

  addUserURL : string;
  getUserURL : string;
  updateUserUrl : string;
  deleteUserUrl : string;

  constructor(private http : HttpClient) {

    this.addUserURL = 'http://localhost:9091/korisnik/addUser';
    this.getUserURL = 'http://localhost:9091/korisnik/getAll';
    this.updateUserUrl = 'http://localhost:9091/korisnik/updateUser';
    this.deleteUserUrl = 'http://localhost:9091/korisnik/deleteUserById';

   }

   addUser(korisnik : Korisnik): Observable<Korisnik> {
     return this.http.post<Korisnik>(this.addUserURL,korisnik);
   }

   getAllUser(): Observable<Korisnik[]>{
     return this.http.get<Korisnik[]>(this.getUserURL);
   }

   updateUser(korisnik : Korisnik) : Observable<Korisnik>{
     return this.http.put<Korisnik>(this.updateUserUrl, korisnik);
   }

   deleteUser(korisnik : Korisnik) : Observable<Korisnik> {
     return this.http.delete<Korisnik>(this.deleteUserUrl+'/'+korisnik.id);
   }
  

}