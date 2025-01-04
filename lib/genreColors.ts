export const genreColors: Record<string, string> = {
    Fiction: "#FF5733",   // Orange
    Fantasy: "#8E44AD",   // Purple
    Mystery: "#3498DB",   // Blue
    Romance: "#E74C3C",   // Red
    Thriller: "#2ECC71",  // Green
    Science: "#F1C40F",   // Yellow
    Adventure: "#16A085", // Teal
  };
  
  export const getGenreColor = (genre: string): string => {
    // Use predefined color or generate a random one
    return (
      genreColors[genre] ||
      `#${Math.floor(Math.random() * 16777215).toString(16)}`
    );
  };
  