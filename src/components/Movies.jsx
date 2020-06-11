import React, { useState } from "react";
import Movie from "./Movie";

const Movies = ({ movie, seeMore, seePoster }) => {

  const [showModal, setShowModal] = useState(false)
  const [id, setId] = useState()

  return (<>
    <div className="card border-0 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 my-4">
      <div className="mx-2 bg-light">
        <div className="d-flex">
          {seePoster && <img className="card-img-top img-fluid mx-auto" style={{ width: "350px", height: "500px" }} alt={movie.Title} src={movie.Poster} />}
        </div>
        <div className="card-body pb-2 px-5">
          <h4 className="card-title mb-0">{movie.Title}</h4>
          <div className="d-flex align-items-end justify-content-between mt-3">
            <h6 className="card-subtitle text-muted mb-1">{movie.Year}</h6>
            {seeMore && <button className="btn text-secondary border-0 m-0 p-0 stretched-link" type="button" onClick={(e) => { setId(e.target.value); setShowModal(true) }} data-toggle="modal" data-target="#myModal" value={movie.imdbID}>See More</button>}
          </div>
          {!seePoster && <h6> {movie.Runtime} </h6>
          }
        </div>
        <div>
          <Movie
            id={id}
            show={showModal}
            onHide={() => setShowModal(false)}
          />
        </div>
      </div>
    </div>
  </>
  )
}

export default Movies
