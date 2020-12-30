import './App.css';
import Categories from './Components/Categories';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import request from './request'
import Banner from './Components/Banner';
import Navbar from './Components/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/> 
      <Categories title = "NETFLIX ORIGINALS" fetchUrl = {request.fetchNetflixOriginals}/>
      <Categories title = "TRENDING MOVIES" fetchUrl = {request.fetchTrending}/>
      <Categories title = "TOP RATED MOVIES" fetchUrl = {request.fetchTopRated}/>
      <Categories title = "ACTION MOVIES" fetchUrl = {request.fetchActionMovies}/>
      <Categories title = "COMEDY MOVIES" fetchUrl = {request.fetchComedyMovies}/>
      <Categories title = "HORROR MOVIES" fetchUrl = {request.fetchHorrorMovies}/>
      <Categories title = "ROMANTIC MOVIES" fetchUrl = {request.fetchRomanticMovies}/>
      <Categories title = "DOCUMENTARIES" fetchUrl = {request.fetchDocumentaries}/>
    </div>
  );
}

export default App;
