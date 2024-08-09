import { Card } from "./Components/Card";
import foto from  './Vibe.jpeg';

const data = [
  {
    full_name:'Together width the "Best of the Best"',
     price:"$ priceless",
     avatar: foto, 
  },

]

function App() {
  return (
    <div className='App'>
    {
      data.map((el,id) => {
        return <Card
        full_name={el.full_name}
        price={el.price}
        avatar={el.avatar}
        />
      })
    }     
      </div>
  );
}

export default App;