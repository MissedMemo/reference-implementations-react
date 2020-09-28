import React from "react";
import { render } from "react-dom";
import App from "./app";

import "./app.sass";

render(<App greeting="Hello, React!" />, document.getElementById("root"));
