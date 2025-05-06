import styled from "styled-components";

const TitlePersonajes = styled.h2`
font-size: 35px;
font-weight: 700;
color: #1c1d31;
background-color: #7178b3;
display: flex;
justify-content: center;

`;
const SectionPersonajes = styled.section`
background-color: #7178b3;
padding: 0 10px;
font-size: 1.20rem;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
gap: 30px;

`;

const CartPersonajes = styled.article`
  width: 25rem;
  height: 30rem;
  background: #171717;
  transition: 1s ease-in-out;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
`;

const CartTitle = styled.h2`
  color: white;
  text-align: center;
  display: block;
  font-size: ${props => props.primary === "principal" ? "26px" : "22px"};
  font-weight: ${props => props.primary === "principal" ? "900" : "700"};
`;

const CartInfo = styled.p`
font-weight: 400;
  color: white;
  display: block;
  text-align: center;
  font-size: 14px;
  margin: 18px;
`;

const CartImg = styled.img`
  width: 15rem;
  height: 15rem;
  background: white;
  border-radius: 15px;
  margin: auto;
`;



export { TitlePersonajes, 
         SectionPersonajes,
         CartPersonajes,
         CartTitle,
         CartInfo,
         CartImg,
        }