export default function createGenres(genresArr) {
  const genres = genresArr.map(el => [el.genre, el.id]);
  return [...new Map(genres)];
}
