import { useEffect, useState } from "react";
import { trpc } from "./utils/trpc.client";

function App() {
  const [result, setResult] = useState<number[]>([]);
  useEffect(() => {
    trpc.find.query().then((result) => {
      setResult(result);
    });
  }, []);
  return <div>{result}</div>;
}

export default App;
