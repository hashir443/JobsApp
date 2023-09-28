import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiService } from 'src/app/shared/api/api.service';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppHttpService extends ApiService {

  post(obj: any, endPoint: string) {
       return this.http.post(environment.baseURL + endPoint, obj).pipe(this.handleRequest().bind(this));
  }

  get(endPoint: string, skip?: string) {
    if(skip && skip == 'skip')
      return this.http.get((environment.baseURL + endPoint), {headers:{skip:"true"}}).pipe(this.handleRequest().bind(this));
    return this.http.get(environment.baseURL + endPoint).pipe(this.handleRequest().bind(this));
  }

  delete(endPoint: string) {
    return this.http.delete(environment.baseURL + endPoint).pipe(this.handleRequest().bind(this));
  }

  update(obj: any, endPoint: string) {
    return this.http.put(environment.baseURL + endPoint, obj).pipe(this.handleRequest().bind(this));
  }

  contentUpload(obj: any, endPoint: string) {
    return this.http.post(environment.fileUploadBaseURL + endPoint, obj).pipe(this.handleRequest().bind(this));
  }

  contentDelete(endPoint: string) {
    return this.http.delete(environment.fileUploadBaseURL + endPoint).pipe(this.handleRequest().bind(this));
  }

  validatePhone(obj: any, endPoint: string) {
    let headers = new HttpHeaders({
      'auth': 'true',
    });
  let options = { headers: headers };

  
    return this.http.post(environment.baseURL + endPoint, obj, options).pipe(this.handleRequest().bind(this));
  }

  validateOtpSso(obj: any, endPoint: string) {
    let headers = new HttpHeaders({
      'auth': 'true',
    });
  let options = { headers: headers };

  
    return this.http.post(environment.baseURL + endPoint, obj, options).pipe(this.handleRequest().bind(this));
  }

  resendSsoOTP(obj: any, endPoint: string) {
    let headers = new HttpHeaders({
      'auth': 'true',
    });
  let options = { headers: headers };
    return this.http.post(environment.baseURL + endPoint, obj, options).pipe(this.handleRequest().bind(this));
  }


}
