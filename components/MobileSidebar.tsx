// @ts-nocheck

import { SidebarComponent } from '@syncfusion/ej2-react-navigations'
import React, { useRef } from 'react'
import { Link } from 'react-router'
import NavItems from './NavItems'

const MobileSidebar = () => {
    const sidebarRef = useRef<SidebarComponent | null>(null);

    const toggleSidebar = () => {
        sidebarRef.current?.toggle();  // safe call
    };

    return (
        <div className='mobile-sidebar wrapper'>
            <header>
                <Link to='/'>
                    <img src="/assets/icons/logo.svg" alt="Logo" className='size-[30px]'/>
                    <h1>Nomadista</h1>
                </Link>

                <button onClick={toggleSidebar}>
                    <img src="/assets/icons/menu.svg" alt="menu" className='size-7'/>
                </button>
            </header>

            <SidebarComponent
                width={270}
                ref={sidebarRef}
                created={() => sidebarRef.current?.hide()}
                closeOnDocumentClick={true}
                showBackdrop={true}
                type="over"
            >
                <NavItems handleClick={toggleSidebar} />
            </SidebarComponent>
        </div>
    )
}

export default MobileSidebar