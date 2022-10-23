import './App.css';
import { useEffect, useState, useMemo } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import About from './Page/About';
import Home from './Page/Home';
import ChartResize from './Page/ChartResize';
import GridLayout from './Page/GridLayout';
import DashboardDragAndDrop from '../src/Component/DahboardDragAndDrop';
import Dragpage from './Page/DragPage';

type PokemenInterfaceProps = {
  sprites?: any;
  name?: any;
  results: any
};

function App() {

  const [pokemon, setPokemon] = useState<PokemenInterfaceProps>();
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?offset=0")
      .then((res) => res.json())
      .then((data) => {
        const results = data.results.map((pokemon: any, idx: any) => {
          return { ...pokemon, idx: idx + 1 };
        });
        setPokemon({ ...data, results });
      });
  }, [])

  useMemo(() => {
    if (text.length === 0) {
      setFilteredPokemon([]);
      return;
    }
    const filter = pokemon?.results?.filter((pokemon: any) => pokemon?.name?.includes(text));
    setFilteredPokemon(filter);
  }, [pokemon?.results, text])


  return (
    <BrowserRouter>
      <div className="p-14">
        <div className='flex flex-col items-center'>
          <Link to='/'>
            <header className='text-4xl text-yellow-700'>Pokemon Picker</header>
          </Link>
          <Link to='/cobaresize'>
            <span className='border-l-pink-800 text-blue-500'>test chart js resize</span>
          </Link>
          <Link to='/gridlayout'>
            <span className='border-l-pink-800 text-red-500'>grid layout</span>
          </Link>
          <Link to='/drag'>
            <span className='border-l-pink-800 text-yellow-500'>drag test</span>
          </Link>
          <Link to='/drag-component'>
            <span className='border-l-pink-800 text-yellow-500'>drag pake component</span>
          </Link>
        </div>
      </div>

      <Routes>
        <Route path='/' element={<Home pokemons={filteredPokemon} setText={setText} />} />
        <Route path='/about/:slug' element={<About />} />
        <Route path='/cobaresize' element={<ChartResize />} />
        <Route path='/gridlayout' element={<GridLayout />} />
        <Route path='/drag' element={<DashboardDragAndDrop />} />
        <Route path='/drag-component' element={<Dragpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
