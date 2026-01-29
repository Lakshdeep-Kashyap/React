import {ResponsivePie} from "@nivo/pie"

import "../css/Dashboard.css"

function Dashboard({alltransactions}){

  const grouped = alltransactions.reduce((acc, curr) => {
    if (curr.type !== "expense") return acc;

    const amount = Number(curr.amount);
    acc[curr.category] = (acc[curr.category] || 0) + amount;
    return acc;
  }, {});

  const chartData = Object.entries(grouped).map(
    ([category, total]) => ({
      id: category,
      value: total
    })
  );

  return(
    <>
    <div className="main">
      <div className="piechart">
        <ResponsivePie
          data={chartData}
          colors={{ scheme: 'nivo' }}
          margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
          innerRadius={0.5}
          padAngle={0.6}
          cornerRadius={2}
          activeOuterRadiusOffset={5}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor="#ffffff"
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: 'color' }}
          arcLabelsSkipAngle={10}
          arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
          legends={[
              {
                  anchor: 'bottom',
                  direction: 'row',
                  translateY: 56,
                  itemWidth: 100,
                  itemHeight: 18,
                  symbolShape: 'circle'
              }
          ]}
        />
      </div>
    </div>
    </>
  )
}

export default Dashboard