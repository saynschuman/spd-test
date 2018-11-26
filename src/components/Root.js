import React from "react";
import { set } from "../api";

export default () => {
  return (
    <div>
      <button onClick={() => set("123", "123")}>Click</button>
    </div>
  );
};
