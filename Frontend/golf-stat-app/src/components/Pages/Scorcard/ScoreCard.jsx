import { useState } from "react";
import "./scoreCard.css";

const ScoreCard = (props) => {
  const [roundTotal, setRoundTotal] = useState(0);
  const [holeOneScore, setHoleOneScore] = useState(0);
  const [holeTwoScore, setHoleTwoScore] = useState(0);
  const [holeThreeScore, setHoleThreeScore] = useState(0);
  const [holeFourScore, setHoleFourScore] = useState(0);
  const [holeFiveScore, setHoleFiveScore] = useState(0);
  const [holeSixScore, setHoleSixScore] = useState(0);
  const [holeSevenScore, setHoleSevenScore] = useState(0);
  const [holeEightScore, setHoleEightScore] = useState(0);
  const [holeNineScore, setHoleNineScore] = useState(0);
  const [holeTenScore, setHoleTenScore] = useState(0);
  const [holeElevenScore, setHoleElevenScore] = useState(0);
  const [holeTwelveScore, setHoleTwelveScore] = useState(0);
  const [holeThirteenScore, setHoleThirteenScore] = useState(0);
  const [holeFourteenScore, setHoleFourteenScore] = useState(0);
  const [holeFifteenScore, setHoleFifteenScore] = useState(0);
  const [holeSixteenScore, setHoleSixteenScore] = useState(0);
  const [holeSeventeenScore, setHoleSeventeenScore] = useState(0);
  const [holeEighteenScore, setHoleEighteenScore] = useState(0);
  const [courseName, setCourseName] = useState("");
  const [coursePar, setCoursePar] = useState(0);

  const handleHoleOne = (e) => {
    setHoleOneScore(e.target.value);
  };
  const handleHoleTwo = (e) => {
    setHoleTwoScore(e.target.value);
  };
  const handleHoleThree = (e) => {
    setHoleThreeScore(e.target.value);
  };
  const handleHoleFour = (e) => {
    setHoleFourScore(e.target.value);
  };
  const handleHoleFive = (e) => {
    setHoleFiveScore(e.target.value);
  };
  const handleHoleSix = (e) => {
    setHoleSixScore(e.target.value);
  };
  const handleHoleSeven = (e) => {
    setHoleSevenScore(e.target.value);
  };
  const handleHoleEight = (e) => {
    setHoleEightScore(e.target.value);
  };
  const handleHoleNine = (e) => {
    setHoleNineScore(e.target.value);
  };
  const handleHoleTen = (e) => {
    setHoleTenScore(e.target.value);
  };
  const handleHoleEleven = (e) => {
    setHoleElevenScore(e.target.value);
  };
  const handleHoleTwelve = (e) => {
    setHoleTwelveScore(e.target.value);
  };
  const handleHoleThirteen = (e) => {
    setHoleThirteenScore(e.target.value);
  };
  const handleHoleFourteen = (e) => {
    setHoleFourteenScore(e.target.value);
  };
  const handleHoleFifteen = (e) => {
    setHoleFifteenScore(e.target.value);
  };
  const handleHoleSixteen = (e) => {
    setHoleSixteenScore(e.target.value);
  };
  const handleHoleSeventeen = (e) => {
    setHoleSeventeenScore(e.target.value);
  };
  const handleHoleEighteen = (e) => {
    setHoleEighteenScore(e.target.value);
  };
  const handleRoundTotal = (e) => {
    setRoundTotal(e.target.value);
  };
  const handleCourseName = (e) => {
    setCourseName(e.target.value);
  };
  const handleCoursePar = (e) => {
    setCoursePar(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRound = {
      courseName: courseName,
      coursePar: coursePar,
      holeOne: holeOneScore,
      holeTwo: holeTwoScore,
      holeThree: holeThreeScore,
      holeFour: holeFourScore,
      holeFive: holeFiveScore,
      holeSix: holeSixScore,
      holeSeven: holeSevenScore,
      holeEight: holeEightScore,
      holeNine: holeNineScore,
      holeTen: holeTenScore,
      holeEleven: holeElevenScore,
      holeTwelve: holeTwelveScore,
      holeThirteen: holeThirteenScore,
      holeFourteen: holeFourteenScore,
      holeFifteen: holeFifteenScore,
      holeSixteen: holeSixteenScore,
      holeSeventeen: holeSeventeenScore,
      holeEighteen: holeEighteenScore,
      roundTotal: roundTotal,
    };
    setHoleOneScore();
    setHoleTwoScore();
    setHoleThreeScore();
    setHoleFourScore();
    setHoleFiveScore();
    setHoleSixScore();
    setHoleSevenScore();
    setHoleEightScore();
    setHoleNineScore();
    setHoleTenScore();
    setHoleElevenScore();
    setHoleTwelveScore();
    setHoleThreeScore();
    setHoleThirteenScore();
    setHoleFourScore();
    setHoleFifteenScore();
    setHoleSixteenScore();
    setHoleSeventeenScore();
    setHoleEighteenScore();
    props.addARoundToGolfer(newRound);
    alert("Successfully added round");
    // window.location = "/player";
  };
  return (
    <div>
      <div>
        <h3>Scorecard</h3>
      </div>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Course name:</label>
          <input
            type="text"
            name=""
            id=""
            placeholder="enter course name"
            onChange={handleCourseName}
          />
        </div>
        <div>
          <label htmlFor="">Course Par:</label>
          <input
            type="number"
            name=""
            id=""
            placeholder="enter course par"
            onChange={handleCoursePar}
          />
        </div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Golfer</th>
              <th scope="col">Hole 1</th>
              <th scope="col">Hole 2</th>
              <th scope="col">Hole 3</th>
              <th scope="col">Hole 4</th>
              <th scope="col">Hole 5</th>
              <th scope="col">Hole 6</th>
              <th scope="col">Hole 7</th>
              <th scope="col">Hole 8</th>
              <th scope="col">Hole 9</th>
              <th scope="col">Hole 10</th>
              <th scope="col">Hole 11</th>
              <th scope="col">Hole 12</th>
              <th scope="col">Hole 13</th>
              <th scope="col">Hole 14</th>
              <th scope="col">Hole 15</th>
              <th scope="col">Hole 16</th>
              <th scope="col">Hole 17</th>
              <th scope="col">Hole 18</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">{props.player.name}</th>
              <td>
                <input
                  type="number"
                  name=""
                  id=""
                  width="10px"
                  onChange={handleHoleOne}
                />
              </td>
              <td>
                <input
                  type="number"
                  name=""
                  id=""
                  width="10px"
                  onChange={handleHoleTwo}
                />
              </td>
              <td>
                <input
                  type="number"
                  name=""
                  id=""
                  width="10px"
                  onChange={handleHoleThree}
                />
              </td>
              <td>
                <input
                  type="number"
                  name=""
                  id=""
                  width="10px"
                  onChange={handleHoleFour}
                />
              </td>
              <td>
                <input
                  type="number"
                  name=""
                  id=""
                  width="10px"
                  onChange={handleHoleFive}
                />
              </td>
              <td>
                <input
                  type="number"
                  name=""
                  id=""
                  width="10px"
                  onChange={handleHoleSix}
                />
              </td>
              <td>
                <input
                  type="number"
                  name=""
                  id=""
                  width="10px"
                  onChange={handleHoleSeven}
                />
              </td>
              <td>
                <input
                  type="number"
                  name=""
                  id=""
                  width="10px"
                  onChange={handleHoleEight}
                />
              </td>
              <td>
                <input
                  type="number"
                  name=""
                  id=""
                  width="10px"
                  onChange={handleHoleNine}
                />
              </td>
              <td>
                <input
                  type="number"
                  name=""
                  id=""
                  width="10px"
                  onChange={handleHoleTen}
                />
              </td>
              <td>
                <input
                  type="number"
                  name=""
                  id=""
                  width="10px"
                  onChange={handleHoleEleven}
                />
              </td>
              <td>
                <input
                  type="number"
                  name=""
                  id=""
                  width="10px"
                  onChange={handleHoleTwelve}
                />
              </td>
              <td>
                <input
                  type="number"
                  name=""
                  id=""
                  width="10px"
                  onChange={handleHoleThirteen}
                />
              </td>
              <td>
                <input
                  type="number"
                  name=""
                  id=""
                  width="10px"
                  onChange={handleHoleFourteen}
                />
              </td>
              <td>
                <input
                  type="number"
                  name=""
                  id=""
                  width="10px"
                  onChange={handleHoleFifteen}
                />
              </td>
              <td>
                <input
                  type="number"
                  name=""
                  id=""
                  width="10px"
                  onChange={handleHoleSixteen}
                />
              </td>
              <td>
                <input
                  type="number"
                  name=""
                  id=""
                  width="10px"
                  onChange={handleHoleSeventeen}
                />
              </td>
              <td>
                <input
                  type="number"
                  name=""
                  id=""
                  width="10px"
                  onChange={handleHoleEighteen}
                />
              </td>
              <td>
                <input
                  type="number"
                  name=""
                  id=""
                  onChange={handleRoundTotal}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div>
          <label htmlFor="">Submit Round:</label>
          <input type="submit" name="" id="" />
        </div>
      </form>
      <div>
        <div></div>
      </div>
    </div>
  );
};

export default ScoreCard;
