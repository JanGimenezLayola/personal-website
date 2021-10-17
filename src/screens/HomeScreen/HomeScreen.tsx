import React from 'react'
import NavBarComponent from '../../components/NavBarComponent/NavBarComponent'

const HomeScreen = ({ children }: any) => {
    return (
        <div>
            <NavBarComponent />
            {children}
        </div>
    )
}

export default HomeScreen
