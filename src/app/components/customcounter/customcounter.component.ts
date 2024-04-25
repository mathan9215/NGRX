import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { customInput } from 'src/app/shared/store/counter/counter.actions';

@Component({
  selector: 'app-customcounter',
  templateUrl: './customcounter.component.html',
  styleUrls: ['./customcounter.component.scss'],
})
export class CustomcounterComponent {

actionType='add';

customInputNumber!: number;

  constructor(private store: Store<{ counter: { counter: number } }>) {}


  customCount() {
    this.store.dispatch(customInput({ value: +this.customInputNumber ,typeOfAction:this.actionType}));
    this.customInputNumber=0;
  }

}
