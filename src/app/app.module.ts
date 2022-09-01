import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationModule } from './navigation/navigation.module';
import { RootStoreModule } from './root-store/root-store.module';

@NgModule({
    declarations: [AppComponent],
    imports: [AppRoutingModule, BrowserModule, BrowserAnimationsModule, NavigationModule, RootStoreModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
