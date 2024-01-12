'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get('/api/user');
        setUsers(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetch();
  }, []);

  return (
    <div>
      <h1>Public API Users + MongoDB Users</h1>
      <Link href="/new-user">Create New User</Link>
      <ul>
        {users.map((user: any) => (
          <li key={user.id} style={{ margin: '2rem 0' }}>
            <p>Name: {user.name}</p>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Address: {user.address.street} {user.address.suite}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
