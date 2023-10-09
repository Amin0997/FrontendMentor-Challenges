import React from 'react'
import './NavBarBtns.scss'

function NavBarBtns({btnTitle}) {
    return (
            <button className='nav-bar__btn'>
                {btnTitle} 

                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7">
                    <path fill="none" stroke="#FFF" stroke-width="2" opacity=".75" d="M1 1l4 4 4-4"/>
                </svg>
            </button>

    )
}

export default NavBarBtns