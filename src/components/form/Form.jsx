import React from "react";
import styles from "./form.module.css";
import ez from "../../assets/ezicon.png";
import { useState } from "react";
import { useSnackbar } from "notistack";
import axios from "axios";
const Form = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [email, setEmail] = useState("");

  const handleContact = async (e) => {
    e.preventDefault();

    if (!email) {
      enqueueSnackbar("Email is missing", { variant: "error" });
      return;
    }

    try {
      console.log("Sending data:", { email });

      const response = await axios.post(
        "https://test.ezworks.ai/api",
        { email },
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.status === 200) {
        enqueueSnackbar("Mail Sent", { variant: "success" });
      } else {
        enqueueSnackbar("An error occurred", { variant: "error" });
      }
    } catch (error) {
      console.error("Error response:", error.response);
      enqueueSnackbar(error.response?.data?.message || "An error occurred", {
        variant: "error",
      });
    }
  };

  return (
    <div className={styles.formContainer}>
      <img src={ez} alt="" height={80} width={280} />
      <h2 className={styles.maintext}>
        A suite of Business and support services
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
        repellat quam perferendis necessitatibus numquam fugit rem adipisci quo
        minus soluta inventore illo cupiditate, hic nostrum animi. Sit modi
        repellat recusandae!
      </p>
      <form onSubmit={handleContact} className={styles.form}>
        <input
          type="email"
          value={email}
          placeholder="Email address"
          onChange={(e) => setEmail(e.target.value)}
          className={styles.email}
        />
        <button type="submit" className={styles.btn}>
          Contact me
        </button>
        {enqueueSnackbar}
      </form>
    </div>
  );
};

export default Form;
