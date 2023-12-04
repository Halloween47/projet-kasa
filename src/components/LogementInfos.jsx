import { useParams } from 'react-router-dom'
import Collapse from './Collapse'
import Tags from './Tags'
import datas from '../datas/datas.json'
import Ratingg from './Rating'

function LogementInfos({ idLogement, titre, logement, name, photo }) {
  const idEnCours = useParams()
  const idDuLogementEnCours = idEnCours.idLogement

  const datasDuLogementEnCours = datas.find(
    (data) => data.id === idDuLogementEnCours
  )
  const tagsDuLogementEnCours = datasDuLogementEnCours.tags
  const rateDuLogementEnCours = datasDuLogementEnCours.rating
  const descriptionDuLogementEnCours = datasDuLogementEnCours.description
  const equipmentsDuLogementEnCours = datasDuLogementEnCours.equipments

  const equipementForme = equipmentsDuLogementEnCours.map(
    (equipement, index) => <li>{equipement}</li>
  )

  return (
    <div className="infosLogement">
      <div className="zone-1">
        <div className="zoneUnGauche">
          <h1 className="titre">{datasDuLogementEnCours.title}</h1>
          <p className="localisation">{datasDuLogementEnCours.location}</p>
          <Tags tags={tagsDuLogementEnCours} />
        </div>
        <div className="zoneUnDroite">
          <div className="profil">
            <div className="name">{datasDuLogementEnCours.host.name}</div>
            <div className="photo">
              <img src={datasDuLogementEnCours.host.picture} alt="photo hôte" />
            </div>
          </div>
          <div className="zoneStars">
            <Ratingg rate={rateDuLogementEnCours} />
            {/* <img src={StarActive} alt="Description alternative" /> */}
          </div>
        </div>
      </div>
      <div className="zone-2">
        <Collapse title="Disponibilité" text={descriptionDuLogementEnCours} />
        <Collapse title="Equipement" text={equipementForme} />
      </div>
    </div>
  )
}

export default LogementInfos
