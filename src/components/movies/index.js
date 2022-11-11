import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Movie from './movie';

const Movies = () => {

  // const [movies, setMovies] = useState([]);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);

  //   axios.get(`https://api.themoviedb.org/3/discover/tv`, {
  //     params: {
  //       sort_by: 'popularity.desc',
  //       api_key: process.env.API_KEY
  //     }
  //   })
  //     .then( (response) => {
  //       setLoading(false);
  //       setMovies(response?.data?.results);
  //     })
  //     .catch( (error) => {
  //       setLoading(false);
  //       console.log(error);
  //     })
  // }, [])

  return (
    <div className="flex flex-wrap -mb-4">
      <div className="w-full md:w-1/2 lg:w-1/3 mb-4 px-2">
        <div className="mb-8 text-white">
          <figure className="overflow-hidden mb-4">
            <img src="../../images/narcos.logo.png" />
          </figure>
          <div className="flex justify-between">
            <p>Cãmara Legislativa</p>
            <p className="text-yellow-300 font-bold">Deputados Federais</p>
          </div>
          <h2>São as leis aprovadas XPTO</h2>
          <p> teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste
          teste teste teste teste </p>
        </div>
      </div>
    </div>
  )
}

export default Movies
