import { createElement } from "../../helpers/createElement.js";
import { getTable } from "../../services/getDatas.services.js";
import Club from "../Club/Club.js";
import TableHeader from "../TableHeader/TableHeader.js";
import TableLiner from "../TableLiner/TableLiner.js";

export default function Table() {
  console.log(getTable());

  return createElement(
    "section",
    { class: "table" },
    TableHeader(),
    TableLiner(),
    createElement("div", { class: "clubs" }, Club({}))
  );
}
