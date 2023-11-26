import StarActive from '../assets/star_active.svg'
import StarGrey from '../assets/star_grey.svg'


function Rating({rate}) {
  let starsFull = Array.from({length: rate}, (value, index) => index)
  let starsEmpty = Array.from({length : 5 - rate}, (value, index) => value)

  return (
    <div className="zoneStars">
      {
        starsFull.map((star, index) => {
          return (<img key={index} alt='starFull' src={StarActive} className='stars'></img>)
        })
      }
      {
        starsEmpty.map((star, index) => {
          return (<img key={index} alt='starEmpty' src={StarGrey} className='stars'></img>)
          })
      }
    </div>
  )
}
export default Rating