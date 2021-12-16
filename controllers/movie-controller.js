const request = require("request");
const uuid = require("uuid");

const OMDB_API = "http://www.omdbapi.com/";
const API_KEY = "&apikey=" + process.env.API_KEY;

const getMoviesByTitle = async (req, res, next) => {
    const movieName = req.params.movieName;
    const searchStringURL = OMDB_API + "?s=" + movieName + API_KEY;

    request(searchStringURL, (error, response, body) => {
        let movies;

        if (!error && response.statusCode == 200) {
            let bodyJson = JSON.parse(body);
            if ("Search" in bodyJson) {
                movies = bodyJson["Search"];
                // add alternative image if movie poster does not exist
                movies.map(movie => {
                    if (movie.Poster === "N/A") {
                        movie.Poster = "http://cdn.onlinewebfonts.com/svg/img_546302.png";
                    };
                    
                    return movie;
                });
            }
        }
        
        res.json({movies});
    })
}

const getMovieByID = async (req, res, next) => {

    const imdbID = req.params.imdbID;
    const searchStringURL = OMDB_API + "?i=" + imdbID + "&plot=full" + API_KEY;
    request(searchStringURL, (error, response, body) => {
        let movie;

        if (!error && response.statusCode == 200) {
            movie = JSON.parse(body);
            if (movie.Poster === "N/A") {
                movie.Poster = "http://cdn.onlinewebfonts.com/svg/img_546302.png";
            };
        }
        
        res.json({movie});
    })
}

exports.getMoviesByTitle = getMoviesByTitle;
exports.getMovieByID = getMovieByID;