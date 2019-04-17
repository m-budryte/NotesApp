(function(exports){
  function testEmptyHTMLList() {
    var noteList = new NoteList();
    var noteListView = new NoteListView(noteList);

    assert.isTrue("creates empty HTML list for no notes", noteListView.createHTML() === "<ul></ul>");
  }

  testEmptyHTMLList();

  function testSingleHTMLList() {
    var noteList = new NoteList();
    noteList.store("Ummmmmyas!");
    var noteListView = new NoteListView(noteList);
    assert.isTrue("creates a single HTML list item", noteListView.createHTML() === "<ul><li><div>Ummmmmyas!</div></li></ul>")
  }

  testSingleHTMLList();

  function testTwoItemHTMLList() {
    var noteList = new NoteList();
    noteList.store("Ummmmmyas!");
    noteList.store("Ummmmmyassssss!");
    var noteListView = new NoteListView(noteList);
    assert.isTrue("creates a two item HTML list item", noteListView.createHTML() === "<ul><li><div>Ummmmmyas!</div></li><li><div>Ummmmmyassssss!</div></li></ul>")
  }

  testTwoItemHTMLList();

  function testListWithLongNotes() {
    var noteList = new NoteList();
    noteList.store("note with 21 letters!");
    var noteListView = new NoteListView(noteList);
    assert.isTrue("displays first 20 characters of note",
                   noteListView.createHTML().includes('note with 21 letters'));
    assert.isTrue("does not display 21st character",
                   !noteListView.createHTML().includes('note with 21 letters!'));
  }
  testListWithLongNotes();
})(this);

(function(){
  function createsAUniqueIDForANote() {
    var note = new Note('my note');
    note.setID(99);
    assert.isTrue("sets an ID for a note", note.getID() === 99);
  }
  createsAUniqueIDForANote();
})();

(function(exports){
  function createsAUniqueIDForANoteInANoteList() {
    var noteList = new NoteList();
    noteList.store("My note!");
    assert.isTrue("creates an id of 0 for the first note", noteList.show()[0].getID() === 0)
  }
  createsAUniqueIDForANoteInANoteList();

  function createsAUniqueIDForTheSecondNoteInANoteList() {
    var noteList = new NoteList();
    noteList.store("My note!");
    noteList.store("Another note!");
    assert.isTrue("creates an id of 1 for the second note", noteList.show()[1].getID() === 1);
  }
  createsAUniqueIDForTheSecondNoteInANoteList();
})(this);
