import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';
// import { catchError } from 'rxjs/operators';

// import Data from './models/data';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }


  public getJSON(){
    return this.http.get("./assets/TestJSON.json");
    // .pipe(map((res: any) => res.json()));
    // .pipe(catchError((error: any) => console.log(error));
  }
}
