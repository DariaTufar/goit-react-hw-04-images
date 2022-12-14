import styled from 'styled-components';

export const GalleryItem = styled.li`
  position: relative;
  padding-top: 60%;
  box-shadow: ${p => p.theme.shadows.galleryItem};
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  :hover {
  transform: scale(1.03);
  cursor: zoom-in;}
`;
