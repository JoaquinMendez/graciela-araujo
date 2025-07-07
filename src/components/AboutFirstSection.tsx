import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import './AboutFirstSection.css';

const AboutFirstSectionComponent = () => {
    const {t} = useTranslation();
    
    
    return (
        <div className='header-about-first-section'>
            <div className="vertical-divider"></div>
            <h2>{t("About_First_Section_Title")}</h2>

            <div className='biography'>
                <p>Graciela Araujo Matturro nació en Montevideo el 18 de Julio de 1961. <br/>
                    Vivió su infancia observando el tallado en madera y diseño de muebles de estilo de su abuelo materno.<br/>
                    Desde pequeña su padre, docente de dibujo técnico y artista plástico, la introduce en el mundo del arte y la creación.<br/>
                    En el último año escolar participa del certamen ¨SOY UN NIÑO ORIENTAL¨ logrando el galardón que la lleva a participar en Crea del Sur y ganar el premio ¨Oriental¨ en medalla de bronce.<br/>
                    Como peinadora profesional es premiada en el certamen panamericano de peinados donde destaca una vez más su capacidad creativa.<br/>
                    </p>
                    <p>
                    Araujo comienza su recorrido artístico con su obra idealista ¨Silencio II¨ (2018) en Miami (EE.UU.) en la misma juega con una paleta de colores pastel, trasmitiendo así la fragilidad e inocencia de un tiempo joven y fresco, pero vulnerable.<br/>
                    En su segunda etapa Araujo realiza su obra en colores más fuertes con una impronta estilística inspirada en el cubismo Ej.: ¨Pandemia Ciudad¨(2020) Expuesta en Sevilla (España) 2022.<br/>
                    La artista manifiesta el análisis de estos tiempos con la presentación de una naturaleza y un ser humano confrontados cada vez más intensamente.<br/>
                    En marzo del año 2025 expone en Palacio Salvo y Museo del Tango de Montevideo su obra ¨Nosotras ¨ donde sintetiza  a través  de una paleta alta, vibración  y la fusión de dos estilos, cubismo e idealismo,  el antropocentrismo del ser y el entorno.<br/>
                </p>
            </div>
        </div>
    );
};

export default AboutFirstSectionComponent;
