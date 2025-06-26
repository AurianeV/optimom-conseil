import './CardExpertise.scss'

function CardExpertise ({expertise, text, textRight, img}) {

    return (

        
        <>

            <section className="CardSection">
                <div className={textRight ? "section_text_right" : "section_text_left"}>
                        <img src={img}/>
                        <div className="text">
                            <h3>{expertise}</h3>
                            {text}
                        </div>
                    </div>
            </section>
            
        </>
    )
}

export default CardExpertise