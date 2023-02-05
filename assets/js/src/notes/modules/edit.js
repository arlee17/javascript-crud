import Storage from "./storage.js";
import List from "./list.js";

export default function () {
  const storage = new Storage();
  const list = new List();

  let stored_notes = storage.getData();
  let viewed_notes = document.querySelectorAll(".note-item");

  viewed_notes.forEach(note => {
    let edit_btn = note.querySelector(".edit");

    edit_btn.onclick = function () {
      const note_id = parseInt(this.getAttribute("data-id"));
      edit_btn.remove();
      note.querySelector(".delete").remove();

      let note_edit_html = `
                <div class="edit-form">
                    <h3 class=""title></h3>
                    <form>
                        <input type="text" class="edit_title" value="${note.querySelector(".title").innerHTML}" />
                        <textarea class="edit_desc">${note.querySelector(".description").innerHTML}</textarea>
                        <input type="submit"class="update" value="Update"/>
                    </form>
                </div>
            `;
            
      note.innerHTML += note_edit_html;

      let update_btn = note.querySelector(".update");
      update_btn.onclick = function (e) {
        e.preventDefault();
        let index_note = stored_notes.findIndex(note => note.id === note_id);

        stored_notes[index_note] = {
          id: note_id,
          title: note.querySelector(".edit_title").value,
          description: note.querySelector(".edit_desc").value
        };

        storage.save(stored_notes);
        list.showList(stored_notes);
        return false;
      }
    }


  })
}