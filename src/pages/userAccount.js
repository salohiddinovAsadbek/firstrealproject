import Header from "../components/header";
import Navigation from "../components/Navigation";
import "../styles/account.css";

function UserAccount() {
  return (
    <div className="account">
      <Header />
      <div>
        <Navigation />
        <div className="accountWrapper">
          <div className="accountEmpty">
            <i className="fa-regular fa-user"></i>
            <p>Iltimos, tizimga kiring</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserAccount;
