import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { customInput } from 'src/app/shared/store/counter/counter.actions';
import { countermodel } from 'src/app/shared/store/counter/counter.model';
import { titleSelector } from 'src/app/shared/store/counter/counter.selector';

@Component({
  selector: 'app-customcounter',
  templateUrl: './customcounter.component.html',
  styleUrls: ['./customcounter.component.scss'],
})
export class CustomcounterComponent implements OnInit {

actionType='add';

customInputNumber!: number;
title!: string;

  constructor(private store: Store<{ counter: countermodel }>) {}

  ngOnInit(): void {
    this.store.select(titleSelector).subscribe((data)=>{
      this.title=data;
      console.log('customcounter')
    })
  }

  customCount() {
    this.store.dispatch(customInput({ value: +this.customInputNumber ,typeOfAction:this.actionType}));
    this.customInputNumber=0;
  }

}
