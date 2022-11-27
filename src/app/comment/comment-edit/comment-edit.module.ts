import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { CommentEditComponent } from './comment-edit.component';

@NgModule({
    declarations: [CommentEditComponent],
    exports: [CommentEditComponent],
    imports: [CommonModule, MaterialModule, ReactiveFormsModule],
})
export class CommentEditModule {}
