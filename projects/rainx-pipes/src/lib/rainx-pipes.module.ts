import { NgModule } from '@angular/core';
import { RainxPipesComponent } from './rainx-pipes.component';
import { FindPipe } from './pipes/find.pipe';



@NgModule({
  declarations: [
    RainxPipesComponent,
    FindPipe
  ],
  imports: [
  ],
  exports: [
    RainxPipesComponent
  ]
})
export class RainxPipesModule { }
