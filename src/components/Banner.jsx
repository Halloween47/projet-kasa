import bannerImg from '../assets/banner.png'

function Banner() {
  return (
    <div className="banner">
      <img src={bannerImg} alt="image banniere" />
      <h1>Chez vous, partout et ailleurs</h1>
    </div>
  )
}

export default Banner
