import { CommonModule } from '@angular/common';
import {  Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TitleComponent } from '@shared/title/title.component';
import { toSignal} from '@angular/core/rxjs-interop'  //toSignal funcion para convertir un observable a un signal
import { switchMap } from 'rxjs';
import { UsersService } from '@services/users.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent,
  ],
  templateUrl: './user.component.html',
  styles: ``,
 
})
export default class UserComponent { 
  // *Tomaremos el nombre del usuario desde el parametro que esta incluida en la ruta
  private route = inject (ActivatedRoute)
  private usersService = inject (UsersService)
  /* public user = signal<User | undefined>(undefined) */

  public user = toSignal(
    this.route.params.pipe(
      switchMap(
        ({id}) => this.usersService.getUserById(id)
      )
    )
  )

  public titleLabel = computed(() => {
    if(this.user()){
     return `Información del usuario: ${this.user()?.first_name}${this.user()?.last_name}`
    }

    return 'Información del usuario'
  })

 /*  constructor() {
    this.route.params.subscribe(params => {
      console.log({params})
    })
  } */
}
