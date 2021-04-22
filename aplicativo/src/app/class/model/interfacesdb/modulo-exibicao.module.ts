import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { McComponent } from "src/app/componentes/mc/mc.component";

@NgModule({
    declarations: [
        McComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule
    ],
    exports: [
        McComponent
    ]
})

export class ModuloExibicaoModule { }
