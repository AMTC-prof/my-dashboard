import { Injectable, signal } from '@angular/core';
import { UserResponse, User } from '@interfaces/req-response';

interface State{
  users: User[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // El # es como hace nuestra propiedad private. La diferencia es que al hacer la transpilacion de typescript a javascript si esta como private en javascript podemos tener acceso igualmente a esa propiedad, sin embargo con el numeral (#) esto lo hace el ECMAScript y no ocurre esta error
  #state =signal<State>({
    loading: true,
    users:[]
  })

  constructor() { 
    console.log('Cargando Data ...')
  }

}
