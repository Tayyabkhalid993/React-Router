import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

interface GitHubUser {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  followers: number;
  following: number;
  public_repos: number;
  // Include other fields as necessary
}

export default function Github() {
//   const [data, setData] = useState<GitHubUser | null>(null);

//   useEffect(() => {
//     fetch('https://api.github.com/users/Tayyabkhalid993')
//       .then((res) => res.json())
//       .then((data: GitHubUser) => setData(data))
//       .catch((error) => console.error('Error fetching GitHub user:', error));
//   }, []); 

const data:GitHubUser = useLoaderData<GitHubUser>();
  return (
    <div>
      {data ? (
        <div>
          <p>Followers: {data.followers}</p>
          <p>Following: {data.following}</p>
          <p>Public Repos: {data.public_repos}</p>
          <img src={data.avatar_url} alt="" />
          <a href={data.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      ) : (
        <p>Failed to Fetch Data</p>
      )}
    </div>
  );
}


export const githubInfoLoader = async () =>{
  const res =  await fetch('https://api.github.com/users/Tayyabkhalid993').then((res) => res.json());
    return res;
}