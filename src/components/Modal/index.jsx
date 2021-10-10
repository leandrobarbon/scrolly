import { useState, useEffect } from "react";

import { Overlay, Content, CloseIcon } from "./styles";

export const Modal = ({ modalOpen, onCloseModal }) => {
  function handleCloseModal(event) {
    const classList = Array.from(event.target.classList);

    const clickedOutsideModal = classList.includes("modal-overlay");

    if (clickedOutsideModal) {
      onCloseModal();
    }
  }

  return (
    <Overlay  modalOpen={modalOpen} className="modal-overlay" onClick={handleCloseModal}>
      <Content modalOpen={modalOpen}>
        <CloseIcon onClick={onCloseModal}>X</CloseIcon>
        Aqui dentro do modal
      </Content>
    </Overlay>
  );
};
