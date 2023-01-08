import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Info from "../components/Info";
import styles from "../css/Detail.module.css";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [moviesInfo, setMoviesInfo] = useState();
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setMoviesInfo(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      <div className={styles.container}>
        {loading ? (
          <div className={styles.loading}>
            <span>Loading...</span>
          </div>
        ) : (
          <Info
            title={moviesInfo.title}
            img={moviesInfo.medium_cover_image}
            download_count={moviesInfo.download_count}
            language={moviesInfo.language}
            description_full={moviesInfo.description_full}
          />
        )}
      </div>
    </div>
  );
}
export default Detail;
