import React from "react";
import Side from "./Side";
import "./CSS/user.css";
import { useState } from "react";
import { useEffect } from "react";

export const User = () => {
  const [a, seta] = useState("");
  const [c, setc] = useState("");
  const [e, sete] = useState("");
  const [v, setv] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("SavedToken"),
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("request failed");
        }
        return response.json();
      })
      .then((data) => {
        // react componants here
        seta(data);
        console.log(data);
      })
      .catch((error) => {
        console.log("Error", error);
      });

    fetch("http://localhost:8000/candidates", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("SavedToken"),
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("request failed");
        }
        return response.json();
      })
      .then((data) => {
        // react componants here
        setc(data);
        console.log(data);
      })
      .catch((error) => {
        console.log("Error", error);
      });

    fetch("http://localhost:8000/election", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("SavedToken"),
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("request failed");
        }
        return response.json();
      })
      .then((data) => {
        // react componants here
        sete(data);
      })
      .catch((error) => {
        console.log("Error", error);
      });

    fetch("http://localhost:8000/votes", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("SavedToken"),
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("request failed");
        }
        return response.json();
      })
      .then((data) => {
        // react componants here
        setv(data);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, []);

  return (
    <div className="bg-image">
      <div className="side">
        <Side></Side>
      </div>
      <div className="view-section">
      <div className="sumo-text">
        <p>
            E VOTEKARO {"("}Admin{")"}{" "}
        </p>
        </div>
      <div className="cards-list">
        
        <div class="card 1">
          <div class="card_image">
            {" "}
            <img src="https://i.redd.it/b3esnz5ra34y.jpg" />
          </div>
          <div className="number">
            <>{a.length}</>
          </div>
          <div class="card_title title-white">
            <p>Number of Voters</p>
          </div>
        </div>

        <div class="card 1">
          <div class="card_image">
            {" "}
            <img src="https://i.redd.it/b3esnz5ra34y.jpg" />
          </div>
          <div className="number">
            <>{c.length}</>
          </div>
          <div class="card_title title-white">
            <p>Candidates</p>
          </div>
        </div>
        <div class="card 1">
          <div class="card_image">
            {" "}
            <img src="https://i.redd.it/b3esnz5ra34y.jpg" />
          </div>
          <div className="number">
            <>{v.length}</>
          </div>
          <div class="card_title title-white">
            <p>Vote Count</p>
          </div>
        </div>
        <div class="card 1">
          <div class="card_image">
            {" "}
            <img src="https://i.redd.it/b3esnz5ra34y.jpg" />
          </div>
          <div className="number">
            <>{e.length}</>
          </div>
          <div class="card_title title-white">
            <p>Election Count</p>
          </div>
        </div>
      </div>
      </div>
      </div>
  );
};
