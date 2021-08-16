import React from "react";

//<NavBarLinkDesktop TextColor={"text-gray-800"} Hover_TextColor={"hover:text-white"} Hover_BackgroundColor={"hover:bg-gray-700"}></NavBarLinkDesktop>

interface INavBarLinkProps{
    TextColor?:string;
    Hover_BackgroundColor?:string
    Hover_TextColor?:string
}

export const NavBarLink:React.FunctionComponent<INavBarLinkProps>=(props:INavBarLinkProps):JSX.Element=>{

    let cssClass=`${props.TextColor} ${props.Hover_TextColor} ${props.Hover_BackgroundColor} px-3 py-2 rounded-md text-sm font-medium`;

    return (
        <React.Fragment>
                <a
                    href="#"
                    className={cssClass}
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className={cssClass}
                  >
                    Service
                  </a>
                  <a
                    href="#"
                    className={cssClass}
                  >
                    About Us
                  </a>
                  <a
                    href="#"
                    className={cssClass}
                  >
                    Contact Us
                  </a>           
                     
        </React.Fragment>
    )
}