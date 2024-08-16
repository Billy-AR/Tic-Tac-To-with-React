import CoreConcepts from "./components/CoreConcepts.jsx";
import Header from "./components/Header/Header.jsx";
import Example from "./components/Examples.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Example />
      </main>
    </>
  );
}

export default App;
