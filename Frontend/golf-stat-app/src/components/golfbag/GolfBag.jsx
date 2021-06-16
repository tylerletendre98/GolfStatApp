import "./golfBag.css";

const GolfBag = (props) => {
  return (
    <div>
      <div>
        <h3>Golfbag:</h3>
      </div>
      {props.player.golfBag.map((club) => {
        return (
          <div className="golfbag">
            <div>
              <p>Driver: {club.driver}</p>
            </div>
            <div>
              <p>Three Wood: {club.threeWood}</p>
            </div>
            <div>
              <p>Three Hybrid: {club.threeHybrid}</p>
            </div>
            <div>
              <p>Iron Set:{club.ironSet}</p>
            </div>
            <div>
              <p>Wedges:{club.wedges}</p>
            </div>
            <div>
              <p>Putter: {club.putter}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GolfBag;
