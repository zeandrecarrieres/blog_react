import React, { useState } from 'react'
import Post from './Post'
import SideMenu from './SideMenu'
import data from "../data"




const Home = ()=> {

    const [messages, setMessages] = useState (data)
    return (
        <div>
            <div className="main">
                <SideMenu />
                <div className="home-main">
                   <Post messages={messages} />
                </div>

            </div>

        </div>
    )
}

export default Home
