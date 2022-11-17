import React from "react";
import style from "../components/comp.module.css"

export default function NavBar() {
    return (
        <div className={style.nav}>
            <div className={style.navLeft}>

                <span></span>

            </div>

            <nav className={style.navRight}>
                <ul className={style.List}>
                    <li className={style.navListItems}>

                        <a href="https://github.com/crpana/tuiter-down">Github</a>


                    </li>

                </ul>
            </nav>

        </div>
    );
}