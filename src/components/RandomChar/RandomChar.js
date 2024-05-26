import { Component } from "react";
import mjolnir from "../../resources/img/mjolnir.png";
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
import { marvelService } from "../../services/MarvelService";

class RandomChar extends Component {
    constructor(props) {
        super(props);

        this.updateChar();
    }

    state = {
        char: {},
    };

    onCharLoaded = (char) => {
        this.setState({ char });
    };

    updateChar = () => {
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);

        marvelService.getCharacterById(id).then(this.onCharLoaded);
    };

    render() {
        const {
            char: { name, description, thumbnail, homepage, wiki },
        } = this.state;

        return (
            <Self data-cmp="RandomChar">
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
                <Static>
                    <Title>
                        Random character for today!
                        <br />
                        Do you want to get to know him better?
                    </Title>
                    <Title>Or choose another one</Title>
                    <button className="button button__main">
                        <div className="inner">try it</div>
                    </button>
                    <Decoration src={mjolnir} alt="mjolnir" />
                </Static>
            </Self>
        );
    }
}

export default RandomChar;
