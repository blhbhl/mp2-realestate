import React from 'react'
import BuyerPage from './BuyerPage'
import contents from './contents'
import { BiSolidRightArrow, BiSolidLeftArrow } from 'react-icons/bi'
import './AppPage.css'

const AppPage = () => {
    return (
        <div className='page'>
            <div className='page'>
                <div>
                    <div className='App'>
                        {contents.map(contents => (
                            <BuyerPage
                                key={contents.id}
                                image={contents.image}
                                name={contents.name}
                                description={contents.description}
                                price={contents.price}
                                address={contents.address}
                                location={contents.location}
                                bed={contents.bed}
                                bath={contents.bath}
                                sqms={contents.sqms}
                            />
                        ))}
                    </div>
                    <div>
                        <div className='pagination'>
                            <nav aria-label="Page navigation example">
                                <ul class="ulclass">
                                    <li>
                                        <a href="#" class="previous">
                                            <BiSolidLeftArrow className='left text-[#1F3E72] text-xl' />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="nonactive">1</a>
                                    </li>
                                    <li>
                                        <a href="#" class="nonactive">2</a>
                                    </li>
                                    <li>
                                        <a href="#" aria-current="page" class="active">3</a>
                                    </li>
                                    <li>
                                        <a href="#" class="nonactive">4</a>
                                    </li>
                                    <li>
                                        <a href="#" class="nonactive">5</a>
                                    </li>
                                    <li>
                                        <a href="#" class="next">
                                            <BiSolidRightArrow className='right' />
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default AppPage