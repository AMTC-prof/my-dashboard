import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title/title.component';

@Component({
  selector: 'app-change-detection',
  standalone: true,
  //* Por defecto el ChangeDetectionStrategy esta como Default, o lo que es lo mismo, la deteccion de cambios de Angular es automatica, cualquier cambio que hagamos Angular tratara de detectarlo
  //* y actualizar la vista u otros cambios. Si la ponemos como OnPush Angular estara pendiente de menos ciclos de vida o cambios en nuestra app.
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    TitleComponent,
  ],
  template: `
  
  <app-title [title]="currentFramework()"></app-title>
  
  <pre> {{frameworkAsSignal() | json}}</pre>
  
  <pre> {{frameworkAsProperty | json}}</pre>
  
  `,
  styles: ``,
  
})
export default class ChangeDetectionComponent { 

  public frameworkAsSignal = signal({
    name: 'Angular',
    releaseDate: 2016
  });

  public frameworkAsProperty = {
    name: 'Angular',
    releaseDate: 2016
  }

  public currentFramework = computed(
    () => `Change Detection: ${this.frameworkAsSignal().name }`
  );

  constructor(){
    setTimeout( () => {

      //* Con ChangeDetectionStrategy.OnPush si actualizamos el valor de frameworkAsProperty con el componente ya renderizado no se verán los cambios
      this.frameworkAsProperty.name = 'React';

      //* Sin embargo cuando trabajamos con señales (signals) si que veremos estos cambios reflejados en la vista del componente una vez renderizado
      this.frameworkAsSignal.update(value => ({...value, name: 'React'}));

      //* El uso de ChangeDetectionStrategy.OnPush y Signals mejora el rendimiento de nuestra app

      console.log('Hecho')
    }, 3000);
  }
}
