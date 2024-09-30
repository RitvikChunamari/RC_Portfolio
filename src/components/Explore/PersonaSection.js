import React, { useEffect } from 'react'

function PersonaSection({ persona }) {
    return (
        <div className="personaGrid">
            <div className="ng">
                <div className="pfp">
                    <img src={persona.image} alt={persona.name} />
                    <h3 style={{ color: "white", paddingTop: "40px", fontSize: "30px" }}>
                        {persona.name}
                    </h3>
                </div>
                <div className="dmg">
                    <h2>Demographics</h2>
                    <table>
                        {persona.demographics.map((item, index) => (
                            <tr key={index}>
                                <th>{item.label}:</th>
                                <td>{item.value}</td>
                            </tr>
                        ))}
                    </table>
                </div>
                <div className="tech">
                    <h2>Technology</h2>
                </div>
            </div>
            <div className="ng2">
                {persona.sections.map((section, index) => (
                    <div key={index} className={`personaGridItem upr${index + 1}`}>
                        <div className="head">
                            <svg
                                width="24"
                                height="24"
                                viewBox={section.svg.viewBox}
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d={section.svg.path}
                                    fill="#696969"
                                />
                            </svg>
                            <h1>{section.title}</h1>
                        </div>
                        <ul>
                            {section.items.map((item, itemIndex) => (
                                <li key={itemIndex}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PersonaSection;