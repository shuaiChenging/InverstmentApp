import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular/module';
import { IonicModule } from 'ionic-angular';
import { HomeDetail } from './home-detail';
import { ArticleContentModule } from '../../../components/article-content/article-content.module';
@NgModule({
    declarations: [HomeDetail],
    imports: [IonicPageModule.forChild(HomeDetail), ArticleContentModule]
})

export class HomeDetailModule { }