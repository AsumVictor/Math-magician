import Calculator from './components/Calculator';
import Quotes from './components/Quotes';

function App() {
  return (
    <div className="w-full flex flex-col lg:flex-row justify-center items-center py-10 min-h-screen">
      <div className="w-full lg:w-1/2 flex flex-col items-center h-screen sticky top-10">
        <h2 className="text-center text-2xl font-bold">Calculator</h2>
        <Calculator />
      </div>
      <div className="w-full lg:w-1/2 py-1 px-2 h-screen">
        <Quotes />
      </div>
    </div>
  );
}

export default App;
