import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentAddComponent } from './comment-add/comment-add.component';
import { CommentListComponent } from './comment-list/comment-list.component';



@NgModule({
  declarations: [
    CommentAddComponent,
    CommentListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CommentModule { }
