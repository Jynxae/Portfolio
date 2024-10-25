import React from "react";
import SplashScreen from "../Images/SplashScreen.png";
import EditBudgetView from "../Images/EditBudgetView.png";

function Projects() {
  return (
    <div className="bg-[#FFFBE9] py-12 w-screen">
      <h2 className="text-[#AD8B73] text-6xl pt-24 pl-24">&gt; Projects</h2>
      <ul className="text-[#CEAB93] text-4xl pl-32 pt-12">
        <li>
          <span className="text-5xl">PiggyBudgeting</span>
          <br />
          Developed a budgeting application that allows users to log
          transactions, set budgets, and view their spending habits.
          <div className="flex row">
            <img src={SplashScreen} className="h-96 w-60 pr-12 mt-3"></img>
            <img src={EditBudgetView} className="h-96 w-60 pr-12 mt-3"></img>
          </div>
          <button
            onClick={() =>
              window.open("https://github.com/Jynxae/Team1_BudgetApp", "_blank")
            }
            className="mr-5 mt-3 px-4 py-2 bg-[#AD8B73] text-white rounded hover:bg-[#CEAB93] transition duration-300"
          >
            View Code
          </button>
        </li>
        <li className="mt-12">
          <span className="text-5xl">The Baker Museum</span>
          <br />
          Led a team of 4 to develop a database system tailored towards an Art
          Museum.
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
