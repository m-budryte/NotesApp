window.onload = function(){
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

  (function(exports) {
    function containsArray() {
      var noteList = new NoteList;
      assert.isTrue("contains the array", Array.isArray(noteList.list));
    }

    containsArray();

    function createsAndStoresNotes() {
      var noteList = new NoteList;
      noteList.store("ohyas");
      assert.isTrue("creates and stores Notes objects", noteList.list[0] instanceof Note);
      assert.isTrue("Note objects have text attr set up correctly", noteList.list[0].text === "ohyas");
    }

    createsAndStoresNotes();


    function showsOneNote() {
      var noteList = new NoteList;
      note = noteList.store('Yas');
      assert.isTrue("shows a note", noteList.show().includes(note));
    }

    showsOneNote();

    function showsTwoNotes() {
      var noteList = new NoteList;
      note = noteList.store('Yas');
      note2 = noteList.store('Nope');
      assert.isTrue("shows two notes", noteList.show().includes(note) && noteList.show().includes(note2));
    }

    showsTwoNotes();
  })(this);

  (function(exports){
    function rendersOneNoteListView2(){
      var noteList = new NoteList();
      noteList.store('my note')
      var noteController = new NoteController(noteList);
      noteController.render();
      var app = document.getElementById('app');
      assert.isTrue("renders HTML", app.innerHTML.includes('my note'));
      assert.isTrue("renders HTML", app.innerHTML.includes('Favourite drink: seltzer'));
    }
    rendersOneNoteListView2();

    function rendersOneNoteListView(){
      var noteList = new NoteList();
      var noteController = new NoteController(noteList);
      noteController.render();
      var app = document.getElementById('app');
      assert.isTrue("renders HTML", app.innerHTML.includes('Favourite drink: seltzer'));
    }
    rendersOneNoteListView();

    function callsnoteListStore(){
        var counter = 0;
        var noteListDouble = {
          store: function(text) {
            counter ++;
          }
        }
        var noteController = new NoteController(noteListDouble);
        assert.isTrue("calls noteList.store()", counter === 1);
    }
    callsnoteListStore();

    function makesNoteListView(){
        var noteListDouble = { store: function () {} };
        function noteListViewDoubleConstructor () {};
        noteListViewDoubleConstructor.prototype = {
          createHTML: function() {
            return "yas!"
          }
        };
        var noteController = new NoteController(noteListDouble, noteListViewDoubleConstructor);
        noteController.render();
        assert.isTrue("notecontroller.render calls createhtml on notelistview and puts the output into #app",
                      app.innerHTML.includes('yas!'));
    }
    makesNoteListView();
  })(this);

(function(exports){
  function returnsSingleNoteHTMLString(){
    var noteDouble = {
      noteContent: function () {
        return "Favourite drink: seltzer";
      }
    };
    var singleNoteView = new SingleNoteView(noteDouble);
    assert.isTrue("returns a string of HTML that represents the note model", singleNoteView.createHTML() === "<div>Favourite drink: seltzer</div>")
  }
  returnsSingleNoteHTMLString();
})(this);
}
