import React from 'react';
import Props from './props';

const App = () => {
  const movieDetails1 = {
    title: "Avatar",
    rating: 5,
    isCool: true,
    actors: [{ title: 'Sam Worthington' }, { title: 'Zoe Saldana' }]
  };

  const movieDetails2 = {
    title: "Inception",
    rating: 4.7,
    isCool: true,
    actors: [{ title: 'Leonardo DiCaprio' }, { title: 'Joseph Gordon-Levitt' }]
  };

  const movieDetails3 = {
    title: "The Matrix",
    rating: 4.9,
    isCool: true,
    actors: [{ title: 'Keanu Reeves' }, { title: 'Laurence Fishburne' }]
  };

  return (
    <>
      <div className='p-2 m-2 border border-gray-200 w-[300px] rounded-xl bg-linear-[90deg] from-purple-500 via-pink-500 to-red-500'>
        <h2 className='border-1 border-gray-200 rounded-full p-1 bg-gray-50 text-slate-950 font-semibold font-light w-[150px] text-center'>App Component</h2>
        <Props details={movieDetails1} />
        <Props details={movieDetails2} />
        <Props details={movieDetails3} />
      </div>
      <div className='p-2 m-2 border border-gray-200 w-[300px] rounded-xl bg-cover bg-radial-[circle_at_100%_-50%] from-sky-300 via-sky-200 to-indigo-700 to-75%'>
        <h2 className='border-1 border-gray-200 rounded-full p-1 bg-gray-50 text-slate-950 font-semibold font-light w-[150px] text-center'>App Component</h2>
        <Props details={movieDetails1} />
        <Props details={movieDetails2} />
        <Props details={movieDetails3} />
      </div>
      <h1 className='text-8xl font-bold font-mono bg-linear-to-tr from-gray-900 to-gray-600 text-transparent bg-clip-text'>Text Color Styles</h1>
    </>
  );
};

export default App;
