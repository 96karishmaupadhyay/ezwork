import React from "react";
import styles from "./home.module.css";
import Form from "../components/form/Form";
import Card from "../components/card/Card";
import dataprocessingicon from "../assets/dataprocessing.png";
import researchicon from "../assets/research.png";
import audiovisualicon from "../assets/audio-visual.png";
import graphicdesignicon from "../assets/graphicDesign.png";
import presentationicon from "../assets/presentation.png";
import ezicon from "../assets/ezlogo.png";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.formContainer}>
        <Form />
      </div>

      <div className={styles.cardContainer}>
        <Card image={presentationicon} title="Presentation Design" />
        <Card image={audiovisualicon} title="Audio-Visual Production" />
        <Card image={ezicon} title="Translation Services" />
        <Card image={graphicdesignicon} title="Graphic Design" />
        <Card image={researchicon} title="Research & Design" />
        <Card image={dataprocessingicon} title="Data Processing" />
      </div>
    </div>
  );
};

export default Home;
