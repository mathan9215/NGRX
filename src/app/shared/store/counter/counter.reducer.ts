import { State, createReducer, on } from '@ngrx/store';
import { customInput, decrement, increment, reset, titlechange } from './counter.actions';
import { initialState } from './counter.state';

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(decrement, (state) => {
    if (state.counter === 0) {
      return state;
    }
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),
  on(reset, (state) => {
    return {
      ...state,
      counter: 0,
    };
  }),
  on(customInput, (state,action) => {
    return {
      ...state,
      counter:action.typeOfAction=='add'?state.counter+action.value:state.counter-action.value
      
    };
  }),
  on(titlechange, (state,action) => {
    return {
      ...state,
      title:action.title
    };
  })
);

export function counterReducer(state: any, action: any) {
  return _counterReducer(state, action);
}

