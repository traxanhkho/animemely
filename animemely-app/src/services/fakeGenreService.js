export const genres = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "Tình cảm" },
  { _id: "5b21ca3eeb7f6fbccd471814", name: "Hành động" },
  { _id: "5b21ca3eeb7f6fbccd471820", name: "Hài hước" }
];

export function getGenres() {
  return genres.filter(g => g);
}

