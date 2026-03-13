<script>
  import logo from './assets/Cyclo-Terre-alpha Arnaud et Youri.jpeg';
  import pdfUrl from './assets/eco-booster.pdf';

  let name = 'Cyclo-Terre';
</script>

<main>
  <h1>{name}</h1>
  <p>La machine agricole légère à propulsion humaine conçue pour les petites exploitations.</p>
  
  <div class="image-container">
    <img src={logo} alt="Cyclo-Terre Logo" />
  </div>

  <div class="pdf-container">
    <iframe src={pdfUrl} title="Eco-Booster PDF" width="100%" height="800px"></iframe>
  </div>
</main>

<footer>
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

  .pdf-container {
    margin-top: 40px;
    width: 100%;
    height: 800px;
    border: 1px solid #ccc;
    border-radius: 8px;
    overflow: hidden;
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
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
