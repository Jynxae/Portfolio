import React from "react";
import SplashScreen from "../Images/SplashScreen.png";
import TransactionView from "../Images/TransactionView.png";
import AddTransactionView from "../Images/AddTransactionView.png";
import MonthlyReport from "../Images/MonthlyReport.png";
import ProfileView from "../Images/ProfileView.png";
import SettingsView from "../Images/SettingsView.png";
import EditBudgetView from "../Images/EditBudgetView.png";
import SpaceGuard from "../Images/Space Guard.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  const piggyBankImages = [
    SplashScreen,
    TransactionView,
    AddTransactionView,
    EditBudgetView,
    MonthlyReport,
    SettingsView,
    ProfileView,
  ];

  return (
    <section className="bg-[#FFFBE9] min-h-screen w-full py-20 px-10 md:px-24">
      <h2 className="text-[#AD8B73] text-6xl font-bold">&gt; Projects</h2>

      <div className="mt-16 space-y-24 text-[#C49673]">
        {/* PiggyBank */}
        <div>
          <h3 className="text-5xl font-bold text-[#AD8B73]">PiggyBank</h3>

          <p className="text-2xl md:text-3xl leading-relaxed mt-4">
            PiggyBank is a budgeting app that helps users log transactions, set
            budgets, and track spending through clean UI screens and automated
            reports. It gives users clear insight into their expenses and
            savings.
          </p>

          <div className="mt-6">
            <Slider {...settings} className="w-80 md:w-96 h-96 mx-auto">
              {piggyBankImages.map((img, idx) => (
                <div key={idx}>
                  <img
                    src={img}
                    className="h-96 w-60 mx-auto object-cover"
                    alt={`PiggyBank screen ${idx + 1}`}
                  />
                </div>
              ))}
            </Slider>
          </div>

          <button
            onClick={() =>
              window.open("https://github.com/Jynxae/Team1_BudgetApp", "_blank")
            }
            className="mt-6 px-4 py-2 bg-[#AD8B73] text-white rounded hover:bg-[#CEAB93] transition"
          >
            View Code
          </button>
        </div>

        {/* Space Guard */}
        <div>
          <h3 className="text-5xl font-bold text-[#AD8B73]">Space Guard</h3>

          <p className="text-2xl md:text-3xl leading-relaxed mt-4">
            Space Guard empowers casual astronomers to report and track orbital
            debris, supporting NASA in identifying potential hazards. With
            thousands of untracked debris pieces in low Earth orbit, Space Guard
            provides crucial crowd-sourced reporting.
          </p>

          <img
            src={SpaceGuard}
            className="w-2/3 h-auto mt-6 mx-auto rounded-md"
            alt="Space Guard"
          />

          <button
            onClick={() =>
              window.open("https://github.com/Jynxae/JSCHack", "_blank")
            }
            className="mt-6 px-4 py-2 bg-[#AD8B73] text-white rounded hover:bg-[#CEAB93] transition"
          >
            View Code
          </button>
        </div>

        {/* Baker Museum */}
        <div>
          <h3 className="text-5xl font-bold text-[#AD8B73]">
            The Baker Museum
          </h3>

          <p className="text-2xl md:text-3xl leading-relaxed mt-4">
            The Baker Museum is a full-stack web app that allows users to
            explore museum collections. Staff can manage and update artwork
            records, ensuring visitors have an engaging browsing experience.
          </p>

          <iframe
            src="https://www.bakermuseum.art/"
            title="Baker Museum"
            className="w-full md:w-[900px] h-[500px] border-2 border-[#AD8B73] rounded-md mt-6"
          ></iframe>

          <div className="mt-4 flex gap-4">
            <button
              onClick={() =>
                window.open("https://www.bakermuseum.art/", "_blank")
              }
              className="px-4 py-2 bg-[#AD8B73] text-white rounded hover:bg-[#CEAB93] transition"
            >
              View Website
            </button>

            <button
              onClick={() =>
                window.open("https://github.com/Ashishjob/museuma", "_blank")
              }
              className="px-4 py-2 bg-[#AD8B73] text-white rounded hover:bg-[#CEAB93] transition"
            >
              View Code
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
