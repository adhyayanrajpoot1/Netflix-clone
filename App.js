import Row from './Row';
import './App.css';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';
function App() {
  return (
   
    <div className="App">
      <Nav/>
      <Banner/>
      <Row title={"NETFLIX ORIGINALS"} fetchUrl = {requests.fetchNetflixOriginals} isLargeRow></Row>
      <Row title={"Trending"} fetchUrl = {requests.fetchTrending}></Row>
      <Row title={"Top Rated"} fetchUrl = {requests.fetchTopRated}></Row>
      <Row title={"Action"} fetchUrl = {requests.fetchActionMovies}></Row>
      <Row title={"Comedy "} fetchUrl = {requests.fetchComedyMovies}></Row>
      <Row title={"Horror"} fetchUrl = {requests.fetchHorrorMovies}></Row>
      <Row title={"Romantic"} fetchUrl = {requests.fetchRomanceMovies}></Row>
      <Row title={"Documentary"} fetchUrl = {requests.fetchDocumentaries}></Row>


    </div>
  );
}

export default App;
