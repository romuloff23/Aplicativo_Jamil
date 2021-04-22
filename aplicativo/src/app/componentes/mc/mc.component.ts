import { Component, Input, EventEmitter, Output } from '@angular/core';

import { Mcmodel } from 'src/app/class/model/interfacesdb/intercm.model';

@Component({
  selector: 'app-mc-com',
  templateUrl: './mc.component.html',
  styleUrls: ['./mc.component.scss'],
})
export class McComponent {

  @Input() produtos: Mcmodel; 
  ngOnInit() {
 //   console.log(this.produtos)
   }
}
