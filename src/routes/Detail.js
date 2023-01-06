import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Info from "../components/Info";

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
      {loading ? (
        <h1>Loading...</h1>
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
  );
}
export default Detail;
