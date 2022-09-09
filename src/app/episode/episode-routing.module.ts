import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Categories } from 'src/app/shared/types/categories.enum';
import { EpisodeListComponent } from './episode-list/episode-list.component';

const routes: Routes = [{ path: Categories.EPISODES, component: EpisodeListComponent, title: 'All Episodes' }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class EpisodeRoutingModule {}
