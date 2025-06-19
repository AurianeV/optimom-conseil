import './Background.scss'

function Background({ backgroundImage, children }) {
    return (
        <section
            className="background"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="background_text">
                {children}
            </div>
        </section>
    )
}

export default Background
