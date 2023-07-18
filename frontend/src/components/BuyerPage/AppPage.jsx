import React, { useState, useEffect } from "react";
import BuyerPage from "./BuyerPage";
// import contents from "./contents";
import { BiSolidRightArrow, BiSolidLeftArrow } from "react-icons/bi";
import { HiLocationMarker } from "react-icons/hi";
import "./AppPage.css";
import Header from "../Header/Header";
import axios from "axios";

const AppPage = () => {
  const [contents, setContents] = useState([]);
  const [properties, setProperties] = useState([]);
  const [page, setPage] = useState(0);
  const [listingPerPage, setListingPerPage] = useState(6);
  const [numOfPagination, setNumOfPagination] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (contents && contents.length > 0) {
      setProperties(contents.slice(0, 6));
      const num = Math.ceil(contents.length / listingPerPage);
      setNumOfPagination(num);
    }
  }, [contents]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/properties")
      .then((res) => {
        console.log("Result", res.data.data);

        if (!!res.data.data) {
          setContents(res.data.data);
        } else {
          setContents([]);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    // Fetch all the properties from DB
    let q = `?search=${searchQuery}`;

    axios
      .get("http://localhost:3001/properties" + q)
      .then((res) => {
        console.log("res", res.data.data);
        if (!!res.data.data) {
          setContents(res.data.data);
        } else {
          console.log("contents should be empty");
          setContents([]);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, [searchQuery]);

  useEffect(() => {
    if (contents && contents.length > 0) {
      const num = page * listingPerPage;
      setProperties(contents.slice(num, num + listingPerPage));
    }
  }, [contents, page]);

  const selectPage = (pageNumber) => {
    setPage(pageNumber);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchClick = () => {
    console.log("Performing search for", searchQuery);
  };

  return (
    <>
      <Header />
      <div className="flex flex-col">
        <div className="search-buypage">
          <HiLocationMarker color="var(--blue)" size={25} />
          <input
            className="w-full outline-none py-2 ml-2"
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button className="button" onClick={handleSearchClick}>
            Search
          </button>
        </div>

        <div className="mx-auto py-12 w-fit grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-6 gap-y-8">
          {(contents && contents.length) > 0 ? (
            properties.map((content) => (
              <BuyerPage
                key={content.id}
                imageFilename={content.image_filename}
                name={content.name}
                description={content.description}
                price={content.price}
                address={content.address}
                location={content.location}
                bed={content.bed}
                bath={content.bath}
                sqms={content.sqms}
              />
            ))
          ) : (
            <h1> No results for {searchQuery} </h1>
          )}
        </div>

        <div className="w-fit mx-auto mb-8">
          {contents && contents.length > 0 && (
            <nav aria-label="Page navigation example">
              <ul className="ulclass">
                <li>
                  <button
                    className="previous"
                    onClick={() => {
                      if (page === 0) {
                        setPage(numOfPagination - 1);
                      } else {
                        setPage(page - 1);
                      }
                    }}
                  >
                    <span className="sr-only">Previous</span>
                    <BiSolidLeftArrow className="left text-[#1F3E72] text-xl" />
                  </button>
                </li>
                {Array.from({ length: numOfPagination }, (_, idx) => (
                  <li key={idx}>
                    <button
                      onClick={() => selectPage(idx)}
                      className={
                        "p-2 rounded-full bg-slate border mx-2 h-12 w-12 hover:bg-slate-300 " +
                        (idx === page ? "bg-[#ffa500] text-white" : "bg-slate")
                      }
                    >
                      {idx + 1}
                    </button>
                  </li>
                ))}
                <li>
                  <button
                    className="next"
                    onClick={() => {
                      if (page === numOfPagination - 1) {
                        setPage(0);
                      } else {
                        setPage(page + 1);
                      }
                    }}
                  >
                    <span className="sr-only">Next</span>
                    <BiSolidRightArrow className="right" />
                  </button>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </>
  );
};

export default AppPage;
