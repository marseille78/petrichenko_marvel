class MarvelService {
    _baseUrl = "https://gateway.marvel.com:443/v1/public/";
    _apiKey = "apikey=c552d8166361bc02cc00be38bce93003";

    getResource = async (url) => {
        const res = await fetch(url);
        
        if (!res.ok) {
            throw new Error(`Could nont fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    getAllCharacters = async () => {
        return await this.getResource(`${this._baseUrl}characters?${this._apiKey}`);
    }

    getCharacterById = async (id) => {
        const res = await this.getResource(`${this._baseUrl}characters/${id}?${this._apiKey}`);
        const {name, description, thumbnail, urls} = res.data.results[0];
        return this._transformChar({
            name,
            description,
            thumbnail: `${thumbnail.path}.${thumbnail.extension}`,
            homepage: urls[0].url,
            wiki: urls[1].url,
        });
    }

    _transformChar = (char) => {
        return char;
    }
}

export const marvelService = new MarvelService();