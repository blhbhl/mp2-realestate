import React from 'react'
import BuyerPage from './BuyerPage'
import contents from './contents'
import { BiSolidRightArrow, BiSolidLeftArrow } from 'react-icons/bi'
import './AppPage.css'

const AppPage = () => {
    return (
        <>
            <div className='page'>
                <div>
                    <div>
                    </div>
                    <div className='search'>
                        <div class="position" data-te-input-wrapper-init>
                            <input
                                type="search"
                                class="peer border-slate-950 block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-black dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                id="search"
                                placeholder="Type query" />
                            <label
                                for="labelSearch"
                                class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-black transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-black dark:peer-focus:text-primary"
                            >
                                Location
                            </label>
                        </div>
                    </div>
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
                </div>
                <div>
                    <div className='pagination'>
                        <nav aria-label="Page navigation example">
                            <ul class="ulclass">
                                <li>
                                    <a href="#" class="previous">
                                        <span class="sr-only">Previous</span>
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
                                        <span class="sr-only">Next</span>
                                        <BiSolidRightArrow className='right' />
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div >
        </>
    )
}

export default AppPage