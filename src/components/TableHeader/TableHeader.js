import { createElement } from "../../helpers/createElement.js";
import TableHeaderInfo from "./TableHeaderInfo.js";

export default function TableHeader() {
  /*
  
  <header>
    <img
      src="./src/assets/images/leagues/premier-league.png"
      alt=""
      class="header__logo"
    />
    <div class="header__info">
      <h2 class="title">Premier League</h2>
      <p>Season 2022 - 2023</p>
    </div>
  </header>
  
  */

  const TableHeaderImage = createElement("img", {
    src: "./src/assets/images/leagues/premier-league.png",
    alt: "Premier League",
    class: "header__logo",
  });

  return createElement(
    "header",
    {},
    TableHeaderImage,
    TableHeaderInfo({
      title: "Premier league",
      description: "Season 2021",
    })
  );
}
