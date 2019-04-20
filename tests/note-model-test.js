
  (function(exports) {
    function containsNoteContents() {
      var note = new Note("lil note");
      assert.isTrue("contains note contents", note.text === "lil note");
    };
    containsNoteContents();

    function returnsNoteContents() {
      var note = new Note("YAS");
      assert.isTrue("returns not contents", note.noteContent() === "YAS");
    }
    returnsNoteContents();
  })(this);

  (function(exports){
    function createsAUniqueIDForANote() {
      var note = new Note('my note');
      note.setID(99);
      assert.isTrue("sets an ID for a note", note.getID() === 99);
    }
    createsAUniqueIDForANote();
  })(this);
