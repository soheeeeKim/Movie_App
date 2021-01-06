import React from "react";
import {Link} from "react-router-dom";
import "./Navigation.css";

//a태그는 강제로 페이지를 새로고침 하기 때문에 Link를 사용
//Link는 router안에서만 써야한다
function Navigation(){
    ///about 페이지로 object를 보낸다
    return (
        <div className = "nav">
            <Link to = "/">Home</Link>
            <Link to = {{
                pathname: "/about",
                state: {
                    fromNavigation:true
                }
            }}>About</Link>
        </div>
    );
}
export default Navigation;