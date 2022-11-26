import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { CommentAddComponent } from './comment-add.component';

@NgModule({
    declarations: [CommentAddComponent],
    imports: [CommonModule, MaterialModule],
})
export class CommentAddModule {}
