import { Component } from '@angular/core';
import { Store, props } from '@ngrx/store';
import { decrement, increment, reset, titlechange } from 'src/app/shared/store/counter/counter.actions';
import { countermodel } from 'src/app/shared/store/counter/counter.model';

@Component({
  selector: 'app-counterbutton',
  templateUrl: './counterbutton.component.html',
  styleUrls: ['./counterbutton.component.scss']
})
export class CounterbuttonComponent {

  constructor(private store:Store<{counter:countermodel}>){

  }
 
  initTitle!:string;

  OnIncrement(){
    this.store.dispatch(increment());
  }
  OnDecrement(){
    this.store.dispatch(decrement());
  }
  OnReset(){
    this.store.dispatch(reset());
  }
  OnChangeTitle(){
    this.initTitle=getRandomString();
    this.store.dispatch(titlechange({title:this.initTitle}));
  }

}

let fruits: string[] = ['NGRX', 'ANGULAR', 'REDUX'];

function getRandomString(): string {
  const randomIndex = Math.floor(Math.random() * fruits.length);
  return fruits[randomIndex];
}

