
(function(exports) {

  function NoteList(){
    this.list = [];
    this._idCounter = 0;
  };

  NoteList.prototype.store = function(text){
    note = new Note(text);
    note.setID(this._idCounter);
    this.list.push(note);
    this._idCounter++
    return note;
  };

  NoteList.prototype.show = function(){
    return this.list;
  };

  exports.NoteList= NoteList;
})(this);
