import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { routes } from '../../../app.routes';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: 'sidemenu.component.html',
  styleUrl: './sidemenu.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidemenuComponent { 

  /**
   * *Configuracion de los elementos del menu a partir de las rutas existente
   * *Descartamos la ruta por defecto del dashboard y la ruta del user/:id
   */
  public menuItems = routes.map(route => route.children ?? []).flat().
    filter(route => route && route.path).
    filter(route => !route.path?.includes(':'));
  

  constructor() {
    
    
    
   }


}
