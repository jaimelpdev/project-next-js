import Header from "../components/header";

export default function Home() {
  return (
    <div>
      <Header />
      <h2 className="subtitulo">DESCRIPCIÓN SOBRE LA PÁGINA</h2>
      <p className="textoSubtitulo">
        Ésta es una página donde encontraras información sobre los diferentes
        vehículos del mundo automotriz <br />
        <br />
        Desde coches normales, hasta coches superdeportivos
        <br />
        <br />
        Debajo dejo un poco de información sobre unas de las noticias, a mi
        parecer, más relevantes de hoy en día sobre el mundo del motor.
      </p>
      <h2 className="subtitulo">
        LA MAYOR RIVALIDAD DE LA ACTUALIDAD SOBRE COCHES DE CARRETERA
      </h2>
      <div className="jeskoVSchiron">
        <div className="jeskoVSchironImg">
          <img
            src="/imgs/inicio/3 - Bugatti Chiron Pur Sport VS Koenigsegg Jesko (front).jpg"
            alt="Foto de un Koenigsegg Jesko VS un Bugatti Chiron"
          />
        </div>
        <div className="jeskoVSchironTexto">
          <p>
            Bugatti, tras haber roto las 300 mph en 2019, ha dado un paso más
            hacia el lujo extremo con la línea Chiron, aunque muchos se
            preguntan si la marca intentará romper nuevamente el récord de
            velocidad máxima. Bugatti, sin embargo, ha mostrado un enfoque más
            centrado en la exclusividad y la experiencia de conducción lujosa,
            destacando en 2024 su capacidad para combinar velocidad y confort de
            manera incomparable. Esto deja a Koenigsegg como el contendiente más
            agresivo en la búsqueda de nuevos récords.
          </p>
          <p>
            En 2024, la rivalidad entre el Koenigsegg Jesko y el Bugatti Chiron
            ha crecido con la expectativa de romper récords de velocidad.
            Koenigsegg busca superar los 500 km/h con el Jesko Absolut, mientras
            que Bugatti sigue defendiendo su marca tras haber alcanzado 490 km/h
            en 2019 con el Chiron Super Sport 300+. Aunque Koenigsegg se enfoca
            en la ingeniería extrema y velocidad máxima, Bugatti ha apostado más
            por el lujo y la experiencia de conducción. Este año, el mundo
            automotriz espera nuevos intentos de récords que podrían definir al
            coche más rápido.
          </p>{" "}
        </div>
      </div>
    </div>
  );
}
