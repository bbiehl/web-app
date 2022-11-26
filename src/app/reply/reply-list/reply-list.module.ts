import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ReplyListComponent } from './reply-list.component';

@NgModule({
    declarations: [ReplyListComponent],
    exports: [ReplyListComponent],
    imports: [CommonModule, MaterialModule],
})
export class ReplyListModule {}
