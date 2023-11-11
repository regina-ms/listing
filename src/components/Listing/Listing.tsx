import React, { useState } from "react";


export interface TItem {
    listing_id: number,
    url: string,
    MainImage: {
      url_570xN: string,
    },
    title: string,
    currency_code: string,
    price: string,
    quantity: number,
}


type ListingProps = {
  items: TItem[],
}

type ItemProps = {
    item: TItem,
}


export default function Listing({items}:ListingProps) {

    return <div className="item-list"></div>
} 

Listing.defaultProps = {
  items: [],
}

export function Item({item}:ItemProps) {
    <div className="item">
    <div className="item-image">
      <a href={item.url}>
        <img src={item.MainImage.url_570xN} alt="/"/>
      </a>
    </div>
    <div className="item-details">
      <p className="item-title">{item.title.length <= 50 ? item.title : `${item.title.slice(0,50)}...`}</p>
      <p className="item-price">{item.price}</p>
      <p className="item-quantity level-medium">{item.quantity}</p>
    </div>
  </div>
}