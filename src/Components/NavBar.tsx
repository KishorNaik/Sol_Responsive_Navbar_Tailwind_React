import React, { Component } from "react";
import { HamburgerButton } from "./SubComponents/HamburgerButton";
import { NavBarLink } from "./SubComponents/NavBarLink";
import { Logo } from "./SubComponents/Logo";
import { Transition } from "@headlessui/react";
import { HamburgerTransition } from "./SubComponents/HamburgerTransition";

interface INavbarProps{

}

interface INavbarStates{
    IsOpen?:boolean
}

export default class Navbar extends Component<INavbarProps,INavbarStates>{

    constructor(props:INavbarProps){
        super(props);

        this.state={
            IsOpen:false
        };
    }

    private OnHamburgerClickEventHandler=():void=>{
        this.setState({
            IsOpen:(this.state.IsOpen===true) ? false : true
        });
    }

    public render(){
        return (
            <React.Fragment>
                <nav className="bg-white">
                     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 
                        <div className="flex items-center h-16 px-4">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                   <Logo Source="data:image/png;base64,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" Alt="Tailwind"></Logo>
                                </div>
                            </div>
                        
                            <div className="hidden md:block w-full">
                                <div className="ml-10 flex items-baseline justify-end">
                                    <NavBarLink TextColor={"text-gray-800"} Hover_TextColor={"hover:text-white"} Hover_BackgroundColor={"hover:bg-gray-700"}></NavBarLink>
                                </div>
                            </div>
                            <div className="flex md:hidden justify-end w-full">
                                <HamburgerButton IsOpen={this?.state?.IsOpen} OnHamburgerClickEvent={this.OnHamburgerClickEventHandler}></HamburgerButton>
                            </div>
                            
                        </div>
                     </div>
                     <HamburgerTransition IsOpen={this?.state?.IsOpen}>
                        <NavBarLink TextColor={"text-gray-800"} Hover_TextColor={"hover:text-white"} Hover_BackgroundColor={"hover:bg-gray-700"}></NavBarLink>
                     </HamburgerTransition>
                </nav>
            </React.Fragment>
        )
    }



}