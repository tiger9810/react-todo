import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Todo } from "./Todo";

// id="root"の要素を取得
const rootElement = document.getElementById("root");

// createRoot関数で先ほど取得したrootElementを渡す
const root = createRoot(rootElement);


root.render(
  <StrictMode>
    <Todo />
  </StrictMode>
);