import React, { useState } from "react";
import BuyerPage from "./BuyerPage";
import contents from "./contents";
import { BiSolidRightArrow, BiSolidLeftArrow } from "react-icons/bi";
import "./AppPage.css";
import { useEffect } from "react";

const AppPage = () => {
  const [properties, setProperties] = useState(contents.slice(0, 3));
  const [page, setPage] = useState(0);
  const [listingPerPage, setListingPerPage] = useState(6);
  const numOfPagination = Math.round(contents.length / listingPerPage);
  // console.log(numOfPagination)

  useEffect(() => {
    const num = page * listingPerPage;
    console.log(page, num, num + listingPerPage)
    setProperties(contents.slice(num, num + listingPerPage))
  }, [page]);

  const selectPage = (pageNumber) => {
    setPage(pageNumber)
  }

  return (
    <div className="flex flex-col">
      <div className="mt-8 search">
        <div classname="position" data-te-input-wrapper-init>
          <input
            type="search"
            classname="peer border-slate-950 block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-black dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="search"
            placeholder="Type query"
          />
          <label
            for="labelSearch"
            classname="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-black transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-black dark:peer-focus:text-primary"
          >
            Location
          </label>
        </div>
      </div>
    
      <div className="mx-auto py-12 w-fit grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-6 gap-y-8">
        {properties.map((contents) => (
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
      <div className="w-fit mx-auto mb-8">
        <nav aria-label="Page navigation example">
          <ul className="ulclass">
            <li>
              <button className="previous"  onClick={() => {
                if (page === 0) {
                  setPage(numOfPagination - 1);
                } else {
                  setPage(page - 1);
                }
              }}>
                <span className="sr-only">Previous</span>
                <BiSolidLeftArrow className="left text-[#1F3E72] text-xl" />
              </button>
            </li>
            {Array.from({ length: numOfPagination }, (_, idx) => (
              <li>
                <button 
                    onClick={() => selectPage(idx)}
                    className={"p-2 rounded-full bg-slate border mx-2 h-12 w-12 hover:bg-slate-300 " + ((idx) === page ? "bg-[#ffa500] text-white" : "bg-slate") }>
                  { idx + 1 } 
                </button>
              </li>
            ))}
            <li>
              <button className="next" onClick={() => {
                  if (page === numOfPagination - 1) {
                    setPage(0);
                  } else {
                    setPage(page + 1);
                  }
              }}>
                <span className="sr-only">Next</span>
                <BiSolidRightArrow className="right" />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default AppPage;
