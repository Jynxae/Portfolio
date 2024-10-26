import React from "react";
import SplashScreen from "../Images/SplashScreen.png";
import TransactionView from "../Images/TransactionView.png";
import AddTransactionView from "../Images/AddTransactionView.png";
import MonthlyReport from "../Images/MonthlyReport.png";
import ProfileView from "../Images/ProfileView.png";
import SettingsView from "../Images/SettingsView.png";
import EditBudgetView from "../Images/EditBudgetView.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="bg-[#FFFBE9] py-2 w-screen">
      <h2 className="text-[#AD8B73] text-6xl pt-24 pl-24">&gt; Projects</h2>
      <ul className="text-[#C49673] text-4xl pl-32 pt-12">
        <li>
          <span className="text-5xl font-bold">PiggyBank</span>
          <br />
          The PiggyBank App is a budgeting tool that helps users log
          transactions, <br></br>set budgets, and track spending habits. It
          provides clear insights into <br></br>finances, making it easier to
          manage expenses and savings.
          <div className="flex row">
            <Slider {...settings} className="w-96 h-96 mt-3">
              <div>
                <img
                  src={SplashScreen}
                  className="h-96 w-60 mx-auto"
                  alt="Splash Screen"
                />
              </div>
              <div>
                <img
                  src={TransactionView}
                  className="h-96 w-60 mx-auto"
                  alt="Transaction View"
                />
              </div>
              <div>
                <img
                  src={AddTransactionView}
                  className="h-96 w-60 mx-auto"
                  alt="Add Transaction View"
                />
              </div>
              <div>
                <img
                  src={EditBudgetView}
                  className="h-96 w-60 mx-auto"
                  alt="Edit Budget View"
                />
              </div>
              <div>
                <img
                  src={MonthlyReport}
                  className="h-96 w-60 mx-auto"
                  alt="Monthly Report"
                />
              </div>
              <div>
                <img
                  src={SettingsView}
                  className="h-96 w-60 mx-auto"
                  alt="Settings View"
                />
              </div>
              <div>
                <img
                  src={ProfileView}
                  className="h-96 w-60 mx-auto"
                  alt="Profile View"
                />
              </div>
            </Slider>
          </div>
          <button
            onClick={() =>
              window.open("https://github.com/Jynxae/Team1_BudgetApp", "_blank")
            }
            className="mr-5 mt-7 px-4 py-2 bg-[#AD8B73] text-white rounded hover:bg-[#CEAB93] transition duration-300"
          >
            View Code
          </button>
        </li>
        <li className="mt-12">
          <span className="text-5xl font-bold">The Baker Museum</span>
          <br />
          The Baker Museum is a web app that manages and displays museum
          collections. <br></br>It lets users browse and search artworks, while
          museum staff can <br></br>easily update and manage records, enhancing
          the overall visitor experience.
        </li>
        <br />
        <div>
          <iframe
            src="https://www.bakermuseum.art/"
            title="Baker Museum"
            className="w-[900px] h-[500px] border-2 border-[#AD8B73] rounded-md"
          ></iframe>
          <button
            onClick={() =>
              window.open("https://www.bakermuseum.art/", "_blank")
            }
            className="mr-5 mt-3 px-4 py-2 bg-[#AD8B73] text-white rounded hover:bg-[#CEAB93] transition duration-300"
          >
            View Website
          </button>
          <button
            onClick={() =>
              window.open("https://github.com/Ashishjob/museuma", "_blank")
            }
            className="mr-5 mt-3 px-4 py-2 bg-[#AD8B73] text-white rounded hover:bg-[#CEAB93] transition duration-300"
          >
            View Code
          </button>
        </div>
      </ul>
    </div>
  );
}

export default Projects;
