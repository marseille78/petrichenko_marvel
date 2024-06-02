import { Component } from "react";

import Spinner from "../Spinner";
import ErrorMessage from "../ErrorMessage";
import Skeleton from "../Skeleton";

import {
    Basics,
    Btns,
    Comics,
    Descr,
    Item,
    List,
    Name,
    Self,
} from "./CharInfo.styled";

import { marvelService } from "../../services/MarvelService";

const View = ({
    char: { name, homepage, wiki, thumbnail, description, comics },
}) => {
    return (
        <>
            <Basics>
                <img src={thumbnail} alt={name} />
                <div>
                    <Name>{name}</Name>
                    <Btns>
                        <a href={homepage} className="button button__main">
                            <div className="inner">homepage</div>
                        </a>
                        <a href={wiki} className="button button__secondary">
                            <div className="inner">Wiki</div>
                        </a>
                    </Btns>
                </div>
            </Basics>
            <Descr>{description}</Descr>
            <ComicsList comicsList={comics} />
        </>
    );
};

const ComicsList = ({ comicsList = [] }) => {
    return (
        <>
            <Comics>Comics:</Comics>
            <List>
                {comicsList.map((item, idx) => (
                    <Item key={idx}>{item.name}</Item>
                ))}
            </List>
        </>
    );
};

class CharInfo extends Component {
    state = {
        char: null,
        loading: false,
        error: false,
    };

    componentDidUpdate = (prevProps, prev) => {
        if (prevProps.selectedId !== this.props.selectedId) {
            this.onSetChar(this.props.selectedId);
        }
    };

    onSetChar = (id) => {
        this.setState({
            loading: true,
        });

        marvelService
            .getCharacterById(id)
            .then((char) => {
                this.setState({
                    char,
                });
            })
            .catch((res) => {
                this.setState({
                    error: true,
                });
            })
            .finally(() => {
                this.setState({
                    loading: false,
                });
            });
    };

    render() {
        const { char, loading, error } = this.state;

        const skeleton = char || loading || error ? null : <Skeleton />;
        const spinner = loading ? <Spinner /> : null;
        const errorLoading = error ? <ErrorMessage /> : null;
        const content = !(loading || error || !char) ? (
            <View char={char} />
        ) : null;

        return (
            <Self data-cmp="CharInfo">
                {skeleton}
                {spinner}
                {errorLoading}
                {content}
            </Self>
        );
    }
}

export default CharInfo;
