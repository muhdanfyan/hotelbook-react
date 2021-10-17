import React from 'react'
import Button from 'elements/Button'
import BrandIcon from './IconText'

export default function Header(props) {
    
    return (
        <header className="spacing-sm">
            <div className="container">
                <div className="navbar navbar-expand-lg navbar-light">
                    <BrandIcon />
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto">
                            <li className={`nav-item${getNavLinkClass("/")}`}></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}
