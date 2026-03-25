import React, { createContext, useContext, useEffect, useState } from 'react'

export let myCart = createContext()

const CartContext = ({ children }) => {
  //let[promo,setpromo]=useState("")
  let [cart, setCart] = useState(() => {
    let storedData = localStorage.getItem('cart');
    return storedData ? JSON?.parse(storedData) : []
  })


  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  function addToCart(product) {
    setCart((prev) => {
      let productExists = prev.find((items) => items.id === product.id)
      if (productExists) {
        return prev.map((item) => {
          return item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        })

      } else {
      }
      return [...prev, { ...product, quantity: 1 }]

    }

    )
  }


  function decrementQty(id) {
    // alert("hello")
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ?
          {
            ...item,
            quantity: item.quantity - 1
          } :
          item

      ).filter(
        (item) => item.quantity > 0
      ))
  }

  function incrementQyt(id) {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ?
          {
            ...item,
            quantity: item.quantity + 1
          } :
          item
      ).filter((item) => item.quantity < 20)
    )
  }
  function removeItem(id) {
    setCart((prev) =>
      prev.filter((item) =>
        item.id != id)
    )
  }

  function total_price() {
    return cart.reduce((curr, items) => (
      curr = curr + items.price * items.quantity
    ), 0
    )
  }

  function applyPromo() {
    if (promo === "SAVE10") {
      setDiscount(total * 0.1);
    } else if (promo === "SAVE20") {
      setDiscount(total * 0.2);
    } else {
      setDiscount(0);
      alert("Invalid Promo Code");
    }
  }

  return (
    <myCart.Provider value={{ cart, addToCart, decrementQty, incrementQyt, removeItem, total_price, applyPromo }}>
      {children}
    </myCart.Provider>
  )
}

export default CartContext