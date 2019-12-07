// endpoint
axios
  .get('https://api.thecatapi.com/v1/images/search?size=full')
  .then((res) => {
    const unDato = res.data[0];

    document
      .getElementById('foto')
      .src = unDato.url;
  })