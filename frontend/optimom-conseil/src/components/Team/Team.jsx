import CardTeam from './CardTeam'
import './Team.scss'

function Team() {
    const teamData = [
        {
            name: "Jean Pascal ETCHERBANE",
            job: "Associé",
            description: "Passionnée par le code, elle aime transformer les idées en interfaces simples et efficaces."
        },
        {
            name: "Julien CHAMBARD",
            job: "Associé",
            description: "Passionnée par le code, elle aime transformer les idées en interfaces simples et efficaces."
        },
        {
            name: "Nicolas ETCHEBARNE",
            job: "Strategic Enterprise Account Executive",
            description: "Conçoit des expériences intuitives pour les utilisateurs avec une forte sensibilité esthétique."
        },
        {
            name: "Nathalie Ho-A-Chuck Abchée",
            job: "Associée",
            description: "Coordonne les équipes et assure le bon déroulement des projets du début à la fin."
        },
        {
            name: "Pierre Louis PALLUET",
            job: "Associé",
            description: "Coordonne les équipes et assure le bon déroulement des projets du début à la fin."
        }
    ]

    return (
        <>
            <h1>Notre équipe</h1>
            <p>TEXTE BLABLA</p>
            <div className="teamWrapper">
                {teamData.map((person, index) => (
                    <CardTeam
                        key={index}
                        name={person.name}
                        job={person.job}
                        description={person.description}
                    />
                ))}
            </div>
        </>
    )
}

export default Team
