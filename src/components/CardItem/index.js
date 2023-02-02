import './index.css'

const CardItem = props => {
  const {CardTechnologies} = props
  const {title, description, imgUrl, className} = CardTechnologies
  return (
    <li className={`${className} card-bg-container`}>
      <h1 className="heading-card">{title}</h1>
      <p className="paragraph-card">{description}</p>
      <div className="image-container">
        <img className="image-card" src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default CardItem
