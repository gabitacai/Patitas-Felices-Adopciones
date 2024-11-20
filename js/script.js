document.getElementById("header").innerHTML = `
<header id=header>
      <div class="container">
        <a href="index.html"
          ><img src="img/favicon.PNG" alt="logo gato y perro juntos"
        /></a>
        <p class="logo-texto">Patitas Felices</p>
        <nav>
          <a href="productos.html">Productos</a>
          <a href="form.html">Formulario de Adopción</a>
          <a href="login.html">Iniciar sesión</a>
          <a href="registro.html">Resgistro</a>
        </nav>
      </div>
    </header>
`;
document.getElementById("footer").innerHTML = `
<footer id=footer>
      <div class="container">
        <h4>Seguinos en nuestras redes:</h4>
        <div class="footer-links">
          <a href="error404.html" class="fa fa-instagram"></a>
          <a href="#" class="fa fa-facebook"></a>
          <a href="#" class="fa fa-whatsapp"></a>
        </div>
        <p>&copy; Patitas Felices 2024</p>
      </div>
    </footer>
    `;