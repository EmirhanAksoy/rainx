import { NgModule } from '@angular/core';
import { FindPipe } from './pipes/find.pipe';
import { MapPipe } from './pipes/map.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { SelectPipe } from './pipes/select.pipe';
import { ConcatPipe } from './pipes/concat.pipe';
import { ReducePipe } from './pipes/reduce.pipe';

@NgModule({
  declarations: [
    FindPipe,
    MapPipe,
    FilterPipe,
    SelectPipe,
    ConcatPipe,
    ReducePipe
  ],
  imports: [
  ],
  exports: [
    FindPipe,
    MapPipe,
    FilterPipe,
    SelectPipe,
    ConcatPipe,
    ReducePipe
  ]
})
export class RainxPipesModule { }
