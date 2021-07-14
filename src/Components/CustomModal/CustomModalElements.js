import styled from "styled-components";
import Modal from "react-modal";

export const ModalContainer = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ModalInnerContainer = styled.div`
  height: 60%;
  min-height: 400px;
  width: 50%;
  min-width: 900px;
  background-color: black;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const ModalColumn1 = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalColumn2 = styled.div`
  height: 100%;
  width: 50%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 90px;
`;

// export const MyModal = styled.div`
//   height: 80%;
//   width: 50%;
// `;

export const ModalLogoWrapper = styled.div`
  height: 150px;
  width: 500px;
`;

export const ModalLogoImg = styled.img`
  height: 100%;
  width: 100%;
`;

export const ModalTitle = styled.h2`
  color: black;
  font-size: 2rem;
  text-align: center;
`;

export const ModalSubtitle = styled.p`
  color: black;
  font-size: 1.5rem;
  text-align: center;
  padding: 20px 0 80px 0;
`;

export const ModalButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalButton1 = styled.button`
  background-color: white;
  font-size: 1.2rem;
  height: 60px;
  width: 160px;
  border-radius: 40px;
  margin: 0 20px;
  font-weight: 600;

  &:hover {
    color: white;
    background-color: rgba(0, 0, 0);
    transition: 0.2s ease-in-out;
  }
`;

export const ModalButton2 = styled.button`
  background-color: white;
  font-size: 1.2rem;
  height: 60px;
  width: 160px;
  border-radius: 40px;
  margin: 0 20px;
  font-weight: 600;
  &:hover {
    color: white;
    background-color: rgba(0, 0, 0);
    transition: 0.2s ease-in-out;
  }
`;
