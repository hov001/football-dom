import { createElement } from "../../helpers/createElement.js";
import Club from "../Club/Club.js";
import TableHeader from "../TableHeader/TableHeader.js";
import TableLiner from "../TableLiner/TableLiner.js";

export default function Table() {
  return createElement(
    "section",
    { class: "table" },
    TableHeader(),
    TableLiner(),
    createElement("div", { class: "clubs" }, Club({}))
  );
}
