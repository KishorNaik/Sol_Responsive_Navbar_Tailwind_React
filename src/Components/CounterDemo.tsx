import React, { Component } from "react"
import { ActionType, UseReducerCounterDemo } from "./HookInjection/UseReducerCounterDemo"

export default class CounterDemo extends Component{

    public render(){
        return (
            <React.Fragment>
                <UseReducerCounterDemo>
                    {
                        (useReducer)=> useReducer && (
                            <React.Fragment>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12">
                                            <h3>Counter Value : {useReducer[0].Counter}</h3>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4 col-sm-12">
                                            <button className="btn btn-primary" onClick={()=> useReducer[1]({Type:ActionType.Increment})}>+</button>
                                            <button className="btn btn-secondary" onClick={()=> useReducer[1]({Type:ActionType.Decrement})}>-</button>
                                        </div>
                                        
                                    </div>
                                </div>
                            </React.Fragment>
                        )
                    }
                </UseReducerCounterDemo>
            </React.Fragment>
        )
    }
}