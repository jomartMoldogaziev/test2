import React from "react";
import styles from'./Card.module.css'



export const Card = (props)=> {
    const {full_name, price, avatar}=props
    const avatar_styles = {
      border: '1px solid white',
      height: 230,
      width:345,
      borderRadius:'10px',
      backgroundImage: `url(${avatar})`,
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      
      }
      
        return (
          <div className={styles.card}>
           <div style={avatar_styles}></div>    
           <div className="description">
            <h2>{full_name}</h2>
            <b>{price}</b>
           </div>
           
           </div>
        );
      };