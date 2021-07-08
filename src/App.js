import User from './components/User';

const App = () => {
  const logAge = age => {
    console.log(age);
  };
  return (
    <div>
      <User firstName='Jorge' lastName='Paul' age={31} logAge={logAge} />
    </div>
  );
};

export default App;
