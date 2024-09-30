import React from 'react'
import Landing from '../Explore/Landing'
import UserPersonas from './Userpersonas'
import Navbar from '../Navbar'
import Shader from '../Shader'

function Page2() {
    return (
        <div>
            <Navbar />
            <Shader />
            <div style={{ position: 'relative', top: '5.6rem', overflow: 'hidden' }}>
                <Landing />
                <UserPersonas />
            </div>
        </div>
    )
}

export default Page2
