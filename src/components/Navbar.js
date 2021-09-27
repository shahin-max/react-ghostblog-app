import {Link} from 'react-router-dom';
import React, { useState } from "react";


function Navbar(props)
{
    return (
        <div className='navbar'>
            <div className='page-name'>React-GhostBlog-App</div>
            <div className='links'>
                <div className='nav-links'><Link to='/' className ={(props.page==='dashboard')?'nav-links-styling-active':'nav-links-styling'}>Dashboard</Link></div>
                <div className='nav-links'><Link to='/posts' className ={(props.page==='posts')?'nav-links-styling-active':'nav-links-styling'}>PostsPage</Link></div>
                <div className='nav-links'><Link to='/pages' className ={(props.page==='pages')?'nav-links-styling-active':'nav-links-styling'}>PageLinks</Link></div>
            </div>
        </div>
    );
}

export default Navbar;
