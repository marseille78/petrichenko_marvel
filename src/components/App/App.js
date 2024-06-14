import { useState } from "react";

import CharInfo from "../CharInfo";
import CharList from "../CharList";
import RandomChar from "../RandomChar";

import { Content, Self } from "./App.styled";
import ErrorBoundary from "../ErrorBoundary";

const App = () => {
    const [selectedId, setSelectedId] = useState(null);

    const onChangeSelected = (id) => {
        setSelectedId(id);
    };

    return (
        <Self>
            <main>
                <ErrorBoundary>
                    <RandomChar />
                </ErrorBoundary>
                <Content>
                    <ErrorBoundary>
                        <CharList
                            onChangeSelected={onChangeSelected}
                        />
                    </ErrorBoundary>
                    <CharInfo selectedId={selectedId} />
                </Content>
                {/* <img className="bg-decoration" src={decoration} alt="vision" /> */}
            </main>
        </Self>
    );
}

export default App;
