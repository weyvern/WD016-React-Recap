const User = ({ age, logAge, firstName, lastName }) => {
  const handleClick = event => {
    logAge(age);
    console.log(event);
  };

  return (
    <h1 onClick={handleClick}>
      Hello there {firstName} {lastName}
    </h1>
  );
};

export default User;
