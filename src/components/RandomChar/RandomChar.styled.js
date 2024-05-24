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

export const Info = styled.div`
    display: grid;
    grid-template-rows: minmax(29px, auto) 90px 38px;
    row-gap: 10px;
    padding-top: 3px;
`;

export const Name = styled.p`
    font-weight: bold;
    font-size: 22px;
    line-height: 29px;
    text-transform: uppercase;
`;

export const Descr = styled.p`
    font-size: 14px;
    line-height: 18px;
`;

export const Btns = styled.div`
    a:nth-child(1) {
        margin-right: 30px;
    }
`;

export const Static = styled.div`
    padding: 40px 35px;
    background-color: $dark;
    position: relative;

    button {
        margin-top: 13px;
    }
`;

export const Title = styled.p`
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: -0.045em;
    color: #ffffff;
    
    &:nth-child(2) {
        margin-top: 33px;
    }
`;

export const Decoration = styled.img`
    position: absolute;
    bottom: 14px;
    right: -37px;
`;
