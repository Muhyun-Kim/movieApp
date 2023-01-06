import { useState, useEffect } from "react";
import Movie from "../components/Movie";
import "bootstrap/dist/css/bootstrap.css";
import styles from "../css/Home.module.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
      )
    ).json();
    console.log(json);
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      <div className={styles.container}>
        {loading ? (
          <div className={styles.loading}>
            <span>Loading...</span>
          </div>
        ) : (
          <div className={styles.all}>
            <div className={styles.pageName}>
              <h1>現在流行りの映画TOP20</h1>
            </div>
            <div  className={styles.movies}>
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
              />
            ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
