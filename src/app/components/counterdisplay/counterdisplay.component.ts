import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { countermodel } from 'src/app/shared/store/counter/counter.model';
import { GlobalState } from 'src/app/shared/store/global/global.state';

@Component({
  selector: 'app-counterdisplay',
  templateUrl: './counterdisplay.component.html',
  styleUrls: ['./counterdisplay.component.scss'],
})
export class CounterdisplayComponent implements OnInit {
  constructor(private store: Store<GlobalState>) {}
  counterNumber!: number;
  title!:string;

  ngOnInit(): void {
    this.store.select('counter').subscribe((data) => {
      this.counterNumber = data.counter;
      console.log('display')
    });
  }
}
