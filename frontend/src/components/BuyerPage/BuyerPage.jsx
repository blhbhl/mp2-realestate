import React, { useState } from 'react'
import { LuBath, LuBedDouble } from 'react-icons/lu'
import { BsBookmarkHeart, BsBookmarkHeartFill } from 'react-icons/bs'
import './BuyerPage.css'

const BuyerPage = (props) => {
    const [isActive, setIsActive] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    const Modal = ({ setOpenModal }) => {
        return (
            <>
                <div className="overlay">
                    <div className="modalContainer">
                        <div>
                            <section className="modal">
                                <div className='text'>
                                    <h3 className='name'>{props.name}</h3>
                                </div>
                                <div className="container">
                                    <div className="white">
                                        <h1 className="title">
                                        </h1>
                                        <div className='describe'>
                                            <div className="color">
                                                <div className='describe1'>
                                                    <h2 className='title-name'>Description</h2>
                                                    <hr className='line' />
                                                    <p>{props.description}</p>
                                                </div>
                                                <div>
                                                    <h2 className='title-location'>Location</h2>
                                                    <hr className='line1' />
                                                    <p className='location'>{props.location} </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='bottom'>
                                            <br />
                                            <hr className='hrline' />
                                            <div className='bottom1'>
                                                <h1 className='same4'>Beds</h1>
                                                <p className='bottom2'>{props.bed}</p>
                                            </div>
                                            <hr className='hrline' />
                                            <div className='bottom1'>
                                                <h1 className='same5'>Bathrooms</h1>
                                                <p className='bottom2'>{props.bath}</p>
                                            </div>
                                            <hr className='hrline' />
                                            <div className='bottom1'>
                                                <h1 className='same6'>Sqms</h1>
                                                <p className='bottom2'>{props.sqms}</p>                                            </div>
                                            <hr className='hrline2' />
                                        </div>
                                        <div className="top">
                                            <h2><span className='pesos1'>₱</span>{props.price}</h2>
                                            <button className="btn">Talk to Agent!</button>
                                        </div>
                                    </div>
                                    <div className="main">
                                        <img className="img" alt="hero" src={props.image} />
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div className="footer">
                            <button
                                onClick={() => {
                                    setOpenModal(false);
                                }}
                                id="cancelBtn"
                                className='cancel'
                            >
                                Close
                            </button>
                        </div>
                    </div >
                </div >
            </>
        )
    }

    return (
        <div className='wrap'>
            <div className='box'>
                <div className='wrapper'>
                    <div className=''>
                        <section className="productList" >
                            <div className="container1">
                                <div className="" >
                                    <div>
                                        <img className='img1' src={props.image} />
                                        <div key={props.id} className="id">
                                            <div className="card">
                                                <div className='icons'>
                                                    <h3 className="icons1"><span className='pesos'>₱</span>{props.price}</h3>
                                                    <div className="icons2">
                                                        {isActive ? <BsBookmarkHeartFill onClick={() => {
                                                            setIsActive(!isActive)
                                                        }} /> :
                                                            <BsBookmarkHeart onClick={() => {
                                                                setIsActive(!isActive)
                                                            }} />
                                                        }
                                                    </div>
                                                </div>
                                                <h3 className="name1">{props.name}</h3>
                                                <p className="address">{props.address}</p>
                                                <hr className='hrline23' />
                                                <div className='div'>
                                                    <div className='bed1'><h2 className='bed2'>{props.bed}</h2><LuBedDouble className='txt' /></div>
                                                    <div className='bed1'><h2 className='bed2'>{props.bath}</h2><LuBath className='txt' /></div>
                                                </div>
                                                <div>
                                                    <div className='buttonModal'>
                                                        <div>
                                                            <button
                                                                className='btnModal'
                                                                onClick={() => {
                                                                    setModalOpen(true);
                                                                }}
                                                            >
                                                                See More!
                                                            </button>
                                                            {modalOpen && <Modal setOpenModal={setModalOpen} />}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <br />
                    </div>
                </div >
            </div >

        </div>

    )
}

export default BuyerPage