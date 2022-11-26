
function App() {
  return (
    <div className="layout">
        {/* Cabecera */}
        <header className="header">
            <div className="logo">
                <div className="play"></div>
            </div>
            <h1>MisPelis</h1>
        </header>

        {/* Barra de navegacion */}
        <nav className="nav">
            <ul>
                <li><a href="/#">Inicio</a></li>
                <li><a href="/#">Peliculas</a></li>
                <li><a href="/#">Blog</a></li>
                <li><a href="/#">Contacto</a></li>
            </ul>
        </nav>

        {/* Contenido principal*/}
        <section className="content">
            {/* Aqui van las peliculas*/}
            <article className="movie-item">
                <h3 className="title">Desarrollo mobile</h3>
                <p className="description">carlosburuel.com.mx</p>

                <button className="edit">Editar</button>
                <button className="delete">Borrar</button>
            </article>

            <article className="movie-item">
                <h3 className="title">Desarrollo mobile</h3>
                <p className="description">carlosburuel.com.mx</p>

                <button className="edit">Editar</button>
                <button className="delete">Borrar</button>
            </article>

            <article className="movie-item">
                <h3 className="title">Desarrollo mobile</h3>
                <p className="description">carlosburuel.com.mx</p>

                <button className="edit">Editar</button>
                <button className="delete">Borrar</button>
            </article>

            <article className="movie-item">
                <h3 className="title">Desarrollo mobile</h3>
                <p className="description">carlosburuel.com.mx</p>

                <button className="edit">Editar</button>
                <button className="delete">Borrar</button>
            </article>
        </section>

        {/* Barra lateral */}
        <aside className="lateral">
            <div className="search">
                <h3 className="title">Buscador</h3>
                <form>
                    <input type="text" />
                    <button>Buscar</button>
                </form>
            </div>

            <div className="add">
                <h3 className="title">Añadir pelicula</h3>
                <form>
                    <input type="text" placeholder="Titulo"/>
                    <textarea placeholder="Descripcion"></textarea>
                    <input type="submit" value="Guardar" />
                </form>
            </div>
        </aside>

        {/* Pie de pagina */}
        <footer className="footer">
            &copy; Proyecto no. 1 con Javascript <a href="/#">carlosburuel.com.mx</a>
        </footer>
    </div>
  );
}

export default App;
