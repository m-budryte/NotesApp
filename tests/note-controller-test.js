window.onload = function(){
  (function(exports){
    function rendersOneNoteListView2(){
      var noteList = new NoteList();
      noteList.store('my note')
      var noteController = new NoteController(noteList);
      noteController.render();
      var app = document.getElementById('app');
      assert.isTrue("renders HTML", app.innerHTML.includes('my note'));
      assert.isTrue("renders HTML", app.innerHTML.includes('Favourite drink: sel'));
    }
    rendersOneNoteListView2();

    function rendersOneNoteListView(){
      var noteList = new NoteList();
      var noteController = new NoteController(noteList);
      noteController.render();
      var app = document.getElementById('app');
      assert.isTrue("renders HTML", app.innerHTML.includes('Favourite drink: sel'));
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
}
