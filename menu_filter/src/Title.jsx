const Title = ({title}) => {

    return (
        <div className="title">
            <h1>{title || 'Default Ttile'}</h1>
            <div className="title-underline"></div>
        </div>
    )
}

export default Title;