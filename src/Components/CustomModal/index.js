import React from "react";
import {
  ModalContainer,
  ModalInnerContainer,
  ModalTitle,
  ModalSubtitle,
  ModalButtonsContainer,
  ModalButton1,
  ModalButton2,
  ModalColumn1,
  ModalColumn2,
  ModalLogoWrapper,
  ModalLogoImg,
} from "./CustomModalElements";
import logo from "../../asset/white_logo_transparent_background.png";

const CustomModal = ({ isOpen, title, subtitle, label1, label2, onClick1, onClick2 }) => {
  return (
    <>
      {isOpen ? (
        <ModalContainer>
          <ModalInnerContainer>
            <ModalColumn1>
              <ModalLogoWrapper>
                <ModalLogoImg src={logo} />
              </ModalLogoWrapper>
            </ModalColumn1>
            <ModalColumn2>
              <ModalTitle>{title}</ModalTitle>
              <ModalSubtitle>{subtitle}</ModalSubtitle>
              <ModalButtonsContainer>
                {label1 !== undefined ? <ModalButton1 onClick={onClick1}>{label1}</ModalButton1> : null}
                {label2 !== undefined ? <ModalButton2 onClick={onClick2}>{label2}</ModalButton2> : null}
              </ModalButtonsContainer>
            </ModalColumn2>
          </ModalInnerContainer>
        </ModalContainer>
      ) : null}
    </>
  );
};

export default CustomModal;
