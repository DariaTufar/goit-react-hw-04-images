import styled from 'styled-components';

export const ModalLargeImage = styled.img`
  position: absolute;
  top: 10%;
  left: 20%;
  width: 60%;
  height: 60%;
  object-fit: contain;
  z-index: 1100;
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8); `