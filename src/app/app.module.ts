import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppStoreModule } from './app-store.module';
import { AppComponent } from './app.component';
import { EpisodeModule } from './episode/episode.module';
import { HomePageModule } from './home-page/home-page.module';
import { NavigationModule } from './navigation/navigation.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        AppRoutingModule,
        AppStoreModule,
        BrowserModule,
        BrowserAnimationsModule,
        EpisodeModule,
        HomePageModule,
        NavigationModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
