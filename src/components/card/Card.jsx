import React from 'react'
import styles from "./card.module.css"
const Card = ({image,title}) => {
  return (
    <div className={styles.card}>

      <div className={styles.header}>
        <img src={image} alt="icon" height={30} width={30} />
        <h3>{title}</h3>
      </div>
      <div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      </div>
    </div>
  )
}

export default Card
