import React, { useState } from "react";
import "../App.css";
import Movies from "./Movies";
import axios from "axios";

const Second = () => {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("")
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const search = (e) => {
    e.preventDefault();
    setLoading(true);

    axios.get(`https://www.omdbapi.com/?apikey=1bc35fc9&type=movie&s=${title}&y=${year}`)
      .then(function ({ data }) {
        if (data.Response === "True") {
          setMovies(data.Search);
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


  return (
    <div>
      <div className="mx-auto my-5">
        <div className="row d-flex align-items-center justify-content-sm-between justify-content-center mb-4 mx-2">
          <div>
            <h1 className="pr-3 ">OMDB App</h1>
          </div>
          <div>
            <form className="form-inline" onSubmit={search} >
              <input
                className="form-control m-2"
                placeholder="Enter Movie Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                required
              />
              <input
                className="form-control m-2"
                placeholder="Enter Year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                type="text"
              // required
              />
              <div className="mx-auto">
                <button type="submit" className="btn btn-secondary m-2" >Search</button>
              </div>
            </form>
          </div>
        </div>
        <div className="row" style={{ height: "75vh" }}>
          {loading ?
            <div className="container d-flex align-items-center">
              <div className="mx-auto text-secondary">
                <h1>Welcome to Omdb App</h1>
                <p className="pl-2">Search for the Movie using title and year.</p>
              </div>
            </div>
            :
            movies.map((movie, index) => (
              < Movies seeMore={false} seePoster={true} key={index} movie={movie} />
            ))
          }
        </div>
      </div>
    </div >
  )
}

export default Second
