import { Component } from "react";

import Spinner from "../Spinner";
import ErrorMessage from "../ErrorMessage";

import { Grid, Item, List, Name } from "./CharList.styled";

import { marvelService } from "../../services/MarvelService";

class CharList extends Component {
    state = {
        charList: [],
        loading: true,
        error: false,
        offset: 0,
        loadingNewItem: false,
        activeChar: null,
    };

    componentDidMount = () => {
        this.onUpdateState();
    };

    onUpdateState = () => {
        this.onLoadingNewItems();

        marvelService
            .getAllCharacters(this.state.offset)
            .then(this.getItems)
            .catch(this.handleError)
            .finally(this.finishLoading);
    };

    onLoadingNewItems = () => {
        this.setState({
            loadingNewItem: true,
        });
    };

    getItems = (currentCharList) => {
        this.setState(({ charList, offset }) => {
            return {
                charList: [...charList, ...currentCharList],
                offset: offset + 9,
                loadingNewItem: false,
            };
        });
    };

    finishLoading = () => {
        this.setState({
            loading: false,
        });
    };

    handleError = (err) => {
        this.setState({
            error: true,
        });
    };

    setSelectedItem = (id) => {
        this.setState({
            activeChar: id,
        });
        this.props.onChangeSelected(id);
    }

    render() {
        const { charList, loading, error, offset, loadingNewItem, activeChar } = this.state;

        const spinner = loading ? <Spinner /> : null;
        const errorLoading = error ? <ErrorMessage /> : null;
        const content = !(loading || error) ? (
            <View charList={charList} onChangeSelected={this.setSelectedItem} activeChar={activeChar} />
        ) : null;

        return (
            <List>
                <Grid>
                    {spinner}
                    {errorLoading}
                    {content}
                </Grid>
                <button
                    className="button button__main button__long"
                    onClick={() => this.onUpdateState(offset)}
                    disabled={loadingNewItem ? true : false}
                >
                    <div className="inner">load more</div>
                </button>
            </List>
        );
    }
}

const View = ({ charList, onChangeSelected, activeChar }) => {
    return charList.map(({ id, thumbnail, name }) => {
        return (
            <Item
                key={id}
                className={activeChar === id ? "selected" : null}
                onClick={() => onChangeSelected(id)}
            >
                <img src={thumbnail} alt={name} />
                <Name>{name}</Name>
            </Item>
        );
    });
};

export default CharList;
