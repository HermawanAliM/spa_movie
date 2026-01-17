const _API_KEY = "2d6bf6f728ea4e2396e693955c586415";
const _BASE_URL =  "https://api.themoviedb.org/3";

// Ambil movie yang populer di Indonesia 
export const getPopulerMovies = async () => {
  const result = await fetch(`${_BASE_URL}/movie/popular?api_key=${_API_KEY}&language=id-ID&region=ID`);
  return result.json();
}

// Mencari film yang diinginkan
export const searchMovie = async (query) => {
  const result = await fetch(
    `${_BASE_URL}/search/movie?api_key=${_API_KEY}&query=${query}`
  );
  return result.json();
};

// Menampilkan detail dari informasi film yang dimaksud
export const getMovieDetail = async (id) => {
  const result = await fetch(
    `${_BASE_URL}/movie/${id}?api_key=${_API_KEY}`
  );
  return result.json();
};