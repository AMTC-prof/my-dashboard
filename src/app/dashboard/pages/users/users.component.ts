import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { UsersService } from '@services/users.service';
import { RouterModule } from '@angular/router';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent,
    RouterModule
  ],
  templateUrl: './users.component.html',
  styles: ``,
  
})
export default class UsersComponent {
    
  public userService = inject( UsersService)

 
}
