import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Tugas9 from "../Tugas-9/tugas9";
import Tugas10 from "../Tugas-10/tugas10";
import Tugas11 from "../Tugas-11/timer";
import Tugas12 from "../Tugas-12/tabel_buah2";
import Tugas13 from "../Tugas-13/tabel_buah_axios";
import Tugas14 from "../Tugas-14/fruit";
import Tugas15 from "./theme";

export default function App() {
  return (
    <Router>
      <div style={{ textAlign: "center" }}>
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/tugas9">Tugas 9</Link>
            </li>
            <li>
              <Link to="/tugas10">Tugas 10</Link>
            </li>
            <li>
              <Link to="/tugas11">Tugas 11</Link>
            </li>
            <li>
              <Link to="/tugas12">Tugas 12</Link>
            </li>
            <li>
              <Link to="/tugas13">Tugas 13</Link>
            </li>
            <li>
              <Link to="/tugas14">Tugas 14</Link>
            </li>
            <li>
              <Link to="/tugas15">Tugas 15</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/tugas9">
            <Tugas9 />
          </Route>
          <Route path="/tugas10">
            <Tugas10 />
          </Route>
          <Route path="/tugas11">
            <Tugas11 />
          </Route>
          <Route path="/tugas12">
            <Tugas12 />
          </Route>
          <Route path="/tugas13">
            <Tugas13 />
          </Route>
          <Route path="/tugas14">
            <Tugas14 />
          </Route>
          <Route path="/tugas15">
            <Tugas15 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
