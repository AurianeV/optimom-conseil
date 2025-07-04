import './CardTeam.scss'

function CardTeam ({name, job, description}) {
    return (
        <section className="cardPerson">
            <h3>{name}</h3>
            <hr></hr>
            <p>{job}</p>
            <details>
                <summary><strong>Biographie</strong></summary>
                <p>{description}</p>
            </details>
        </section>
    )
}

export default CardTeam