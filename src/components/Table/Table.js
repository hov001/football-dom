import { createElement } from "../../helpers/createElement.js";
import { getTable } from "../../services/getDatas.services.js";
import Club from "../Club/Club.js";
import TableHeader from "../TableHeader/TableHeader.js";
import TableLiner from "../TableLiner/TableLiner.js";

export default function Table() {
  const ClubsNodes = getTable().map((clubData, idx) =>
    Club({ clubData, position: idx + 1 })
  );

  return createElement(
    "section",
    { class: "table" },
    TableHeader(),
    TableLiner(),
    createElement("div", { class: "clubs" }, ...ClubsNodes)
  );
}
