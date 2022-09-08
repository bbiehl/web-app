import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Categories } from 'src/app/shared/types/categories.enum';
import { EpisodeComponent } from './episode.component';

const routes: Routes = [{ path: Categories.EPISODES, component: EpisodeComponent, title: 'Episodes' }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class EpisodeRoutingModule {}
