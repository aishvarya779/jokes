import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'jokes';
  url: string;
  newJoke: string;
  constructor(private _dataService: DataService) {}

  public ngOnInit() {
    this.getRandomJokes();
  }

  getRandomJokes() {
    this.newJoke = null;
    this._dataService.getRandomJokes().subscribe(
      (res: any) => {
        // console.log(res);
        this.url = res.icon_url;
        this.newJoke = res.value;
      },
      err => {
        // console.log(err);
      }
    );
  }
}
