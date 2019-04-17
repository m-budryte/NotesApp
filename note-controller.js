(function(exports){
  function NoteController(noteList, noteListView = NoteListView){
    this.noteList = noteList;
    this.noteListViewConstructor = noteListView;
    this.noteList.store('Favourite drink: seltzer');

    this.noteListView = new this.noteListViewConstructor(this.noteList);
  };

  NoteController.prototype = {
    render: function () {
      var app = document.getElementById('app');
      app.innerHTML = this.noteListView.createHTML();
    }
  }
  exports.NoteController = NoteController;
})(this);
