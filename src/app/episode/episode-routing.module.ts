import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Categories } from 'src/app/shared/types/categories.enum';
import { EpisodeListContainerComponent } from './container-components/episode-list-container/episode-list-container.component';

const routes: Routes = [{ path: Categories.EPISODES, component: EpisodeListContainerComponent, title: 'All Episodes' }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class EpisodeRoutingModule {}
