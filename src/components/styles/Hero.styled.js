import styled from "styled-components";

export const StyledHero = styled.div`
    background-color: hsl(217, 19%, 24%);
    width: 450px;
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 5%;
    transform: translate(-50%, -50%);
    box-shadow: 20px 10px 30px 8px #0000001a;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 426px) {
        height: 270px;
        width: 360px;
        justify-content: flex-start;
    }

    
`