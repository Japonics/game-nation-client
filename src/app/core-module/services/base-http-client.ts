import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {prepareAPIUrl} from '../functions/prepare-api-url.function';
import {Injectable} from '@angular/core';

@Injectable()
export class BaseHttpClient {

  protected _token: string = null;

  constructor(protected _httpClient: HttpClient) {

  }

  public saveToken(token: string): void {
    this._token = token;
  }

  protected get(url: string, options: any): Observable<ArrayBuffer> {
    return this._httpClient
      .get(BaseHttpClient._prepareUrl(url), options);
  }

  protected post(url: string, data: any, options?: any): Observable<ArrayBuffer> {
    return this._httpClient
      .post(BaseHttpClient._prepareUrl(url), data, this._prepareOptions());
  }

  protected put(url: string, data: any, options: any): Observable<ArrayBuffer> {
    return this._httpClient
      .put(BaseHttpClient._prepareUrl(url), data, options);
  }

  protected delete(url: string, options: any): Observable<ArrayBuffer> {
    return this._httpClient
      .delete(BaseHttpClient._prepareUrl(url), options);
  }

  protected patch(url: string, data: any, options: any): Observable<ArrayBuffer> {
    return this._httpClient
      .patch(BaseHttpClient._prepareUrl(url), data, options);
  }

  private _prepareOptions(): any {
    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this._token}`
      })
    };
  }

  private static _prepareUrl(url: string): string {
    return prepareAPIUrl(url);
  }
}
