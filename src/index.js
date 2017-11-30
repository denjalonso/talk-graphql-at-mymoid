import React from 'react';
import { render } from "react-dom";

import Presentation from "./example";

const root = document.getElementById('root');

render(<Presentation/>, root);

if (module.hot) {
    if (module.hot) {
        module.hot.accept();
    }
}