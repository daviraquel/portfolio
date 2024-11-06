import styled from "styled-components";

export const CarrouselContainer = styled.div`
  .react-3d-carousel {
    margin-top: 2rem;
  }
  .slider-single-content {
    box-shadow: 0px 0px 0px !important;
  }

  .slider-right i,
  .slider-left i {
    color: ${(props) => props.theme.colors.primary};
    transition: all 0.2s ease-in-out;
    transform: scale(1.2);
  }
  .slider-right:hover i,
  .slider-left:hover i {
    color: ${(props) => props.theme.colors.secondary};
    transform: scale(1.5);
  }

  .slider-right div,
  .slider-left div {
    border: 0px !important;
  }
  @media (max-width: 500px) {
    .slider-right,
    .slider-left {
      display: none !important;
    }
  }
`;

export const CardContainer = styled.article`
  height: 340px;
  min-width: 250px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 1rem;
  position: relative;
  transition: all 0.2s ease-in-out;

  :hover {
    transform: scale(1.1);
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.3em;
    height: 70%;
    width: 100%;
    background-color: ${(props) => props.theme.colors.blurredGray};
    position: absolute;
    bottom: 0;
    border-radius: 0 0 1rem 1rem;
  }

  p {
    margin: 0;
    font-size: ${(props) => props.theme.fontSize.pMobile};
    padding: 0 0.5rem;
  }

  .techs {
    background-color: transparent;
    display: flex;
    flex-direction: row;
    gap: 5px;
    position: absolute;
    align-items: center;
    justify-content: center;
    width: 100%;
    bottom: 5px;
    z-index: 999;
  }

  .techIcons {
    width: 40px;
  }
`;
