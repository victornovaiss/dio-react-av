import './App.css';
import Profile from './Components/Profile/Profile';
import Repos from './Components/Repos/Repos';
import SearchBar from './Components/SearchBar/SeachBar';
import SearchProvider from './Context/SearchContext';

function App() {
  return (
    <>
      <SearchProvider>
        <SearchBar />
        <Profile />
        <Repos />
      </SearchProvider>
    </>
  );
}

export default App;
