import "./home.css";

const Home = () => {
  return (
    <div className="homepage">
      <div className="container">
        <div className="row">
          <img
            src="https://redhawkgolfandresort.com/wp-content/uploads/2017/05/Pro-Shop-banner.jpg"
            alt=""
            height="175px"
          />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div>
            <h2>About the app</h2>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col">
            <div className="info-column">
              <div className="info">
                <div className="info-title">
                  <h4>Features:</h4>
                </div>
                <div className="info-body">
                  <ul>
                    <li>
                      You can add your golfbag to your player profile in the
                      player page
                    </li>
                    <li>
                      You can add friends to your friends list to what kind of
                      scores your friends are putting up!
                    </li>
                    <li>
                      You can add rounds to your profile by going to the add a
                      round page and either playing at one of our courses in our
                      database or using the default one where you will have to
                      manually enter in the course information
                    </li>
                    <li>
                      Once you have entered in rounds into your profile head on
                      over to the player data page an see your rounds
                      represented in bar graph form giving you that better
                      visual representation of the difference in youre round
                      total
                    </li>
                    <li>
                      If you go over to the explore courses page you'll be able
                      to see the current courses we have avaiable in our app
                      meaning you can use in the scorecard page!
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div className="info">
              <div className="info-title">
                <h4>Whats to come in the future!</h4>
              </div>
              <div className="info-body">
                <ul>
                  <li>
                    More in depth stats like putts per hole, fairways hits
                  </li>
                  <li>
                    Adding more courses to our database that way you can use or
                    more interactive scorecard that autofills course data and
                    interactive scoring
                  </li>
                  <li>
                    Being able to join a club that is within our database and be
                    able to see other members that are apart of your club
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
