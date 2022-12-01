import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { CommentReplyComponent } from './comment-reply.component';

@NgModule({
    declarations: [CommentReplyComponent],
    exports: [CommentReplyComponent],
    imports: [CommonModule, MaterialModule, ReactiveFormsModule],
})
export class CommentReplyModule {}
