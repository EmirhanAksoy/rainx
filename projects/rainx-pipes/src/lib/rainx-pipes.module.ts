import { NgModule } from '@angular/core';
import { RainxPipesComponent } from './rainx-pipes.component';
import { FindPipe } from './pipes/find.pipe';
import { MapPipe } from './pipes/map.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { SelectPipe } from './pipes/select.pipe';
import { ConcatPipe } from './pipes/concat.pipe';



@NgModule({
  declarations: [
    RainxPipesComponent,
    FindPipe,
    MapPipe,
    FilterPipe,
    SelectPipe,
    ConcatPipe
  ],
  imports: [
  ],
  exports: [
    RainxPipesComponent
  ]
})
export class RainxPipesModule { }
