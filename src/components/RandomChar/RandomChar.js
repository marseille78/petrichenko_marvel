import { Component } from "react";

import Spinner from "../Spinner";
import ErrorMessage from "../ErrorMessage";

import {
    Block,
    Btns,
    Decoration,
    Descr,
    Image,
    Info,
    Name,
    Self,
    Static,
    Title,
} from "./RandomChar.styled";

import mjolnir from "../../resources/img/mjolnir.png";

import { marvelService } from "../../services/MarvelService";

class RandomChar extends Component {
    state = {
        char: {},
        loading: false,
        error: false,
    };

    onCharLoaded = (char) => {
        this.setState({
            char,
            loading: false,
        });
    };

    onSpinnerStart = () => {
        this.setState({
            loading: true,
        });
    };

    onSetError = () => {
        this.setState({
            error: true,
            loading: false,
        });
    };

    updateChar = () => {
        this.onSpinnerStart();

        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);

        marvelService
            .getCharacterById(id)
            .then(this.onCharLoaded)
            .catch(this.onSetError);
    };

    componentDidMount = () => {
        this.updateChar();
    };

    render() {
        const { loading, error, char } = this.state;

        const spinner = loading ? <Spinner /> : null;
        const errorMessage = error ? <ErrorMessage /> : null;
        const content = !(loading || error) ? <View char={char} /> : null;

        return (
            <Self data-cmp="RandomChar">
                {spinner}
                {errorMessage}
                {content}

                <Static>
                    <Title>
                        Random character for today!
                        <br />
                        Do you want to get to know him better?
                    </Title>
                    <Title>Or choose another one</Title>
                    <button
                        className="button button__main"
                        onClick={this.updateChar}
                    >
                        <div className="inner">try it</div>
                    </button>
                    <Decoration src={mjolnir} alt="mjolnir" />
                </Static>
            </Self>
        );
    }
}

const View = ({ char: { name, description, thumbnail, homepage, wiki } }) => {
    return (
        <Block>
            <Image src={thumbnail} alt="Random character" />
            <Info>
                <Name>{name}</Name>
                <Descr>{description}</Descr>
                <Btns>
                    <a href={homepage} className="button button__main">
                        <div className="inner">homepage</div>
                    </a>
                    <a href={wiki} className="button button__secondary">
                        <div className="inner">Wiki</div>
                    </a>
                </Btns>
            </Info>
        </Block>
    );
};

export default RandomChar;
