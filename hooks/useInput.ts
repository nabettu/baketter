import { useState } from "react";

export const useInput = initialValue => {
  const [value, set] = useState(initialValue);
  return { value, onChange: e => set(e.target.value) };
};
