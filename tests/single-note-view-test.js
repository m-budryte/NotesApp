// 'use strict'
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
