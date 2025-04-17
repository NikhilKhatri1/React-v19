import React from 'react'
import UseFetch from '../CustomHoook/UseFetch'

const Reciepes = () => {
  const { data, loading, error } = UseFetch('https://dummyjson.com/recipes');

  if (loading) {
    return <h1>Fetching Reciepes Data, please wait....</h1>
  }
  if (error) {
    return <h1>{error}</h1>
  }

  console.log(data)
  return (
    <div>
      <h1>Reciepes List is Here!</h1>
      <ul>
        {
          data?.recipes.length > 0
            ? (data?.recipes.map((recipe) => (
              <li className='flex justify-between items-center p-2 mt-1 bg-gray-100 ps-[10%] pe-[20%]'>
                <p>{recipe.name}</p>
                <img
                  className="h-[50px] w-[50px]"
                  src={recipe.image} alt={recipe.name} />
              </li>
            )))
            : null

        }
      </ul>
    </div>
  )
}

export default Reciepes