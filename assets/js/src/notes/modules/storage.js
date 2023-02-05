export default class Storage {

  constructor() {
    this.id = 1;

  }

  getData() {
    let notes = JSON.parse(localStorage.getItem('notes'));
    if (!notes || notes.length < 1) {
      notes = [
        {
          id: 0,
          title: "Note",
          description: "Description note"
        }
      ];
      this.id = 1;
    } else {
      this.id = notes[notes.length - 1].id + 1;
    }
    return notes;
  }

  getLastId() {
    return this.id;
  }

  save(data) {
    return localStorage.setItem('notes', JSON.stringify(data));
  }

}   