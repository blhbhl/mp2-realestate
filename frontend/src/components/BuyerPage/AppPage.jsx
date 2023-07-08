import React from 'react'
import BuyerPage from './BuyerPage'
import contents from './contents'
import Header from '../Header/Header'
import { BiSolidRightArrow, BiSolidLeftArrow } from 'react-icons/bi'

const AppPage = () => {
    return (
        <div>
            <Header />
            <div className='overflow-x-hidden'>
                <div>
                    <div>
                    </div>
                    <div className='flex justify-center text-center'>
                        <div class="relative mb-3" data-te-input-wrapper-init>
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
                    <div className='flex text-center justify-center ml-[8px] mt-[140px] mb-20'>
                        <nav aria-label="Page navigation example">
                            <ul class="flex items-center -space-x-px h-10 text-base text-gray-600">
                                <li>
                                    <a href="#" class="flex items-center justify-center bg-none">
                                        <span class="sr-only">Previous</span>
                                        <BiSolidLeftArrow className='text-[#1F3E72] text-xl' />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="flex items-center justify-center rounded-3xl px-4 mx-3 h-10 shadow-sm shadow-gray-400 hover:bg-gray-400 hover:text-white bg-white">1</a>
                                </li>
                                <li>
                                    <a href="#" class="flex items-center justify-center rounded-3xl px-4 mx-3 h-10 shadow-sm shadow-gray-400 leading-tight hover:bg-gray-400 hover:text-white bg-white">2</a>
                                </li>
                                <li>
                                    <a href="#" aria-current="page" class="z-10 flex items-center justify-center rounded-3xl px-4 h-10 mx-3 shadow-sm shadow-gray-400 leading-tight hover:bg-[#1F3E72] hover:text-white bg-[#FFA500]">3</a>
                                </li>
                                <li>
                                    <a href="#" class="flex items-center justify-center rounded-3xl px-4 mx-3 h-10 shadow-sm shadow-gray-400 leading-tight hover:bg-gray-400 hover:text-white bg-white">4</a>
                                </li>
                                <li>
                                    <a href="#" class="flex items-center justify-center rounded-3xl px-4 mx-3 h-10 shadow-sm shadow-gray-400 leading-tight hover:bg-gray-400 hover:text-white bg-white">5</a>
                                </li>
                                <li>
                                    <a href="#" class="flex items-center justify-center bg-none">
                                        <span class="sr-only">Next</span>
                                        <BiSolidRightArrow className='text-[#1F3E72] text-xl' />
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default AppPage