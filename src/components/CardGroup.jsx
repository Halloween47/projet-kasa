import datas from '../datas/datas'
import Card from './Card'

function CardGroup() {
return(
    <div className="card-group">
        {
            
        datas.map((data, index)=>{
            return (<Card key={index} title={data.title} text={data.text}/>);
            })
        }
    </div>
)
}

export default CardGroup