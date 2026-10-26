import '@styles/Activities.scss'
import Card from '@components/Card.jsx';
//import { activities, diasSemana } from '../data/activities.js'
import { useEffect, useState } from 'react';

const Activities = () => {
    const isLoggedIN = localStorage.getItem("isLoggedIn") === "true";
    const [activities, setActivities] = useState([]);
    const [diasSemana, setDiasSemana] = useState([]);

    const BASE_URL = "http://localhost:4000/";

    const fetchActivities = async () => {
        try{
            const response = await fetch(`${BASE_URL}activities`);
            const data = await response.json();
            setActivities(data);
        }catch(error){
            console.error(`Error al retornar actividades: ${error}`);
        }
    }

    const fetchDiasSemana = async () => {
        try{
            const response = await fetch(`${BASE_URL}diasSemana`);
            const data = await response.json();
            setDiasSemana(data.dias);
        }catch(error){
            console.error(`Error al retornar actividades: ${error}`);
        }
    }

    useEffect(() => {
        fetchDiasSemana();
        fetchActivities();
    }, []);

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