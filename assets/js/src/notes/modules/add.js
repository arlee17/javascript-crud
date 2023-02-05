import Storage from "./storage.js";
import List from "./list.js";

export default class Add {

  constructor() {
    this.storage = new Storage();
    this.list = new List();
    this.title_field = document.querySelector("#title");
    this.description_field = document.querySelector("#description");
    this.save_btn = document.querySelector("#save");
  }

  saveNotes() {
    this.save_btn.onclick = (e) => {
      e.preventDefault();

      let notes = this.storage.getData();
      let lastId = this.storage.getLastId();
      let title = this.title_field.value;
      let description = this.description_field.value;

      if (title == "" || description == "") {
        alert("Introduce data in form")
      } else {
        let note = {
          id: lastId++,
          title,
          description
        };
        
        notes.push(note);
        this.storage.save(notes);
        this.list.showList(notes);
      }

      return false;
    }
  }

}