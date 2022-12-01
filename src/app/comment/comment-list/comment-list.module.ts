import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReplyListModule } from 'src/app/reply/reply-list/reply-list.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { CommentEditModule } from '../comment-edit/comment-edit.module';
import { CommentReplyModule } from '../comment-reply/comment-reply.module';
import { CommentListComponent } from './comment-list.component';

@NgModule({
    declarations: [CommentListComponent],
    exports: [CommentListComponent],
    imports: [CommonModule, CommentEditModule, CommentReplyModule, MaterialModule, ReplyListModule],
})
export class CommentListModule {}
