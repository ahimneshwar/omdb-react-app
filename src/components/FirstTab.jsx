import React, { useState, useEffect } from "react";
import "../App.css";
import Movies from "./Movies";
// import Pagination from "./Pagination";
import axios from "axios";

const FirstTab = () => {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("")
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [totalResults, setTotalResults] = useState("")
  const [currentPage, setCurrentPage] = useState(1);
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalResults / 10); i++) {
    pageNumbers.push(i);
  }

  const search = () => {
    setLoading(true);
    axios.get(`https://www.omdbapi.com/?apikey=1bc35fc9&type=movie&s=${title}&y=${year}&page=${currentPage}`)
      .then(function ({ data }) {
        if (data.Response === "True") {
          console.log('data :>> ', data.Search);
          setMovies(data.Search);
          setTotalResults(data.totalResults)
          setLoading(false);
        } else {
          console.log('error :>> ', data.Error);
          setLoading(false);
        }
      })
      .catch(function (error) {
        console.log('error :>> ', error);
      })
  };


  useEffect(() => {
    search()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage])



  const paginate = (number) => { setCurrentPage(number) }


  return (
    <div className="mx-auto mt-5">
      <div className="row d-flex align-items-center justify-content-sm-between justify-content-center mb-4 mx-2">
        <div>
          <h1 className="pr-3 text-secondary">OMDB App</h1>
        </div>
        <div>
          <form className="form-inline">
            <input
              className="form-control m-2 border-secondary"
              placeholder="Enter Movie Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              required
            />
            <input
              className="form-control m-2 border-secondary"
              placeholder="Enter Year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              type="text"
            />
            <div className="mx-auto">
              <button type="button" onClick={search} className="btn btn-secondary m-2" >Search</button>
            </div>
          </form>
        </div>
      </div>
      <div className="row">
        {loading ?
          <div className="mx-auto text-secondary">
            <h1>Loading.....</h1>
          </div>
          :
          movies.map((movie, index) => (
            <Movies seeMore={true} seePoster={false} key={index} movie={movie} />
          ))
        }
      </div>
      <div>
        <nav>
          <ul className="pagination justify-content-center mx-0 my-0">
            {pageNumbers.map(number => (
              <li key={number} className="page-item">
                <button onClick={() => { paginate(number); console.log('number', number) }} className="btn btn-lg border-secondary text-secondary page-link px-3 py-2 my-5 mx-auto">
                  {number}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div >
  );
};


export default FirstTab;

