import React, { useState } from 'react'
import { LuBath, LuBedDouble } from 'react-icons/lu'
import { BsBookmarkHeart, BsBookmarkHeartFill } from 'react-icons/bs'

const BuyerPage = (props) => {
    const [isActive, setIsActive] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    function Modal({ setOpenModal }) {
        return (
            <div className="modalBackground">
                <div className="modalContainer">
                    <div>
                        <section class="text-gray-600 body-font">
                            <h3 className='text-[#1F3E72] text-4xl decoration-2 mr-[545px] mt-[65px]'>{props.name}</h3>
                            <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                                <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                                    </h1>
                                    <div className='ml-6'>
                                        <div class=" text-gray-600">
                                            <div className='mt-[-110px]'>
                                                <h2 className='text-lg'>Description</h2>
                                                <hr className='bg-gray-800' />
                                                <p>{props.description}</p>
                                            </div>
                                            <div>
                                                <h2 className='text-lg'>Location</h2>
                                                <hr className='bg-gray-800' />
                                                <p className='flex mt-3 mb-[-10px]'>{props.location} </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='text-gray-600 ml-6'>
                                        <br />
                                        <hr className='w-[350px] bg-gray-800' />
                                        <div className='flex'>
                                            <h1 className='mt-1 mb-1'>Beds</h1>
                                            <p className='mt-[5px] ml-[260px]'>{props.bed}</p>
                                        </div>
                                        <hr className='w-[350px] bg-gray-800' />
                                        <div className='flex'>
                                            <h1 className='flex mt-1 mb-1'>Bathrooms</h1>
                                            <p className='flex mt-[5px] ml-[180px]'>{props.bath}</p>
                                        </div>
                                        <hr className='w-[350px] bg-gray-800' />
                                        <div className='flex'>
                                            <h1 className='mt-1 mb-1'>Sqms</h1>
                                            <p className='mt-[5px] ml-[270px]'>{props.sqms}</p>
                                        </div>
                                        <hr className='w-[350px] bg-gray-800' />
                                    </div>
                                    <div className="flex justify-center ml-6 text-3xl mt-2">
                                        <h2><span className='text-[#FFA500]'>₱</span>{props.price}</h2>
                                        <button className="inline-flex text-white justify-center text-center ml-[420px] mt-[-50px] mb-[40px] w-[200px] bg-[#FFA500] border-0 py-2 px-6 focus:outline-none hover:bg-[#1F3E72] rounded text-lg">Talk to Agent!</button>
                                    </div>
                                </div>
                                <div className="lg:max-w-lg lg:w-full md:w-1/2 mt-[-200px] w-[300px]">
                                    <img className="object-cover object-center rounded w-[970px] h-[300px] mt-[5px] ml-[-20px]" alt="hero" src={props.image} />
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
                            className='bg-red-700 text-white p-2 ml-[-70px] mt-2 rounded-md'
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className=''>

            <div className='box-content scroll-smooth w-full'>
                <div className='box-content'>
                    <div className='container'>
                        <section className="productList bg-white h-screen text-gray-400 body-font">
                            <div className="container px-3 py-24 h-[100px]">
                                <div className="">
                                    <img className='h-[200px] w-[700px] rounded-t-2xl' src={props.image} />
                                    <div key={props.id} className="p-3 shadow-xl rounded-xl w-[350px]">
                                        <div className="bg-white bg-opacity-40 p-4 rounded-lg">
                                            <div className='flex mb-[-270px] p-[-10px]'>
                                                <h3 className="tracking-widest text-gray-600  text-2xl title-font font-semibold mt-[10px]"><span className='text-[#FFA500]'>₱</span>{props.price}</h3>
                                                <div className="flex cursor-pointer select-none text-[#FFA500] text-[45px] ml-[115px] mr-[-20px] mt-[-15px]">
                                                    {isActive ? <BsBookmarkHeartFill onClick={() => {
                                                        setIsActive(!isActive)
                                                    }} /> :
                                                        <BsBookmarkHeart onClick={() => {
                                                            setIsActive(!isActive)
                                                        }} />
                                                    }
                                                </div>
                                            </div>
                                            <h3 className="text-3xl text-[#1F3E72] title-font mb-[-30px] mt-[205px] font-bold">{props.name}</h3>
                                            <p className="leading-relaxed text-gray-600 mb-[20px] mt-[60px]">{props.address}</p>
                                            <hr className='mb-4' />
                                            <div className='flex justify-center text-[#FFA500]'>
                                                <div className='flex pl-1 pr-1'><h2 className='flex text-[15px] text-gray-600 ml-3 mr-3 mt-1'>{props.bed}</h2><LuBedDouble className='text-3xl' /></div>
                                                <div className='flex pl-1 pr-1'><h2 className='flex text-[15px] text-gray-600 ml-3 mr-3 mt-1'>{props.bath}</h2><LuBath className='text-3xl' /></div>
                                            </div>
                                            <div className='text-center ml-[590px] mt-[25px]'>
                                                <div className="App">
                                                    <button
                                                        className="openModalBtn bg-[#FFA500] w-[200px] p-3 rounded-lg text-white"
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
                        </section>
                        <br />
                    </div>
                </div >
            </div >
        </div>
    )
}

export default BuyerPage