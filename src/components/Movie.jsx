import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from 'react-bootstrap/Modal'

const Movie = (props) => {
  const [data, setData] = useState({})

  useEffect(() => {
    if (props.id !== undefined) {
      axios.get(`https://www.omdbapi.com/?apikey=1bc35fc9&type=movie&plot=full&i=${props.id}`)
        .then(function (r) {
          setData(r.data)
        })
        .catch(function (error) {
          console.log('error :>> ', error);
        })
    }
  }, [props.id]);


  return (
    <Modal {...props} size="xl" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body>
        <div className="row">
          <div className="col-4 text-center"><img className="img-fluid" src={data.Poster} alt={data.Title} /></div>
          <div className="col-8">
            <div className="row">
              <div className="col-sm-6 mt-2">
                <h2 className="">{data.Title}<span className="small"> ({data.Year})</span></h2>
                <h6>{`Released : ${data.Released}`}</h6>
                <h6>{data.Genre}</h6>
                <p className="small">{`Rated : ${data.Rated}`} | {`Runtime : ${data.Runtime}`}</p>
              </div>
              <div className="col-sm-6 mt-3">
                <h6>Box Office : {data.imdbRating >= 7 ? <span> Hit <img src={`${require('../icons/thumbs-up.svg')}`} height="15" alt="" /></span>
                  : <span> Flop <img src={`${require('../icons/thumbs-down.svg')}`} height="15" alt="" /></span>}
                </h6>
                <h6><img src={`${require('../icons/logo-imdb.svg')}`} height="22" alt="" /><span className="pl-2">{data.imdbRating} </span></h6>
                <h6>{`Votes : ${data.imdbVotes}`}</h6>
              </div>
            </div>
            <div className="mt-3">
              <h6>{`Director : ${data.Director}`}</h6>
              <h6>{`Awards : ${data.Awards}`}</h6>
              <h6>{`Starring : ${data.Actors}`}</h6>
              <h6>{`Country : ${data.Country}`}</h6>
              <h6>{`Writer : ${data.Writer}`}</h6>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal >
  )
}

export default Movie
