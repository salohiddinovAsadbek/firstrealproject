import { useSelector } from "react-redux";
import Header from "../components/header";
import Navigation from "../components/Navigation";
import "../styles/account.css";

function UserAccount() {
  const isUserActivated = useSelector((state) => state.userData);
  const userDataAll = useSelector((state) => state.userDataAll);

  return (
    <div className="account">
      <Header />
      <div>
        <Navigation />
        <div className="accountWrapper">
          {isUserActivated ? (
            <div className="userEnteredAccount">
              <h1>Profil</h1>

              <div className="userEnteredAccountTop">
                <i className="fa-regular fa-user"></i>
                <div>
                  <h1>N/A</h1>
                  <p>N/A</p>
                  <button>Tahrirlash</button>
                </div>
              </div>
              <div className="userEnteredAccountCars">
                <h1>Mashinalar</h1>
                <p>Mashinalar mavjud emas</p>
              </div>
              <div className="userEnteredAccountHistory">
                <div>
                  <i className="fa-solid fa-box-open"></i>
                  <p>Buyurtmalar tarixi</p>
                </div>
                <div className="userEnteredHistoryEmpty">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      className="lucide lucide-shopping-bag h-8 w-8 text-gray-400"
                    >
                      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                      <path d="M3 6h18"></path>
                      <path d="M16 10a4 4 0 0 1-8 0"></path>
                    </svg>
                  </div>
                  <p>Buyurtmalar mavjud emas</p>
                  <p>Birinchi buyurtmangizni bering</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="accountEmpty">
              <i className="fa-regular fa-user"></i>
              <p>Iltimos, tizimga kiring</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserAccount;
