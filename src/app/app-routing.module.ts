import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpisodeRoutingModule } from './episode/episode-routing.module';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [{ path: '', component: HomePageComponent, title: 'Welcome to Analog Jones' }];

@NgModule({
    exports: [RouterModule],
    imports: [EpisodeRoutingModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
