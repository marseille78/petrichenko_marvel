import { useEffect, useState } from "react";

import Spinner from "../Spinner";
import ErrorMessage from "../ErrorMessage";

import { Grid, Item, List, Name } from "./CharList.styled";

import { marvelService } from "../../services/MarvelService";

const CharList = ({ onChangeSelected }) => {
    const [charList, setCharList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [offset, setOffset] = useState(0);
    const [loadingNewItem, setLoadingNewItem] = useState(false);
    const [activeChar, setActiveChar] = useState(null);

    useEffect(() => {
        onUpdateState();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onUpdateState = () => {
        onLoadingNewItems();

        marvelService
            .getAllCharacters(offset)
            .then(getItems)
            .catch(handleError)
            .finally(finishLoading);
    };

    const onLoadingNewItems = () => {
        setLoadingNewItem(true);
    };

    const getItems = (currentCharList) => {
        setCharList((charList) => [...charList, ...currentCharList]);
        setOffset((offset) => offset + 9);
        setLoadingNewItem(false);
    };

    const finishLoading = () => {
        setLoading(false);
    };

    const handleError = () => {
        setError(true);
    };

    const setSelectedItem = (id) => {
        setActiveChar(id);
        onChangeSelected(id);
    };

    const spinner = loading ? <Spinner /> : null;
    const errorLoading = error ? <ErrorMessage /> : null;
    const content = !(loading || error) ? (
        <View
            charList={charList}
            onChangeSelected={setSelectedItem}
            activeChar={activeChar}
        />
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
                onClick={() => onUpdateState(offset)}
                disabled={loadingNewItem ? true : false}
            >
                <div className="inner">load more</div>
            </button>
        </List>
    );
};

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
