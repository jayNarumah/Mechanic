import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";   
import { environment } from "../../../environments/environment.prod";  
import { UserModel } from "../models/user.model";
@Injectable({
    providedIn: 'root',
})
export class UserEndpoint {
    baseUrl = `${environment.apiUrl}api/users`;

    constructor(private readonly httpClient: HttpClient) {}

    list() {
        return this.httpClient.get<UserModel[] >(`${this.baseUrl}`);
    }

    single(id: number) {
        return this.httpClient.get<{ data: UserModel }>(`${this.baseUrl}/${id}`);
    }

    create(data) {
        return this.httpClient.post<{ data: UserModel }>(`${this.baseUrl}`, data);
    }
         
    delete(id: number) {
        return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
    }

    update(id: number, data) {
        return this.httpClient.put<{ data: UserModel }>(`${this.baseUrl}/${id}`, data);
    }
}