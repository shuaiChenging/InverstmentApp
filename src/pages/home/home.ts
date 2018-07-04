import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
export class HomeItems {
  constructor(public content: string,
   public name: string,
   public time: string) {
  }
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private items: HomeItems[];

  constructor(public navCtrl: NavController) {

  }

  ngOnInit() {
    this.loadData();
  }

  private loadData(): void {
    this.items = [new HomeItems('证监会为啥要力推独角兽?','韭菜','2018-06-19'),
    new HomeItems('中国房价上涨的原因终于找到了','韭菜','2018-06-19'),
    new HomeItems('城市发展靠什么?','韭菜','2018-06-19')];
    console.log(this.items);
  }

  private pushToDetail(i): void {
    console.log(i);
  }

}
