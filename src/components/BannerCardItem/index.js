import './index.css'

const BannerCardItem = props => {
  const {bannerCard} = props
  const {headerText, description, className} = bannerCard
  return (
    <li className={`card ${className}`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="description">{description}</p>
        <button className="button" type="button">
          show more
        </button>
      </div>
    </li>
  )
}

export default BannerCardItem
