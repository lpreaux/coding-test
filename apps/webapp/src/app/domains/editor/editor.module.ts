import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorRoutingModule } from './editor-routing.module';
import { EditorPage } from './editor.page';
import { CoreModule } from '../../core/core.module';

@NgModule({
  declarations: [EditorPage],
  imports: [CommonModule, EditorRoutingModule, CoreModule],
})
export class EditorModule {}
