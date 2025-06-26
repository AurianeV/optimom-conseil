import CardTeam from './CardTeam'
import './Team.scss'

function Team() {
    const teamData = [
        {
            name: "Jean-Marc ETCHERBANE",
            job: "Associé Fondateur et Président",
            description: "Fort de trente ans d’expérience dans le conseil en entreprise et le financement d’investissements dans les DOM-TOM, Jean-Marc est titulaire d’un MBA de l’université de Chicago. Il a occupé des fonctions de direction dans des groupes internationaux tels qu’International Harvester ou Hachette."
        },
        {
            name: "Julien CHAMBARD",
            job: "Associé Fondateur",
            description: "Diplômé de l’Institut supérieur de gestion (ISG) et du Conservatoire national des arts et métiers, Julien bénéficie de plus de trente ans d’expérience en finance, gestion et direction d’entreprise, en France et à l’international. Il accompagne les projets d’investissement en outre-mer dans le cadre des dispositifs de défiscalisation. Julien met son expertise financière et opérationnelle au service des entreprises souhaitant structurer et optimiser leurs projets."
        },
        {
            name: "Nicolas ETCHEBARNE",
            job: "Responsable administratif et financier",
            description: "Nicolas possède une expérience dans le montage, le suivi et la gestion de projets d’investissement outre-mer. Titulaire du Diplôme supérieur de comptabilité et de gestion, il a exercé des fonctions en cabinet d’audit et au sein de la société de gestion Amundi Immobilier. Chez Optimom Conseil, il est en charge de la gestion des opérations liées aux dispositifs fiscaux."
        },
        {
            name: "Nathalie Ho-A-Chuck Abchée",
            job: "Associée",
            description: "Titulaire d’un MBA de l’Université de McGill (Canada), Nathalie possède près de 30 ans d’expérience en ingénierie financière et conseil aux entreprises. Basée en Guyane, Nathalie pilote le choix, le montage et le suivi local des dossiers financés par OPTIMOM. Elle est très impliquée par ailleurs dans la vie économique guyanaise."
        },
        {
            name: "Pierre Louis PALLUET",
            job: "Associé",
            description: "Fort d’une solide expérience dans le secteur bancaire et la distribution de produits professionnels, Pierre Louis est basé en Guyane depuis plus d’une quinzaine d’années. Il assure le choix, le montage et le suivi de dossiers tout en étant impliqué dans la vie économique guyanaise."
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
