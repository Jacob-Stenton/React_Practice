import Button from "./components/Button";

function App() {
  return (
    <div>
      <Button color="danger" onClick={() => console.log("click")}>
        Hello World
      </Button>
    </div>
  );
}
export default App;
