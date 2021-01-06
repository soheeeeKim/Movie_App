import React from "react";
import PropTypes from "prop-types";
import {Link } from "react-router-dom";
import "./Movie.css";

//state가 필요하지 않으면 class component대신 function component 이용
//map함수 내의 item들(li)은 key가 필요하다
//map함수는 현재의 아이템과, 그 아이템의 번호를 준다
function Movie({ id, year, title, summary, poster, genres}){
    return (
        
         <div className = "movie">
            <Link to={{
            pathname: `/movie/${id}`,
            state: {
                year,title,summary,poster,genres
            }
        }}> 
                <img src = {poster} alt = {title} title = {title}/>
            <div className = "movie_data">
                <h3 className = "movie_title">{title}</h3>
                <h5 className = "movie_year">{year}</h5>    
                <ul className = "movie_genres">
                    {genres.map((genre,index)=>(
                        <li key = {index} className = "genres_genre">{genre}</li>
                    ))}
                </ul>
                <p className = "movie_summary">{summary.slice(0,180)}...</p>
                
            </div>
               </Link>
        </div>
     
       
    );
}

//들어온 구조체의 멤버들에 대해 타입 검사
Movie.propTypes = {
    id : PropTypes.number.isRequired,
    year : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;
