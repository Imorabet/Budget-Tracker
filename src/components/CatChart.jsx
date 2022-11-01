import { Doughnut } from "react-chartjs-2";

export default function CatChart({ transactions}){
  var other=0,car=0,edu=0,food=0,house=0;
  transactions.map(item=>{
    if (item.type==="expense"){
    switch (item.cat) {
      case "msn":
       return house+=item.amount
      case "vtr":
        return car+=item.amount
      case "edu":
        return edu+=item.amount
      case "nrt":
        return food+=item.amount
      default:
        return other+=item.amount
    }}
    else console.log('bitch who da fuck')
  })
  const labels = ["House", "Car","Education","Food","Others"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "# of Votes",
        data: [house,car,edu,food,other],
        backgroundColor: [
          'rgba(255, 99, 132)',
          'rgba(153, 102, 255)',
          'rgba(54, 162, 235)',
          'rgba(255, 206, 86)',
          'rgba(75, 192, 192)',
        ],
        borderColor: [
          'rgba(255, 99, 132)',
          'rgba(153, 102, 255)',
          'rgba(54, 162, 235)',
          'rgba(255, 206, 86)',
          'rgba(75, 192, 192)',
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div>
       <h2>Category Expenses</h2>
      <Doughnut data={data} />
    </div>
  );
};