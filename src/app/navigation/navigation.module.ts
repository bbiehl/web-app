import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material/material.module';
import { NavigationComponent } from './navigation.component';

@NgModule({
    declarations: [NavigationComponent],
    exports: [NavigationComponent],
    imports: [CommonModule, FlexLayoutModule, MaterialModule, RouterModule],
})
export class NavigationModule {}
