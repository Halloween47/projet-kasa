// import React from 'react'
// import StarActive from '../assets/star_active.svg'

// const StarRating = ({ ratings }) => {
//   const maxStars = 5

//   const renderStars = (numStars) => {
//     const fullStars = Array.from({ length: numStars }, (_, index) => (
//       <span key={index}>&#9733;</span> // Utilisation d'un caractère d'étoile pleine
//     ))
//     const emptyStars = Array.from(
//       { length: maxStars - numStars },
//       (_, index) => (
//         <span key={numStars + index}>&#9734;</span> // Utilisation d'un caractère d'étoile vide
//       )
//     )

//     return [...fullStars, ...emptyStars]
//   }

//   return (
//     <div>
//       {ratings.map((item, index) => (
//         <div key={index}>
//           {renderStars(item.rate)}
//           <span>{`(${item.rate}/5)`}</span>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default StarRating

import StarActive from '../assets/star_active.svg'
import StarGrey from '../assets/star_grey.svg'


function Rating({rate}) {
  let starsFull = Array.from({length: rate}, (value, index) => index)
  let starsEmpty = Array.from({length : 5 - rate}, (value, index) => value)

  return (
    <div className="zoneStars">
      {
        starsFull.map((star, index) => {
          return (<img key={index} alt='starFull' src={StarActive}></img>)
        })
      }
      {
        starsEmpty.map((star, index) => {
          return (<img key={index} alt='starEmpty' src={StarGrey}></img>)
          })
      }
    </div>
  )
}
export default Rating