import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReplaceSpacePipe } from './pipe/replace-space.pipe';
import { ImgBrokenDirective } from './directives/img-broken.directive';

@NgModule({
  declarations: [ReplaceSpacePipe, ImgBrokenDirective],
  imports: [CommonModule],
  exports: [ReplaceSpacePipe],
  providers: [ReplaceSpacePipe],
})
export class SharedModule {}
