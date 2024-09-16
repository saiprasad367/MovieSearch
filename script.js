  document.getElementById('searchButton').addEventListener('click', function() {
            const movieName = document.getElementById('movieInput').value;
            if (movieName) {
                fetch(`https://www.omdbapi.com/?t=${movieName}&apikey=75bac34b`)
                .then(response => response.json())
                .then(data => {
                    if (data.Response === "True") {
                        document.getElementById('imgmovie').innerHTML = `<img src="${data.Poster}" alt="${data.Title} Poster">`;
                        document.getElementById('res').innerHTML = `
                            <h2>${data.Title} (${data.Year})</h2>
                            <p><strong>Genre:</strong> ${data.Genre}</p>
                            <p><strong>Director:</strong> ${data.Director}</p>
                            <p><strong>Language:</strong> ${data.Language}</p>
                            <p><strong>Actors:</strong> ${data.Actors}</p>
                            <p><strong>Awards:</strong> ${data.Awards}</p>
                            <p><strong>Released:</strong> ${data.Released}</p>
                            <p><strong>Runtime:</strong> ${data.Runtime}</p>
                            <p><strong>Ratings:</strong> ${data.imdbRating}</p>
                        `;
                    } else {
                        document.getElementById('res').innerHTML = '<h2>Movie not found!</h2>';
                    }
                })
                .catch(error => {
                    document.getElementById('res').innerHTML = '<h2>Error fetching data!</h2>';
                    console.error(error);
                });
            } else {
                document.getElementById('res').innerHTML = '<h2>Please enter a movie name!</h2>';
            }
        });
