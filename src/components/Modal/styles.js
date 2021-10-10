import styled, {
   css
} from "styled-components";

const showModal = css ` 
  visibility: visible;
  transform: scale(1);
`;

const closeModal = css `
  opacity: 0;
  visibility: hidden;
  transform: scale(0);
`;

export const Overlay = styled.div ` 
  opacity: 0.7;
  
  width: 100vw;
  height: 100vh;
  opacity: 0.7;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
 
  transition: all 0.3s ease;

  ${({modalOpen}) => modalOpen ? showModal : closeModal}
`;

export const Content = styled.div `
  background: #444;
  position: relative;
 color: white;
  width: 500px;
  height: 500px;
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  ${({modalOpen}) => modalOpen ? showModal : closeModal}
`;

export const CloseIcon = styled.div `
  position: absolute;
  top: 40px;
  right: 40px;
  cursor: pointer;
`;