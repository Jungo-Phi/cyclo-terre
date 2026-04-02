<script>
  import photo_arnaud_youri_url from './assets/Cyclo-Terre Arnaud et Youri.jpeg';
  import photo_cyclo_terre from './assets/porte-vélo.jpeg';
  import description_projet_url from './assets/description_projet.png';
  import points_cles_url from './assets/points-cles.png';
  let name = 'Cyclo-Terre';
</script>

<main>
  <h1>{name}</h1>
  <p>La machine agricole légère à propulsion humaine conçue pour les petites exploitations.</p>
  <div class="image-container">
    <img src={photo_arnaud_youri_url} alt="Arnaud et Youri devant le 1er prototype de Cyclo-Terre" />
  </div>
  <div class="image-container">
    <img src={description_projet_url} alt="Description projet Cyclo-Terre" />
  </div>
  <div class="image-container">
    <img src={points_cles_url} alt="Points clés Cyclo-Terre" />
  </div>
  <div class="image-container">
    <img src={photo_cyclo_terre} alt="Cyclo-Terre portant un vélo" />
  </div>
</main>

<footer>
  <p>Le projet Cyclo-Terre est issu d'une collaboration entre Arnaud Jungo et Youri Vezza.</p>
  <p>Contact : <a href="mailto:contact@cyclo-terre.ch">contact@cyclo-terre.ch</a></p>
</footer>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 800px;
    margin: 0 auto;
  }

  .image-container {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
    flex-wrap: wrap;
  }

  img {
    max-width: 80%;
    height: auto;
    border-radius: 8px;
  }

  h1 {
    color: #f50187;
    font-size: 4em;
    font-weight: 'bold';
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }

  footer {
    background-color: #f8f9fa;
    padding: 20px;
    text-align: center;
    background-color: rgb(255, 221, 240);
  }

  footer a {
    color: #f50187;
    text-decoration: none;
  }

  footer a:hover {
    text-decoration: underline;
  }
</style>
