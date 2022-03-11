import { NgModule } from '@angular/core';
import { RainxPipesComponent } from './rainx-pipes.component';
import { FindPipe } from './pipes/find.pipe';
import { MapPipe } from './pipes/map.pipe';



@NgModule({
  declarations: [
    RainxPipesComponent,
    FindPipe,
    MapPipe
  ],
  imports: [
  ],
  exports: [
    RainxPipesComponent
  ]
})
export class RainxPipesModule { }
