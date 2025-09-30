import { useState } from "react";

export default function useToggle(defaultValue = false) {
  const [value, setValue] = useState(defaultValue);
  const toggle = () => setValue((value) => !value);

  return [value, toggle, setValue];
}
