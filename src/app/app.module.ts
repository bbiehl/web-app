import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EpisodeModule } from './episode/episode.module';
import { HomePageModule } from './home-page/home-page.module';
import { NavigationModule } from './navigation/navigation.module';
import { RootStoreModule } from './root-store/root-store.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        EpisodeModule,
        HomePageModule,
        NavigationModule,
        RootStoreModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
