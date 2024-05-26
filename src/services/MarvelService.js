class MarvelService {
    _baseUrl = "https://gateway.marvel.com:443/v1/public/";
    _apiKey = "apikey=c552d8166361bc02cc00be38bce93003";

    getResource = async (url) => {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could nont fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    };

    getAllCharacters = async () => {
        const res = await this.getResource(
            `${this._baseUrl}characters?${this._apiKey}`
        );
        return res.data.results.map(this._transformChar);
    };

    getCharacterById = async (id) => {
        const res = await this.getResource(
            // `${this._baseUrl}characters/${1017100}?${this._apiKey}`
            `${this._baseUrl}characters/${id}?${this._apiKey}`
        );
        return this._transformChar(res.data.results[0]);
    };

    _transformChar = ({ name, description, thumbnail, urls }) => {
        const checkedDescription =
            description.trim().length > 0
                ? description.length > 100
                    ? description.slice(0, 100) + "..."
                    : description
                : "Description not found";

        return {
            name,
            description: checkedDescription,
            thumbnail: `${thumbnail.path}.${thumbnail.extension}`,
            homepage: urls[0].url,
            wiki: urls[1].url,
        };
    };
}

export const marvelService = new MarvelService();
