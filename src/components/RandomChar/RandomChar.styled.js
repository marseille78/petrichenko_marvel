import styled from "styled-components";

export const Self = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 50%);
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.25);
`;

export const Block = styled.div`
    padding: 40px 35px;
    display: grid;
    grid-template-columns: 180px auto;
    column-gap: 30px;
`;

export const Image = styled.img`
    width: 180px;
    height: 180px;
    object-fit: cover;
`;
