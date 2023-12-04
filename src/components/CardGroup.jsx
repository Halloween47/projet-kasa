import datas from '../datas/datas'
import Card from './Card'

function CardGroup() {
  return (
    <div className="card-group">
      {/* <h3>Test TEST</h3> */}
      {datas.map((data, index) => {
        return (
          <Card key={index} title={data.title} text={data.text} id={data.id} image={data.cover} />
        )
      })}
    </div>
  )
}

export default CardGroup
