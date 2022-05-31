import './index.css'

const CartItem = Props => {
  const {CartItemDetails} = Props
  const {title, description, imgUrl, className} = CartItemDetails

  return (
    <li>
      <div className={`${className} cardItem_details_container`}>
        <h1 className="position_name_title">{title}</h1>
        <p className="description_regards_title">{description}</p>
        <div className="profile_images">
          <img src={imgUrl} className="image_container" alt={title} />
        </div>
      </div>
    </li>
  )
}

export default CartItem
