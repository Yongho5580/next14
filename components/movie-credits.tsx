import { API_URL } from '../app/(home)/page';
import styles from '../styles/movie-credits.module.css';

async function getMovieCredits(id: string) {
  const response = await fetch(`${API_URL}/${id}/credits`);
  return response.json();
}

export default async function MovieCredits({ id }: { id: string }) {
  const credits = await getMovieCredits(id);

  return (
    <div className={styles.container}>
      {credits.map((credit) => (
        <div className={styles.profile}>
          <img
            className={styles.photo}
            src={credit.profile_path}
            alt={credit.name}
          />
          <h2 className={styles.name}>{credit.name}</h2>
          <h3>{credit.character}</h3>
        </div>
      ))}
    </div>
  );
}
