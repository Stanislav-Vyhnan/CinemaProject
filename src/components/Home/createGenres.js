export default function createGenres(genresArr) {
  const genres = [];
  genresArr.forEach(el =>
    genres.push(...el.genre.replace(/[ ]/g, '').split(',')),
  );
  return [...new Set(genres)].sort();
}
