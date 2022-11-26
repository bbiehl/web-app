import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { CommentListModule } from 'src/app/comment/comment-list/comment-list.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { EpisodeDetailComponent } from './episode-detail.component';

@NgModule({
    declarations: [EpisodeDetailComponent],
    exports: [EpisodeDetailComponent],
    imports: [CommonModule, CommentListModule, FlexLayoutModule, MaterialModule, RouterModule],
})
export class EpisodeDetailModule {}
