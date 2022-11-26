import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { CommentListComponent } from './comment-list.component';

@NgModule({
    declarations: [CommentListComponent],
    exports: [CommentListComponent],
    imports: [CommonModule, MaterialModule],
})
export class CommentListModule {}
