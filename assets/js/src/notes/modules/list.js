import _delete from "./delete.js";
import _edit from "./edit.js";
export default class List {

  constructor() {
    this.content = document.querySelector("#content");
  }

  createTemplate(note) {
    return `
        <article class="note-item" id="note-${note.id}">
            <h3 class="title">${note.title}</h3>
            <p class="description">${note.description}</p>
            <button class="edit" data-id="${note.id}" >Edit</button>
            <button class="delete" data-id="${note.id}" >Delete</button>
        </article>`;
  }

  showList(notes) {
    this.content.innerHTML = "";
    notes.forEach(element => {
      this.content.innerHTML += this.createTemplate(element);
    });
    _delete();
    _edit();
  }

}