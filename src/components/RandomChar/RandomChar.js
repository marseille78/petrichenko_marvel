import thor from "../../resources/img/thor.jpeg";
import mjolnir from "../../resources/img/mjolnir.png";
import { Block, Image, Self } from "./RandomChar.styled";

const RandomChar = () => {
    return (
        <Self data-cmp="RandomChar">
            <Block>
                <Image src={thor} alt="Random character" />
                <div className="randomchar__info">
                    <p className="randomchar__name">Thor</p>
                    <p className="randomchar__descr">
                        As the Norse God of thunder and lightning, Thor wields
                        one of the greatest weapons ever made, the enchanted
                        hammer Mjolnir. While others have described Thor as an
                        over-muscled, oafish imbecile, he's quite smart and
                        compassionate...
                    </p>
                    <div className="randomchar__btns">
                        <a href="!#" className="button button__main">
                            <div className="inner">homepage</div>
                        </a>
                        <a href="!#" className="button button__secondary">
                            <div className="inner">Wiki</div>
                        </a>
                    </div>
                </div>
            </Block>
            <div className="randomchar__static">
                <p className="randomchar__title">
                    Random character for today!
                    <br />
                    Do you want to get to know him better?
                </p>
                <p className="randomchar__title">Or choose another one</p>
                <button className="button button__main">
                    <div className="inner">try it</div>
                </button>
                <img
                    src={mjolnir}
                    alt="mjolnir"
                    className="randomchar__decoration"
                />
            </div>
        </Self>
    );
};

export default RandomChar;
