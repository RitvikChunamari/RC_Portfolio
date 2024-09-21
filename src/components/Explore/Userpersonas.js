import React from "react";
import "../../styles/Explore/userpersonas.css";
import PersonaSection from '../Explore/PersonaSection';
import { personaData1, personaData2 } from '../Explore/personData';

function UserPersonas() {
    return (
        <div className="personacontainer">
            <PersonaSection persona={personaData1} />
            <PersonaSection persona={personaData2} />
        </div>
    );
}

export default UserPersonas;
