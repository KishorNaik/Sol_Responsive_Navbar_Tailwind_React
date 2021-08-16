import React, { useReducer } from "react";

export enum ActionType{
    Increment=0,
    Decrement=1
};

export interface IState{
    Counter:number
};

export interface IAction{
    Type:ActionType
}

export interface IUseReducerIncrementProps{
    children:(reducerData:[IState, React.Dispatch<IAction>])=>JSX.Element
}

export const Reducer=(state:IState,action:IAction):IState=>{
    switch(action.Type){
        case ActionType.Increment:
            return{
                // ...state,
                Counter:state.Counter + 1
            }
            break;
        case ActionType.Decrement:
            return {
                // ...state,
                Counter:state.Counter - 1
            }
            break;
    }
}

export const UseReducerCounterDemo:React.FunctionComponent<IUseReducerIncrementProps>=(props):JSX.Element=>{
    const [state,dispatch]=useReducer<(state: IState, action: IAction)=>IState,IState>(Reducer,{Counter:0},undefined!);

    return props.children([state,dispatch]);
    
}