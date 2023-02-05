import Storage from "./storage.js";
import List from "./list.js";

export default function () {
  const storage = new Storage();
  const list = new List();
  let stored_notes = storage.getData();
  let viewed_notes = document.querySelectorAll("#content .note-item");

  viewed_notes.forEach(note => {
    let delete_btn = note.querySelector('.delete');

    delete_btn.onclick = function () {
      const note_id_to_delete = this.getAttribute('data-id');
      const new_notes_sored = stored_notes.filter((note) => note.id !== parseInt(note_id_to_delete));
      storage.save(new_notes_sored);
      list.showList(new_notes_sored);
    }
  });

}