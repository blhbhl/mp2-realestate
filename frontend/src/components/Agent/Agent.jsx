import React from 'react'
import './Agent.css'
import Header from "../Header/Header";

const Agent = () => {
    return (
        <div>
            <Header />
            <div className='form'>
                <h3 className='talk'>Talk to Agent</h3>
                <form action="">
                    <label htmlFor="name">Last Name</label>
                    <input type="text" />
                    <label htmlFor="email">Email Address</label>
                    <input type="text" />
                    <label htmlFor="number">Phone Number</label>
                    <input type="text" name="" id="" />
                    <label htmlFor="message">Message</label>
                    <textarea>Text here...</textarea>
                    <button className='talkBtn'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Agent