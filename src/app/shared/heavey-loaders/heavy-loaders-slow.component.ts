import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-heavy-loaders-slow',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<section [ngClass]="['w-full h-[600px]', cssClass]"> 
    Heavy Loader Slow
  </section>`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeavyLoadersSlowComponent { 

  @Input({required:true}) cssClass!: string ; 
  //*transform: booleanAttribute es una nueva propiedad del input que permite interpretar el valor pasado por el input como un boolean

  constructor()
  {
    const start = Date.now();
    while (Date.now() - start < 1000) {
      //do nothing
    }
    console.log('Cargado')
  }
}
