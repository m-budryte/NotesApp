(function(exports){

  function NoteController(noteList) {
    noteList.store("Favourite drink: seltzer");
    this.noteListView = new NoteListView(noteList)
  };

  NoteController.prototype = {
    render: function(){
      var element = document.getElementById('app');
      element.innerHTML = this.noteListView.createHTML();
    }
  }
  exports.NoteController = NoteController;
})(this);
