const PersonaSection = ({ persona }) => {
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
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12 24C5.37242 24 0 18.6276 0 12C0 5.37242 5.37242 7.15256e-07 12 7.15256e-07C18.6276 7.15256e-07 24 5.37242 24 12C24 18.6276 18.6276 24 12 24ZM12 3.09677C7.07952 3.09677 3.09677 7.07855 3.09677 12C3.09677 16.9205 7.07855 20.9032 12 20.9032C16.9205 20.9032 20.9032 16.9215 20.9032 12C20.9032 7.07952 16.9215 3.09677 12 3.09677ZM12 18.1935C8.57952 18.1935 5.80645 15.4205 5.80645 12C5.80645 8.57952 8.57952 5.80645 12 5.80645C15.4205 5.80645 18.1935 8.57952 18.1935 12C18.1935 15.4205 15.4205 18.1935 12 18.1935ZM12 8.90323C10.2924 8.90323 8.90323 10.2924 8.90323 12C8.90323 13.7076 10.2924 15.0968 12 15.0968C13.7076 15.0968 15.0968 13.7076 15.0968 12C15.0968 10.2924 13.7076 8.90323 12 8.90323Z"
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
    );
};

export default PersonaSection;