import { createElement } from "../../helpers/createElement.js";
import ClubInfo from "./ClubInfo.js";
import ClubPoints from "./ClubPoints.js";

export default function Club({ clubData, position }) {
  const { name, image, stats } = clubData;

  const ClubTitle = createElement(
    "h4",
    { class: "club__content" },
    position ?? "-"
  );

  return createElement(
    "div",
    { class: "club" },
    ClubTitle,
    ClubInfo({ name, image }),
    ClubPoints({ stats })
  );
}
