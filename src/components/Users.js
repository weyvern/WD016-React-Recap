import { useEffect, useState, useCallback } from 'react';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [counter, setCounter] = useState(1);

  const getUsers = useCallback(() => {
    fetch(`https://randomuser.me/api/?results=${counter}`)
      .then(response => response.json())
      .then(data => setUsers(data.results));
  }, [counter]);

  // No array of dependecies -> Every render
  useEffect(() => {
    console.log('Every render');
  });
  // Empty array of dependecies -> First render (mount)
  useEffect(() => {
    getUsers();
    const interval = setInterval(() => getUsers(), 15000);
    // Return from callbacl -> On unmount
    return () => clearInterval(interval);
  }, [getUsers]);

  // Populated array of dependencies -> On dependency update
  useEffect(() => {
    console.log('Users: ', users);
  }, [users]);

  return (
    <div>
      <button onClick={() => setCounter(prev => prev + 1)}>Number of users: {counter}</button>
      <ul>
        {users.map(user => (
          <li>{user.name.first}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
