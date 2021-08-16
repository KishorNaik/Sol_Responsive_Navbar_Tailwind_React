import React from "react";
import { Transition } from "@headlessui/react";

interface IHamburgerTransitionProps{
    IsOpen?:boolean,
    children?:React.ReactNode
    //children?:JSX.Element
}

export const HamburgerTransition:React.FunctionComponent<IHamburgerTransitionProps>=(props:IHamburgerTransitionProps):JSX.Element=>{
    return (
        <React.Fragment>
            <Transition
                        show={props.IsOpen}
                        enter="transition ease-out duration-100 transform"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="transition ease-in duration-75 transform"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                        >
                        
                                <div className="md:hidden" id="mobile-menu">
                                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
                                        {props?.children}
                                    </div>
                                </div>
                       
                        </Transition>
        </React.Fragment>
    )
}