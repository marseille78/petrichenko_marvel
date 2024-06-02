import { Component } from "react";

import Spinner from "../Spinner";
import ErrorMessage from "../ErrorMessage";

import { Grid, Item, List, Name } from "./CharList.styled";

import { marvelService } from "../../services/MarvelService";

class CharList extends Component {
    state = {
        charList: [],
        loading: false,
        error: false,
    };

    componentDidMount = () => {
        this.onUpdateState();
    };

    onUpdateState = () => {
        this.setState({
            loading: true,
        });

        marvelService
            .getAllCharacters()
            .then((charList) => {
                this.setState({
                    charList,
                });
            })
            .catch((err) => {
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
        const { charList, loading, error } = this.state;
        const { onChangeSelected } = this.props;

        const spinner = loading ? <Spinner /> : null;
        const errorLoading = error ? <ErrorMessage /> : null;
        const content = !(loading || error) ? (
            <View charList={charList} onChangeSelected={onChangeSelected} />
        ) : null;

        return (
            <List>
                <Grid>
                    {spinner}
                    {errorLoading}
                    {content}
                </Grid>
                <button className="button button__main button__long">
                    <div className="inner">load more</div>
                </button>
            </List>
        );
    }
}

const View = ({ charList, onChangeSelected }) => {
    return charList.map(({ id, thumbnail, name }) => {
        return (
            <Item key={id} onClick={() => onChangeSelected(id)}>
                <img src={thumbnail} alt={name} />
                <Name>{name}</Name>
            </Item>
        );
    });
};

export default CharList;
