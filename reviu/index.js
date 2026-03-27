const movieInput = document.getElementById("inputMovie");
const descInput = document.getElementById("description");
const saveBtn = document.querySelector(".btn-save");
const deleteAllBtn = document.querySelector(".btn-delete");
const count = document.getElementById("movieCount");
const list = document.getElementById("movieList");

let movies = JSON.parse(localStorage.getItem("movies")) || [];

function displayMovie() {
  list.innerHTML = "";
  movies.forEach(function (movie) {
    let li = document.createElement("li");
    li.innerHTML = `
      <b>Tên phim : ${movie.title}</b> 
      <small>Ghi chú :${movie.desc}</small>
      <button onclick="deleteMovie(${movie.id})"> X Xóa</button>
    `;

    list.appendChild(li);
  });
  count.innerText = movies.length;
}
saveBtn.addEventListener("click", function () {
  let title = movieInput.value.trim();
  let desc = descInput.value.trim();
  if (title === "") {
    alert("Nhập tên phim!");
    return;
  }
  let movie = {
    id: Date.now(),
    title: title,
    desc: desc,
  };
  movies.push(movie);
  localStorage.setItem("movies", JSON.stringify(movies));
  displayMovie();
  movieInput.value = "";
  descInput.value = "";
});
function deleteMovie(id) {
  movies = movies.filter(function (movie) {
    return movie.id !== id;
  });

  localStorage.setItem("movies", JSON.stringify(movies));
  displayMovie();
}
deleteAllBtn.addEventListener("click", function () {
  movies = [];
  localStorage.clear("movies");
  displayMovie();
});
displayMovie();
