const tilesWrapper = document.getElementById("tiles");
const audioWrapper = document.getElementById("audio");

audioFiles.forEach((file, index) => {
  const audio = document.createElement("audio");
  audio.id = "audio" + index;
  audio.preload = "auto";
  audio.volume = file[3] || 1;
  audio.innerHTML = `<source src="${file[2]}" type="audio/mpeg" />`;
  audioWrapper.appendChild(audio);

  const title = document.createElement("span");
  title.className = "title";
  title.innerText = file[1]

  const author = document.createElement("span");
  author.className = "author";
  author.innerText = file[0];

  const tile = document.createElement("button");
  tile.appendChild(title);
  tile.appendChild(author);
  tile.onclick = () => {
    audio.play();
    return false;
  };
  tilesWrapper.appendChild(tile);
});
