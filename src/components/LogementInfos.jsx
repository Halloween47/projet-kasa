import { useParams } from 'react-router-dom'
import Collapse from './Collapse'
import Tags from './Tags'
import Rating from '@mui/material/Rating';
import datas from '../datas/datas.json'

function LogementInfos({ idLogement, titre, logement, name, photo }) {
  const idEnCours = useParams()
  const idDuLogementEnCours = idEnCours.idLogement

  const datasDuLogementEnCours = datas.find(
    (data) => data.id === idDuLogementEnCours
  )
  const tagsDuLogementEnCours = datasDuLogementEnCours.tags
  const rateDuLogementEnCours = datasDuLogementEnCours.rating


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
              <img
                src={datasDuLogementEnCours.host.picture}
                alt="photo hôte"
                srcset=""
              />
            </div>
          </div>
          <div className="zoneStars">
          <Rating name="size-medium" defaultValue={rateDuLogementEnCours} />
          </div>
        </div>
      </div>
      <div className="zone-2">
        <Collapse
          title="Disponibilité"
          text="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont
 régulièrement vérifiées par nos équipes."
        />
        <Collapse
          title="Equipement"
          text="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont
 régulièrement vérifiées par nos équipes."
        />
      </div>
    </div>
  )
}

export default LogementInfos
