import { useEffect } from "react";

function CustomUseEffect(Count) {
  return useEffect(() => {
    console.log(`State of Count is changes ${Count} times.`);
    document.title = ` Count ${Count}`;
  }, [Count]);
}

export default CustomUseEffect;
