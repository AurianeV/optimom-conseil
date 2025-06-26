import './Background.scss'

function Background({ backgroundImage, children }) {
    return (
        <section
            className="background"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="background_text">
                <h1>{children}</h1>
            </div>
        </section>
    )
}

export default Background
