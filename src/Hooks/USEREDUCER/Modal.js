import React, { useEffect } from "react";

const Modal = ({ modalContent, closeModal }) => {
  useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 3000);
  });
  return (
    <div
      style={{
        backgroundColor: "white",
        color: "red",
        padding: "6px",
        width: "200px",
        marginInline: "auto",
        textAlign: "center",
      }}
    >
      <p>{modalContent}</p>
    </div>
  );
};

export default Modal;
