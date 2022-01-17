export default function createGenres(genresArr) {
  const genres = [];
  genresArr.forEach(el =>
    genres.push(...el.genres.replace(/[ ]/g, '').split(',')),
  );
  return [...new Set(genres)].sort();
}
