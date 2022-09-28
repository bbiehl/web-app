import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Categories } from 'src/app/shared/types/categories.enum';
import { EpisodePageContainerComponent } from './container-components/episode-page-container/episode-page-container.component';

const routes: Routes = [
    { path: Categories.EPISODES, component: EpisodePageContainerComponent, title: 'All Episodes' },
    { path: '**', redirectTo: Categories.EPISODES, pathMatch: 'full' },
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)],
})
export class EpisodeRoutingModule {}
