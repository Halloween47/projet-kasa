import Carousel from './Carousel'
import LogementInfos from './LogementInfos'

function Slideshow(idLogement) {
  return (
    <div className="slideshow">
      <Carousel />
      <LogementInfos idLogement={idLogement} />
    </div>
  )
}

export default Slideshow
