import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Info from "../components/Info";

function Detail() {
  const [moviesInfo, setMoviesInfo] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setMoviesInfo(json.data.movie);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div className="Detail">
      {moviesInfo.map((movieInfo) => (
        <Info
          key={movieInfo.id}
          title={movieInfo.title_long}
          img={movieInfo.large_cover_image}
          download_count={movieInfo.download_count}
          language={movieInfo.language}
          description_full={movieInfo.description_full}
        />
      ))}
    </div>
  );
}
export default Detail;
