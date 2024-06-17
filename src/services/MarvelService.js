import { useHttp } from "../hooks/http.hook";

const useMarvelService = () => {
    const { loading, request, error, clearError } = useHttp();

    const _baseUrl = "https://gateway.marvel.com:443/v1/public/";
    const _apiKey = "apikey=c552d8166361bc02cc00be38bce93003";
    const _baseOffset = 0;

    const getAllCharacters = async (offset = _baseOffset) => {
        const res = await request(
            `${_baseUrl}characters?${_apiKey}&limit=9&offset=${offset}`
        );
        return res.data.results.map(_transformChar);
    };

    const getCharacterById = async (id) => {
        const res = await request(`${_baseUrl}characters/${id}?${_apiKey}`);
        return _transformChar(res.data.results[0]);
    };

    const _transformChar = ({
        name,
        description,
        thumbnail,
        urls,
        id,
        comics,
    }) => {
        const checkedDescription =
            description.trim().length > 0
                ? description.length > 100
                    ? description.slice(0, 100) + "..."
                    : description
                : "Description not found";

        return {
            id,
            name,
            description: checkedDescription,
            thumbnail: `${thumbnail.path}.${thumbnail.extension}`,
            homepage: urls[0].url,
            wiki: urls[1].url,
            comics: comics.items,
        };
    };

    return { loading, error, getAllCharacters, getCharacterById, clearError };
};

export default useMarvelService;
