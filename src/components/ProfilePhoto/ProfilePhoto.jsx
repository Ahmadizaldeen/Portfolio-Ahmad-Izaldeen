// src/components/ProfilePhoto.jsx
import "./ProfilePhoto.css";
import ahmadPhoto from "../../assets/ahmad.jpg"

export default function ProfilePhoto() {
  return (
    <div className="photo-container">
  <img src={ahmadPhoto} alt="Ahmad" className="profile-photo" />
    </div>
  );
}
