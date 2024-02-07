import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { UsersResponse, User } from '@interfaces/req-response';
import { delay } from 'rxjs';

interface State{
  users: User[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private http = inject( HttpClient)

  // El # es como hace nuestra propiedad private. La diferencia es que al hacer la transpilacion de typescript a javascript si esta como private en javascript podemos tener acceso igualmente a esa propiedad, sin embargo con el numeral (#) esto lo hace el ECMAScript y no ocurre esta error
  #state = signal<State>({
    loading: true,
    users:[]
  })

  public users = computed(() => this.#state().users)
  public loading = computed(() => this.#state().loading)

  constructor() { 
    this.http.get<UsersResponse>('https://reqres.in/api/users').pipe(delay(1500)).subscribe((response: UsersResponse) => {
      this.#state.set({
        users: response.data,
        loading: false
      })
    })
  }

}
