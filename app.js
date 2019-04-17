window.onload = function(){
  var noteList = new NoteList();
  var noteController = new NoteController(noteList);
  noteController.render()
};
