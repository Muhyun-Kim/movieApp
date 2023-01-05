import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Info from "../components/Info";

function Detail() {
  const [moviesInfo, setMoviesInfo] = useState();
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
    <div>
    </div>
  );
}
export default Detail;
