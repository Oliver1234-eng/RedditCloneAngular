import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Zajednica } from '../model/zajednica';

@Injectable({
  providedIn: 'root'
})
export class ZajednicaService {

  addCommunityURL : string;
  getCommunityURL : string;
  updateCommunityUrl : string;
  deleteCommunityUrl : string;

  constructor(private http : HttpClient) {

    this.addCommunityURL = 'http://localhost:9091/zajednica/addCommunity';
    this.getCommunityURL = 'http://localhost:9091/zajednica/getAll';
    this.updateCommunityUrl = 'http://localhost:9091/zajednica/updateCommunity';
    this.deleteCommunityUrl = 'http://localhost:9091/zajednica/deleteCommunityById';

   }

   addCommunity(zajednica : Zajednica): Observable<Zajednica> {
     return this.http.post<Zajednica>(this.addCommunityURL,zajednica);
   }

   getAllCommunity(): Observable<Zajednica[]>{
     return this.http.get<Zajednica[]>(this.getCommunityURL);
   }

   updateCommunity(zajednica : Zajednica) : Observable<Zajednica>{
     return this.http.put<Zajednica>(this.updateCommunityUrl, zajednica);
   }

   deleteCommunity(zajednica : Zajednica) : Observable<Zajednica> {
     return this.http.delete<Zajednica>(this.deleteCommunityUrl+'/'+zajednica.id);
   }
  

}