import { createFeatureSelector, createSelector } from "@ngrx/store";
import { countermodel } from "./counter.model";

const getCounterState=createFeatureSelector<countermodel>('counter') 

export const countSelector=createSelector(getCounterState,(state)=>{
    return state.counter
})
export const titleSelector=createSelector(getCounterState,(state)=>{
    return state.title
})