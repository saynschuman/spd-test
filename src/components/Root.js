import React from "react";
import "../api/config";
import { set } from "../api";
export default () => {
  return (
    <div>
      <button onClick={() => set("key", "key")}>Click</button>
    </div>
  );
};
