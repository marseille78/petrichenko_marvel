import { Self } from "./ErrorMessage.styled";

import error from "./error.gif";

const ErrorMessage = () => {
    return (
        <Self data-cmp="ErrorMessage">
            <img src={error} alt="Error" />
        </Self>
    );
};

export default ErrorMessage;
