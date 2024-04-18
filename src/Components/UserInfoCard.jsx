import React, { useEffect, useState } from "react";
import '../Components/UserInfoCard.css';

const UserInfoCard = () => {
  const api = "https://api.github.com/users/vladtymo";
  const [userData, setUserData] = useState(new UserData(null));
  useEffect(() => {
    fetch(api)
      .then(res => res.json())
      .then(data => {
        setUserData(data);
        console.log(data)
      });
  }, [])


  return (
    <div className="user-card">
      
      <div className="img-container" >
        <img className="bg-img" src={userData.avatar_url} alt=""></img>
      </div>
      <div className="info">
        <div>
          <img src={userData.avatar_url} className="avatar" alt=""></img>
        </div>
        <span className="user-name">{userData.name}</span>
        <div className="d-flex flex-column">
        <span className="login">@{userData.login}</span>
        {userData.location && <span className="location">{userData.location}</span>}
        </div>
       
        <div className="stat">
          <div className="stat-info">
            <span className="info-data">{userData.followers}</span>
            <span className="info-title">Followers</span>
          </div>
          <div className="stat-info">
            <span className="info-data">{userData.following}</span>
            <span className="info-title">Following</span>
          </div>
          <div className="stat-info">
            <span className="info-data">{userData.public_repos}</span>
            <span className="info-title">Repositories</span>
          </div>
        </div>
      </div>

    </div>)
};

export default UserInfoCard;

class UserData {
  constructor(data) {
    this.login = data?.login || '';
    this.avatar_url = data?.avatar_url || '';
    this.type = data?.type || '';
    this.name = data?.name || '';
    this.company = data?.company || '';
    this.location = data?.ocation || '';
    this.email = data?.email || '';
    this.public_repos = data?.public_repos || '';
    this.public_gists = data?.public_gists || '';
    this.followers = data?.followers || '';
    this.following = data?.following || '';
    this.created_at = data?.created_at || '';
  }
}
