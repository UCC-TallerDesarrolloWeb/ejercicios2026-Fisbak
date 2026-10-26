import '@styles/Activities.scss'
import Card from '@components/Card.jsx';
import { activities, diasSemana } from '../data/activities.js'

const Activities = () => {
    const isLoggedIN = localStorage.getItem("isLoggedIn") === "true";

    const handleInscribir = (nombreActividad) => {
        alert(`Inscripto en ${nombreActividad}`);
    }

    return(
        <div className="activities-container">
            {
                activities.map((actividad,index)=>(
                    <Card key={index} title={actividad.nombre} subtitle={actividad.descripcion}>
                        <ul>
                            {actividad.horarios.map((horario,i)=>(
                                <li key={i}>
                                    {diasSemana[horario.dia]} - {horario["hora-inicio"]} - {horario["hora-fin"]}
                                </li>
                            ))}
                        </ul>
                        {
                            isLoggedIN &&(
                                <button onClick={() => handleInscribir(actividad.nombre)}>Inscribirse</button>
                            )
                        }

                    </Card>
                ))
            }
        </div>
    )
}

export default Activities;