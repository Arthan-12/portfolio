import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericContainerComponent } from './generic-container/generic-container.component';

@NgModule({
  declarations: [GenericContainerComponent],
  imports: [CommonModule],
  exports: [GenericContainerComponent],
})
export class SharedModule {}
