import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserRequest, IUserResponse } from '../interfaces/user.interface';
import { GenericDataResponse } from '../interfaces/generic-response.interface';
import { ResourceService } from './resource.service';

@Injectable({
  providedIn: 'root',
})
export class UserService extends ResourceService<IUserResponse[]> {
  private readonly endPoint = '/users';

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  createUsers(data: IUserRequest) {
    return this.post(this.endPoint, data);
  }

  getUsers(query?: string) {
    if (!query) query = '';
    return this.getByParams(this.endPoint, query);
  }

  getUserById(id: number) {
    return this.getById(this.endPoint, id);
  }

  removeUser(id: number) {
    return this.delete(this.endPoint, id);
  }

  limitresults(total: string) {
    return this.getByParams(this.endPoint, total);
  }

  updateUsers(id: number, data: IUserRequest) {
    return this.patch(this.endPoint, id, data);
  }
}
