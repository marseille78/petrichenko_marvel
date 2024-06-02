import styled from "styled-components";

export const Self = styled.div`
    padding: 25px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
    position: relative;
    z-index: 5;
    background-color: #fff;
`;

export const Name = styled.div`
    font-weight: bold;
    font-size: 22px;
    line-height: 29px;
    text-transform: uppercase;

    .skeleton {
        margin-top: 30px;
    }
`;

export const Basics = styled.div`
    display: grid;
    grid-template-columns: 150px auto;
    column-gap: 25px;

    img {
        width: 150px;
        height: 150px;
        object-fit: cover;
    }
`;

export const Btns = styled.div`
    margin-top: 35px;

    a:nth-child(2) {
        margin-top: 10px;
    }
`;

export const Descr = styled.div`
    margin-top: 15px;
    font-size: 14px;
    line-height: 18px;
`;

export const Comics = styled.div`
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    margin-top: 10px;
`;

export const List = styled.ul`
    position: relative;
    margin-top: 10px;
`;

export const Item = styled.li`
    width: 100%;
    padding: 0px 10px;
    line-height: 25px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-top: 10px;
`;
