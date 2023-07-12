import React from 'react'
import './Page.css'

const Page = (props) => {
    return (
        <div>
            <div key={props.id} className='flex'>
                <img src={props.image} className='r1' alt="" />
                <div>
                    <div className='hardin'>
                        <h1 className='nameHardin'>{props.name}</h1>
                        <h2 className='priceHardin'><span className='pesos'>₱</span>{props.price}</h2>
                        <h2 className='addressHardin'>{props.address}</h2>
                        <p className='addressHardin'>{props.description}</p>
                    </div>
                    <div>
                        <h1 className='detailsH'>Details</h1>
                        <div className='details'>
                            <h2 className='detailsh'>Rooms</h2>
                            <p className='detailsr'>{props.room}</p>
                            <hr />
                            <h2 className='detailsh'>Bathrooms</h2>
                            <p className='detailsb'>{props.bath}</p>
                            <hr />
                            <h2 className='detailsh'>Interior Amenities</h2>
                            <p className='detailsp'>{props.interior}</p>
                            <hr />
                            <h2 className='detailsh'>Exterior Amenities</h2>
                            <p className='detailsp'>{props.exterior}</p>
                        </div>
                    </div>
                </div>
                <div>
                </div>
            </div>
        </div>
    )
}

export default Page