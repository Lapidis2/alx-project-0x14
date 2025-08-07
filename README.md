## API Overview
The TMDB API provides rich data access across movies, TV shows, actors, and images. It supports powerful search and discovery features, including filtering by genre, release date, language, and more. The API enables seamless retrieval of configuration data (e.g., image base URLs, supported languages), metadata, and associated media like posters and trailers. 
## Version
The documentation corresponds to version 3 of the TMDB API.

## Available Endpoints
Here’s a summary of key endpoints commonly used:

GET /movie/{movie_id} — Fetch details like title, overview, release date, etc. Supports appending extra responses such as videos. 
Reddit
The Movie Database (TMDB)

GET /discover/movie — Search and filter movies with advanced options . search by genre, release date, language, and more.
GET /search/movie — Search for movies by title or keywords. Supports filtering by language and year 
The Movie Database (TMDB)

Other Endpoints:
Under the broader TMDB API, you can also retrieve data on actors, TV shows, account details, and images. 

## Request and Response Format
Request Structure is Typically a RESTful GET with query params, e.g.:
https://api.themoviedb.org/3/movie/343611?api_key=YOUR_KEY&append_to_response=videos

Response Structure: JSON including fields like id, title, overview, videos (populated when append_to_response is used).
it comes as objects with fields like id, title, overview, and videos (when append_to_response is used).
