import { useState } from "react";
import { getAuth, updateProfile } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase.config";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Profile = () => {
  const auth = getAuth();

  const [changeDeatils, setChangeDetails] = useState(false);

  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });

  const { name, email } = formData;

  const navigate = useNavigate();

  const handleLogout = () => {
    auth.signOut();
    navigate("/");
  };

  const onSubmit = async () => {
    try {
      if (auth.currentUser.displayName !== name) {
        // update display name in fb
        await updateProfile(auth.currentUser, {
          displayName: name,
        });

        // update in firestore
        const userRef = doc(db, "users", auth.currentUser.uid);
        await updateDoc(userRef, {
          name,
        });
      }
    } catch (error) {
      toast.error("Could Not Update Profile details");
    }
  };

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <div className="profile">
      <header className="profileHeader">
        <p className="pageHeader">My Profile</p>
        <button onClick={handleLogout} type="button" className="logOut">
          Log Out
        </button>
      </header>

      <main>
        <div className="profileDetailsHeader">
          <p className="profileDetailText">Personal Details</p>
          <p
            className="changePersonalDetails"
            onClick={() => {
              changeDeatils && onSubmit();
              setChangeDetails((prevState) => !prevState);
            }}
          >
            {changeDeatils ? "done" : "change"}
          </p>
        </div>

        <div className="profileCard">
          <form>
            <input
              id="name"
              className={!changeDeatils ? "profileName" : "profileNameActive"}
              type="text"
              disabled={!changeDeatils}
              value={name}
              onChange={handleChange}
            />
            <input
              id="email"
              className="profileEmail"
              type="text"
              disabled
              value={email}
            />
          </form>
        </div>
      </main>
    </div>
  );
};

export default Profile;
