import React from 'react'
import './Agent.css'
import Header from "../Header/Header";

const Agent = () => {
    return (
        <div className='formTalk'>
            <Header />
            <div className='formAgent'>
                <h3 className='talktoagent'>Talk to Agent</h3>
                <form action="">
                    <label htmlFor="name" className='agentLabel'>Last Name</label>
                    <input className='talkto' type="text" />
                    <label htmlFor="email" className='agentLabel'>Email Address</label>
                    <input className='talkto' type="text" />
                    <label htmlFor="number" className='agentLabel'>Phone Number</label>
                    <input className='talkto' type="text" name="" id="" />
                    <label htmlFor="message" className='agentLabel'>Message</label>
                    <textarea className='textHere'>Text here...</textarea>
                    <button className='talkBtn'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Agent