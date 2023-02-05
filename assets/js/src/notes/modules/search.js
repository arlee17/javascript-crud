import Storage from "./storage.js";
import List from "./list.js";


export default function () {
  const storage = new Storage;
  const list = new List();
  let content = document.querySelector("#content");
  let search_btn = document.querySelector("#search");

  search_btn.onclick = (e) => {
    e.preventDefault();

    let wanted = document.querySelector("#search_field").value;
    let stored_notes = storage.getData();
    const new_list = stored_notes.filter(note => {
      return note.title.toLowerCase().includes(wanted.toLowerCase());
    });

    if (new_list.length <= 0) {
      content.innerHTML = "<div class='no-notes' ><h2>No notes yet...</h2></div>";
    } else {
      list.showList(new_list);
    }
    return false;
  }
}