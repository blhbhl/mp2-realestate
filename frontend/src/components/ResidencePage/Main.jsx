import React from 'react'
import Header from '../Header/Header'
import Page from './Page'
import Footer from '../Footer/Footer'
import contents from './contents'
import './Page.css'

const Main = () => {
    return (
        <div>
            <Header />
            <div className='App'>
                {contents.map(contents => (
                    <Page
                        key={contents.id}
                        image={contents.image}
                        name={contents.name}
                        description={contents.description}
                        price={contents.price}
                        address={contents.address}
                        room={contents.room}
                        bath={contents.bath}
                        interior={contents.interior}
                        exterior={contents.exterior}
                    />
                ))};
            </div>
            <hr className='middle' />
            <div className='container'>
                <div className="detailContainer">
                    <div className='detalye'>
                        <h2 className='detalye1'>For More Details</h2>
                        <h3 className='detalye2'>Contact an agent</h3>
                        <button className='agent'>Talk to an Agent</button>
                    </div>
                    <div className='serbisyo'>
                        <h2 className='serbisyo1'>Other Services</h2>
                        <div>
                            <div className='serbisyo3'>
                                <h3 className='serbisyo2'>Want to Buy?</h3>
                                <h3 className='serbisyo2'>Want to Rent?</h3>
                                <h3 className='serbisyo2'>Want to Sell?</h3>
                            </div>
                            <div className='serbisyo4'>
                                <a href="buy-a-home">
                                    <button className='serviceBtn'>Buy Here</button>
                                </a>
                                <a href="">
                                    <button className='serviceBtn'>Rent Here</button>
                                </a>
                                <a href="sell-a-home">
                                    <button className='serviceBtn'>Sell Here</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Main