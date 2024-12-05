import Nav from "./components/Nav";
import Home from "./components/Home";
function App() {
  return (
    <div className="w-full h-screen bg-[url('assets\kangaroo.jpg')] bg-cover bg-center p-[1px]">
      <Nav />
      <Home />
    </div>
  );
}

export default App;
