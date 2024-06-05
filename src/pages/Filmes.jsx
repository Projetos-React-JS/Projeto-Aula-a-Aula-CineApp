import { useState } from "react";

function Filmes() {

    const [filmes, setFilmes] = useState([])

        fetch('https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e')
        .then(response => response.json())
        .then(response => setFilmes(response.results))
        .catch (error => console.log(error))
    return ( 
        <>
        <h1>Filmes</h1>
        <div className="listaFilmes">
            {
                filmes.map(
                    filme => (
                        <div className="card-filme" key={filme.id}>
                            <h1>{filme.title}</h1>
                            <img src={`https://image.tmdb.org/t/p/w342/${filme.backdrop_path}`}/>
                            <p>{filme.overview}</p>
                        </div>
            
                    )
                )
            }
           
        </div>
        </>

     );
}

export default Filmes ;