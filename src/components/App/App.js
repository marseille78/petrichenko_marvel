import { Component } from "react";

import CharInfo from "../CharInfo";
import CharList from "../CharList";
import RandomChar from "../RandomChar";

import { Content, Self } from "./App.styled";
import ErrorBoundary from "../ErrorBoundary";

class App extends Component {
    state = {
        selectedId: null,
    };

    onChangeSelected = (id) => {
        this.setState({
            selectedId: id,
        });
    };

    render() {
        const { selectedId } = this.state;

        return (
            <Self>
                <main>
                    <ErrorBoundary>
                        <RandomChar />
                    </ErrorBoundary>
                    <Content>
                        <ErrorBoundary>
                            <CharList
                                onChangeSelected={this.onChangeSelected}
                            />
                        </ErrorBoundary>
                        <CharInfo selectedId={selectedId} />
                    </Content>
                    {/* <img className="bg-decoration" src={decoration} alt="vision" /> */}
                </main>
            </Self>
        );
    }
}

export default App;
