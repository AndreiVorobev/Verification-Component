import ConfirmSvg from "./assets";
import { Button } from "./components/Button/Button";

function App() {
  const foo = () => {
    console.log("hi");
  };
  return (
    <div className="App">
      <Button onClick={foo} title="Следующий шаг" reverse>
        <ConfirmSvg />
      </Button>
    </div>
  );
}

export default App;
