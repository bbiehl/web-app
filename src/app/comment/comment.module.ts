import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommentAddModule } from './comment-add/comment-add.module';
import { CommentListModule } from './comment-list/comment-list.module';

@NgModule({
    declarations: [],
    imports: [CommonModule, CommentAddModule, CommentListModule],
})
export class CommentModule {}
