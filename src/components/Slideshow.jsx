import { useParams } from 'react-router-dom'

import LogementInfos from './LogementInfos'
import Carousel from './Carousel'
import NotFound from '../pages/NotFound'

import datas from '../datas/datas.json'


function Slideshow() {
    let { idLogement } = useParams()


    let currentLogement = datas.find((logement) => logement.id === idLogement)

return currentLogement ? (
    <div className="slideshow">
    <Carousel />
    <LogementInfos />
</div>
) : (
    <NotFound />
)
}

export default Slideshow