import React from "react";
import { ETSY } from "../../App";

type ListingProps = {
  items: ETSY
}

type ItemProps = {
  url?: string,
  MainImage?: {
    url_570xN: string
  }
  title?: string
  currency_code?: string
  price?: string
  quantity?: number
}

type TitleProps = {
  title: string,
}

type PriceProps = {
  price: string,
  currency_code: string
}

type QuantityProps = {
  quantity: number
}

export default function Listing({ items }: ListingProps) {

  return (
    <div className="item-list">
      {
        items.map((el) => (
          el.state !== 'removed' ?
            <Item
              key={el.listing_id}
              url={el.url}
              MainImage={el.MainImage}
              title={el.title}
              currency_code={el.currency_code}
              price={el.price}
              quantity={el.quantity} /> : ""
        ))
      }
    </div>
  )
}

function Item({
  url,
  MainImage,
  title,
  currency_code,
  price,
  quantity, }: ItemProps) {

  return (
    <div className="item">
      <div className="item-image">
        <a href={url}>
          <img src={MainImage?.url_570xN} alt="/" />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{
          title ? <Title title={title} /> : ""
        }</p>
        <p className="item-price">{
          price && currency_code ? <Price price={price} currency_code={currency_code} /> : ""
        }</p>{
          quantity ? <Quantity quantity={quantity} /> : ""
        }
      </div>
    </div>
  )
}

function Quantity({ quantity }: QuantityProps) {
  return (
    quantity <= 10 ? <p className="item-quantity level-low">{quantity} left</p> :
      quantity <= 20 ? <p className="item-quantity level-medium">{quantity} left</p> :
        <p className="item-quantity level-high">{quantity} left</p>
  )
}

function Price({ price, currency_code }: PriceProps) {
  return (
    currency_code === "USD" ? <>{`$${price}`}</> :
      currency_code === "EUR" ? <>{`€${price}`}</> :
        <>{price}{currency_code}</>
  )
}

function Title({ title }: TitleProps) {
  return (
    title.length > 50 ? <>{`${title.slice(0, 50)}...`}</> : <>{title}</>
  )
}

Listing.defaultProps = {
  items: [],
}

