import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { GenericDataResponse } from '../interfaces/generic-response.interface';

@Injectable({
  providedIn: 'root',
})
export abstract class ResourceService<G, T = unknown> {
  private readonly environment = environment;

  constructor(protected httpClient: HttpClient) {}

  protected request(
    method: keyof HttpClient,  // Constrain `method` to be one of the HttpClient methods
    url: string,
    body?: T | T[],
    params?: HttpParams
  ): Observable<GenericDataResponse<G>> {
    // Check if the method is an HTTP method of HttpClient and call it directly
    return (this.httpClient[method] as Function)(this.environment.url + url, {
      body,
      params,
      headers: new HttpHeaders(), // Optional headers, add if needed
    }).pipe(catchError(this.handleError));
  }

  protected post(url: string, data: T): Observable<GenericDataResponse<G>> {
    return this.request('post', url, data);
  }

  protected get(url: string): Observable<GenericDataResponse<G>> {
    return this.request('get', url);
  }

  protected getById(
    url: string,
    id: number
  ): Observable<GenericDataResponse<G>> {
    return this.request('get', url + '/' + id);
  }

  protected getByParams(
    url: string,
    params?: string
  ): Observable<GenericDataResponse<G>> {
    return this.request('get', url + '?' + params);
  }

  protected patch(
    url: string,
    id?: number,
    data?: T
  ): Observable<GenericDataResponse<G>> {
    return id && data
      ? this.request('put', url + '/' + id, data)
      : this.request('put', url);
  }

  protected delete(
    url: string,
    id: number
  ): Observable<GenericDataResponse<G>> {
    return this.request('delete', url + '/' + id);
  }

  private handleError(error: HttpErrorResponse) {
    console.error(error);
    return throwError('Something wrong happened');
  }
}
