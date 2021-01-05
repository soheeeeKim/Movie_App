import React from "react";
import axios from "axios";
import Movie from "./21_01_06_Movie";
import "./App.css";

//class component
class App extends React.Component{
  //return은 없고 render method가 있다.
  //react는 자동적으로 모든 class component의 render method를 실행한다
  //render제외, 모든 멤버들은 ;로 마무리

  render(){
    const {isLoading, movies} = this.state;  

    //map은 항상 무언가를 return 해야 한다.
    //각각 child는 유일한 key prop을 가져야 한다
    return (<section className = "container">
      {isLoading?(
        <div className = "loader">  
          <span className = "loader_text">Loading...</span>
        </div>
      ):(
        <div className = "movies">
          {movies.map(movie=>(
            <Movie
              key = {movie.id}
              id = {movie.id}
              year = {movie.year}
              title = {movie.title}
              summary = {movie.summary}
              poster = {movie.medium_cover_image}
              genres = {movie.genres}
            />
          ))}
        </div>
      )}
    </section>);
  }
  state = {
      isLoading: true,
      movies: []
  };
  //비동기 함수. await를 사용하면 끝날 때 까지 기다려야 함. 이 때 async 필수 사용
  getMovies = async() =>{

    //신기한 문법
    const {
      data:{
        data:{movies}
      }
    } = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json");

    this.setState({movies:movies, isLoading:false}); //state의 일부 요소만 갱신 가능
  };
  componentDidMount(){
    this.getMovies();
  }
}
//axios와 fetch
export default App;
