import styles from "../css/Info.module.css"

function Info({ title, img, download_count, language, description_full }) {
  return (
    <div className={styles.movie_info}>
      <h1>{title}</h1>
      <img src={img} />
      <p>ダウンロード数：{download_count}</p>
      <p>言語：{language}</p>
      <p>粗筋</p>
      <p>{description_full}</p>
    </div>
  );
}

export default Info;
