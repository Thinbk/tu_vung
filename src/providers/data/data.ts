import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage";
import 'rxjs/add/operator/map';

export class Note {
  time: number;
  content: string;
  id: number;

  constructor() {
    this.time = Date.now();
    this.id = -1;
    this.content = "";
  }
}

@Injectable()
export class DataProvider {

  mNotes: Array<Note> = [];

  constructor(private mStorage: Storage) {

  }

  loadData() {
    this.mStorage.get("notes").then(
      data => {
        console.log(data);
        if (data) {
          this.mNotes = data;
        }

      }
    );
  }

  saveData() {
    this.mStorage.set("notes", this.mNotes);
  }

  addNote(content: string) {
    let note = new Note();
    note.id = this.mNotes.length;
    note.content = content;
    this.mNotes.push(note);
    this.saveData();
  }

}
