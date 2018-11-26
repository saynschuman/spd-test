import React from "react";
import "../api/config";
import { remove } from "../api";
export default () => {
  return (
    <div>
      <button onClick={() => remove("key")}>Click</button>
    </div>
  );
};
