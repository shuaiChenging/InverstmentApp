import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular/module';
import { IonicModule } from 'ionic-angular';
import { HomeDetail } from './home-detail';
@NgModule({
    declarations: [HomeDetail],
    imports: [IonicPageModule.forChild(HomeDetail)]
})

export class HomeDetailModule { }