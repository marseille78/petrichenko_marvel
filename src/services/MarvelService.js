export default class MarvelService {
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
        return await this.getResource(`${this._baseUrl}${id}?${this._apiKey}`);
    }
}