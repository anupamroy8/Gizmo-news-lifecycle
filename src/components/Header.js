import React from "react";

function Header(){
    return(
    <>
        <nav className="flex header">
            <h1>Gizmo NEWS</h1>
            <ul>
                <input type="text" placeholder="search"/><i class="fa fa-search" aria-hidden="true"></i>
                <button className="lang">EN</button>
            </ul>
        </nav>
    </>
    )

}

export default Header