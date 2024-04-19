import './InfoText.css'

// eslint-disable-next-line react/prop-types
const InfoText = ({title, text}) => {
    return(
        <>
        <section className="page-info">
            <h1>{title}</h1>
            <p className='page-text'>{text}</p>
        </section>
        </>
    )
}

export default InfoText