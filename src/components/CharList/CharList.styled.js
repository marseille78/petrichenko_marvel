import styled from "styled-components";

export const List = styled.div``;

export const Grid = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 200px);
    column-gap: 25px;
    row-gap: 30px;
`;

export const Item = styled.li`
    width: 200px;
    height: 318px;
    background-color: var(--dark);
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
    padding: 15px;
    cursor: pointer;
    transition: 0.3s transform;

    img {
        width: 200px;
        height: 200px;
        object-fit: cover;
    }

    &.selected {
        box-shadow: 0 5px 20px var(--main-color);
        transform: translateY(-8px);
    }
`;

export const Name = styled.div`
    font-weight: bold;
    font-size: 22px;
    line-height: 29px;
    text-transform: uppercase;
    color: #fff;
    padding: 8px 16px;
`;
