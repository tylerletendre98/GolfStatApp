import React from "react";
import { Bar } from "react-chartjs-2";
const GolferData = (props) => {
  if (props.pastRounds.length === 0) {
    return <div>loading...</div>;
  } else {
    return (
      <div>
        <Bar
          data={{
            labels: [...props.pastRounds],
            datasets: [
              {
                label: "Past Round Scores",
                data: [...props.pastRounds],
                backgroundColor: "rgb(204,204,0)",
                borderWidth: 1,
              },
            ],
          }}
          height={400}
          width={200}
          options={{
            maintainAspectRatio: false,
          }}
        />
      </div>
    );
  }
};

export default GolferData;
