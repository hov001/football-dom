import { createElement } from "../../helpers/createElement.js";
import TableHeader from "../TableHeader/TableHeader.js";
import TableLiner from "../TableLiner/TableLiner.js";

export default function Table() {
  return createElement(
    "section",
    { class: "table" },
    TableHeader(),
    TableLiner()
  );
}
