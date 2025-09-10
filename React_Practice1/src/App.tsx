import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisable, setAlertVisable] = useState(false);

  return (
    <div>
      {alertVisable && (
        <Alert onClose={() => setAlertVisable(false)}>My Alert</Alert>
      )}
      <Button color="danger" onClick={() => setAlertVisable(true)}>
        Hello World
      </Button>
    </div>
  );
}
export default App;
