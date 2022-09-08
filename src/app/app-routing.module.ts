import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpisodeRoutingModule } from './episode/episode-routing.module';

const routes: Routes = [];

@NgModule({
    imports: [EpisodeRoutingModule, RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
