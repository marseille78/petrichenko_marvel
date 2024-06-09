import styled from "styled-components";

export const Self = styled.div`
    width: 1100px;
    margin: 0 auto;
    padding: 50px 0 50px 0;
    position: relative;

    ul,
    li,
    dl {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin: 0;
    }

    a {
        text-decoration: none;
        color: inherit;
        display: inline-block;

        &:hover {
            text-decoration: none;
            color: inherit;
        }
    }

    p {
        margin: 0;
        padding: 0;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    .bg-decoration {
        position: absolute;
        right: -174px;
        bottom: -70px;
        z-index: -1;
    }

    main {
        margin-top: 50px;
        position: relative;
    }

    .pulse {
        animation: pulse 1.5s ease-in-out 0.5s infinite;
    }

    @keyframes pulse {
        0% {
            opacity: 1;
        }
        50% {
            opacity: 0.4;
        }
        100% {
            opacity: 1;
        }
    }

    /* Button */

    .button {
        min-width: 101px;
        color: #fff;
        text-align: center;
        text-transform: uppercase;
        font-size: 14px;
        transition: 0.3s transform;
        border: none;
        background-color: transparent;
        cursor: pointer;

        &__long {
            display: block;
            width: 170px;
            margin: 45px auto 0 auto;
        }
        .inner {
            position: relative;
            background-color: var(--main-color);
            line-height: 18px;
            padding: 0 18px;
            transition: none;

            &::before {
                border-color: var(--main-color) transparent;
                border-style: solid;
                border-width: 0 0 10px 10px;
                content: "";
                display: block;
                position: absolute;
                left: 0;
                top: -10px;
                transition: none;
            }
            &::after {
                border-color: var(--main-color) transparent;
                border-style: solid;
                border-width: 0 0 10px 10px;
                content: "";
                display: block;
                position: absolute;
                right: 0;
                bottom: -10px;
                transform: rotate(180deg);
                transition: none;
            }
        }
        &__main,
        &__secondary {
            &:hover {
                color: #fff;
            }
        }
        &__secondary {
            .inner {
                background-color: var(--grey);
                &::before {
                    border-color: var(--grey) transparent;
                    transition: none;
                }
                &::after {
                    border-color: var(--grey) transparent;
                    transition: none;
                }
            }
        }
        &::before {
            content: "";
            display: block;
            height: 10px;
            margin-left: 10px;
            transition: none;
        }
        &::after {
            content: "";
            display: block;
            height: 10px;
            margin-right: 10px;
            transition: none;
        }
        &.button__main::before,
        &.button__main::after {
            background-color: var(--main-color);
        }
        &.button__secondary::before,
        &.button__secondary::after {
            background-color: var(--grey);
        }
        &:hover {
            transform: translateY(-5px);
        }

        &:disabled .inner,
        &.button__main:disabled::before,
        &.button__main:disabled::after {
            background-color: var(--grey);
        }

        &:disabled .inner::before,
        &:disabled .inner::after {
            border-color: var(--grey) transparent;
        }
    }
`;

export const Content = styled.div`
    margin-top: 50px;
    display: grid;
    grid-template-columns: 650px 425px;
    column-gap: 25px;
    align-items: start;
`;
