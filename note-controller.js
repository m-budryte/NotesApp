(function(exports){
  function NoteController(noteList){
    this.noteList = noteList;
    this.noteList.store('Favourite drink: seltzer');
    this.noteListView = new NoteListView(this.noteList);
  };

  NoteController.prototype = {
    render: function () {
      var app = document.getElementById('app');
      app.innerHTML = this.noteListView.createHTML();
    }
  }
  exports.NoteController = NoteController;
})(this);
