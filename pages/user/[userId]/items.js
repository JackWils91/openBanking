import React from "react";
import styles from "../styles/Home.module.css";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import { ItemList, Landing, Sockets } from "../../../components";

export default function Home() {
  toast.configure({
    autoClose: 8000,
    draggable: false,
    toastClassName: "box toast__background",
    bodyClassName: "toast__body",
    hideProgressBar: true,
  });
  return (
    <div className={styles.container}>
      <Sockets />
      <ItemList />
    </div>
  );
}
