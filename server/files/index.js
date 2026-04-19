window.onload = function () {
  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    const bodyElement = document.querySelector("body");
    if (xhr.status == 200) {
      const movies = JSON.parse(xhr.responseText);
      movies.forEach(movie => {
        const movieElement = document.createElement("article");
        movieElement.id = movie.imdbID; // Set the id attribute to the imdbID
        const title = document.createElement("h2");
        title.textContent = movie.Title;

        const released = document.createElement("p");
        released.textContent = "Released: " + movie.Released;

        const runtime = document.createElement("p");
        runtime.textContent = "Runtime: " + movie.Runtime + " min";
        
        const genres = document.createElement("div");
        movie.Genres.forEach(genre => {
            const span = document.createElement("span");
            span.textContent = genre;
            span.classList.add("genre");
            genres.appendChild(span);
        });

        const directorsTitle = document.createElement("h3");
        directorsTitle.textContent = "Directors";

        const directors = document.createElement("ul");
        movie.Directors.forEach(director => {
            const li = document.createElement("li");
            li.textContent = director;
            directors.appendChild(li);
        });

        const writersTitle = document.createElement("h3");
        writersTitle.textContent = "Writers";

        const writers = document.createElement("ul");
        movie.Writers.forEach(writer => {
            const li = document.createElement("li");
            li.textContent = writer;
            writers.appendChild(li);
        });

        const actorsTitle = document.createElement("h3");
        actorsTitle.textContent = "Actors";

        const actors = document.createElement("ul");
        movie.Actors.forEach(actor => {
            const li = document.createElement("li");
            li.textContent = actor;
            actors.appendChild(li);
        });

        const plot = document.createElement("p");
        plot.textContent = movie.Plot;

        const poster = document.createElement("img");
        poster.src = movie.Poster;

        const metascore = document.createElement("p");
        metascore.textContent = "Metascore: " + movie.Metascore;

        const imdbRating = document.createElement("p");
        imdbRating.textContent = "IMDb Rating: " + movie.imdbRating;

        
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.onclick = function() {
            location.href = 'edit.html?imdbID=' + movie.imdbID
        };

        const imdbID = document.createElement("p");
        imdbID.textContent = "IMDb ID: " + movie.imdbID;
        

        movieElement.appendChild(title);
        movieElement.appendChild(poster);
        movieElement.appendChild(released);
        movieElement.appendChild(runtime);
        movieElement.appendChild(plot);
        movieElement.appendChild(genres);
        movieElement.appendChild(directorsTitle);
        movieElement.appendChild(directors);
        movieElement.appendChild(writersTitle);
        movieElement.appendChild(writers);
        movieElement.appendChild(actorsTitle);
        movieElement.appendChild(actors);
        movieElement.appendChild(metascore);
        movieElement.appendChild(imdbRating);
        movieElement.appendChild(imdbID);
        movieElement.appendChild(editButton);
        bodyElement.appendChild(movieElement);

      });
    } else {
      bodyElement.append(
        "Daten konnten nicht geladen werden, Status " +
          xhr.status +
          " - " +
          xhr.statusText
      );
    }
  };
  xhr.open("GET", "/movies");
  xhr.send();
};
