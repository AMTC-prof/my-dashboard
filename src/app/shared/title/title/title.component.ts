import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<h1 class="text-3xl mb-5">{{title}} - {{withShadow}}</h1>`,
  styleUrl: './title.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TitleComponent { 

  @Input({required:true}) title!: string ; 
  //*transform: booleanAttribute es una nueva propiedad del input que permite interpretar el valor pasado por el input como un boolean 
  @Input({ transform: booleanAttribute}) withShadow: boolean = false;

}
