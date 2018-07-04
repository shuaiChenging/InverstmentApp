import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ArticleContentComponent } from './article-content.component';
@NgModule({
    declarations: [ArticleContentComponent],
    exports: [ArticleContentComponent],
    imports: [IonicModule]
})
export class ArticleContentModule {

}