import Header from "../components/header";

export default function Home() {
  return (
    <div>
      <Header />
      <h2 className="subtitle">DESCRIPTION ABOUT THE PAGE</h2>
      <p className="subtitleText">
        This is a page where you will find information about different vehicles
        in the automotive world <br />
        <br />
        From regular cars to supercars
        <br />
        <br />
        Below I leave some information about some of the news, in my opinion,
        most relevant today about the motor world.
      </p>
      <h2 className="subtitle">
        THE GREATEST RIVALRY OF TODAY ABOUT ROAD CARS
      </h2>
      <div className="jeskoVSchiron">
        <div className="jeskoVSchironImg">
          <img
            src="/imgs/home/3 - Bugatti Chiron Pur Sport VS Koenigsegg Jesko (front).jpg"
            alt="Photo of a Koenigsegg Jesko VS a Bugatti Chiron"
          />
        </div>
        <div className="jeskoVSchironText">
          <p>
            Bugatti, after breaking the 300 mph barrier in 2019, has taken a
            step further towards extreme luxury with the Chiron line, although
            many wonder if the brand will attempt to break the top speed record
            again. Bugatti, however, has shown a more focused approach on
            exclusivity and luxurious driving experience, highlighting in 2024
            its ability to combine speed and comfort in an incomparable way.
            This leaves Koenigsegg as the most aggressive contender in the
            pursuit of new records.
          </p>
          <p>
            In 2024, the rivalry between the Koenigsegg Jesko and the Bugatti
            Chiron has grown with the expectation of breaking speed records.
            Koenigsegg seeks to surpass 500 km/h with the Jesko Absolut, while
            Bugatti continues to defend its brand after reaching 490 km/h in
            2019 with the Chiron Super Sport 300+. Although Koenigsegg focuses
            on extreme engineering and top speed, Bugatti has bet more on luxury
            and driving experience. This year, the automotive world awaits new
            record attempts that could define the fastest car.
          </p>
        </div>
      </div>
    </div>
  );
}
