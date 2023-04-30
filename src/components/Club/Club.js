import { createElement } from "../../helpers/createElement.js";
import ClubInfo from "./ClubInfo.js";

export default function Club({ clubData, position }) {
  const { name, image, stats } = clubData;
  /*
  
  <div class="club">
      <h4 class="club__content">-</h4>
      <div class="club__info">
        <img src="./src/assets/images/clubs/no-club.png" alt="" />
        <h4 class="club__content">Team Name</h4>
      </div>
      <div class="club__points">
        <h4 class="club__content">0</h4>
        <h4 class="club__content">0</h4>
        <h4 class="club__content">0</h4>
        <h4 class="club__content">0</h4>
        <h4 class="club__content">0</h4>
        <h4 class="club__content">0</h4>
        <h4 class="club__content">0</h4>
        <h4 class="club__content">0</h4>
      </div>
    </div>
  
  */

  const ClubTitle = createElement(
    "h4",
    { class: "club__content" },
    position ?? "-"
  );

  return createElement(
    "div",
    { class: "club" },
    ClubTitle,
    ClubInfo({ name, image })
  );
}
