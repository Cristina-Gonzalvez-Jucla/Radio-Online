import './App.css';
import { RadioList } from './components/RadioList';
import { Reproductor } from './components/Reproductor';
import { Search } from './components/Search';
import React, {useState, useEffect} from 'react';
import { Selector } from './components/Selector';

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [url, setUrl] = useState("");  
  //const  [searchBarCont, setSearchBarCont] = useState("")

  const play = (url) => {
    setUrl(url);
  }

  const updateResults = (searchBarCont) => {
    console.log('val', searchBarCont)
    const filterResult = data.filter((radio) => {
      const name = radio.name.toLowerCase();
      return name.includes(searchBarCont.toLowerCase());
    })
    setFilteredData(filterResult)
  }

  useEffect(() => {
    fetch('http://91.132.145.114/json/stations?limit=10')
      .then(response => response.json())
      .then(json => {
        setData(json);
      })
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    setFilteredData(data);
  },[data]);  

  return (
    <>
      <Search onChange={updateResults} />
      <Selector></Selector>
      <Reproductor url={url}></Reproductor>
      <RadioList play={play} list={filteredData} />
    </>
  );
}

export default App;
