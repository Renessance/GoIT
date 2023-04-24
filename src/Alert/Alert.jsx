import React from 'react';
import styles from "./style.module.css"
import clsx from "clsx";


const Alert = ({ children, variant, outlined, elevated }) => {
  // const classNames = ['alert', variant]
  const styles = {
    padding: "10px 20px",
    background: "gray",
    color: "white",
    border: "1px solid #000",
    width: "300px",
    margin: "10px",
    borderRadius: "8px"
  }
  // const getBgColor = (variant) => {
  //   switch (variant) {
  //     case "info":
  //       return "lightGray"
  //     case "warning":
  //       return "yellow"
  //     case "error":
  //       return "red"
  //     case "success":
  //       return "green"
  //     default:
  //       throw new Error(`Somthing wrong ${variant}`)
  //   }
  // }

  // console.log('classNames', classNames)
  // console.log('classNames.join(" ")', classNames.join(" "))

  return (
    <div >
     <p className={
       clsx(styles[variant], {
       [styles.outlined]: outlined,
       [styles.elevated]: elevated,
       }
       )
     }>{children}</p>
    </div>
  );
};
// {...styles, backgroundColor: getBgColor(variant)}

export default Alert;