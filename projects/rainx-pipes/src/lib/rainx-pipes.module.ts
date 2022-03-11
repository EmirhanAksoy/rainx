import { NgModule } from '@angular/core';
import { RainxPipesComponent } from './rainx-pipes.component';
import { FindPipe } from './pipes/find.pipe';
import { MapPipe } from './pipes/map.pipe';
import { FilterPipe } from './pipes/filter.pipe';



@NgModule({
  declarations: [
    RainxPipesComponent,
    FindPipe,
    MapPipe,
    FilterPipe
  ],
  imports: [
  ],
  exports: [
    RainxPipesComponent
  ]
})
export class RainxPipesModule { }
