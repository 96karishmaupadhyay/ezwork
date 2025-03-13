import React from "react";
import styles from "./form.module.css";
import ez from "../../assets/ezicon.png";
import { useState } from "react";
const Form = () => {
  const [email, setEmail] = useState("");
  return (
    <div className={styles.formContainer}>
      <img src={ez} alt="" height={50} width={180} />
      <p className={styles.maintext}>
        A suite of Business and support services
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
        repellat quam perferendis necessitatibus numquam fugit rem adipisci quo
        minus soluta inventore illo cupiditate, hic nostrum animi. Sit modi
        repellat recusandae!
      </p>
      <form action="" className={styles.form}>
        <input
          type="email"
          value={email}
          placeholder="Email address"
          onChange={(e) => setEmail(e.target.value)}
          className={styles.email}
        />
        <button 
        // onClick={handleContact}
         className={styles.btn}>
          Contact me
        </button>
      </form>
    </div>
  );
};

export default Form;
