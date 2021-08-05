
import './App.css';
import Row from './Row'
import requests from './Request'
import Banner from './Banner'
import Nav from './Nav'

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner/>
      <Row title="NETFLIX TRENDING" fetcurl = {requests.fetchNetflixOriginal} isLargeRow />
      <Row title = "TRENDING" fetcurl = {requests.fetchTrending} />
      <Row title = "TOP RATED" fetcurl = {requests.fetchTopRated} />
      <Row title = "ACTION " fetcurl = {requests.fetchActionMovies} />
      <Row title = "COMEDY" fetcurl = {requests.fetchComedyMovies} />
      <Row title = "HORROR" fetcurl = {requests.fetchHorrorMovies} />
      <Row title = "ROMANCE" fetcurl = {requests.fetchRomanceMovies} />
      <Row title = "DOCUMENTARY" fetcurl = {requests.fetchDoumentary} />
      
    </div>
  );
}

export default App;
