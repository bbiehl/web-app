import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Categories } from 'src/app/shared/types/categories.enum';
import { EpisodeSummaryComponent } from './episode-summary/episode-summary.component';

const routes: Routes = [
    { path: Categories.EPISODES, component: EpisodeSummaryComponent, title: 'All Episodes' },
    { path: `${Categories.EPISODES}/**`, redirectTo: Categories.EPISODES },
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)],
})
export class EpisodeRoutingModule {}
