const mapDBToModelPlaylist = (dataFromDB) => {
  const playlist = {
    id: dataFromDB[0].id,
    name: dataFromDB[0].name,
    songs: [],
  };

  dataFromDB.forEach((el) => {
    const song = {
      id: el.song_id,
      title: el.title,
      performer: el.performer,
    };

    playlist.songs.push(song);
  });

  return playlist;
};

module.exports = mapDBToModelPlaylist;
