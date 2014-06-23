(function (root) {
  var Hanoi = root.Hanoi = (root.Hanoi || {});

  Hanoi.Game.prototype.render = function () {
    for (var i = 0; i < this.towers.length; i++) {
      $('div[data-col=' + i + ']').removeClass("highlight");
      for (var j = 0; j < 3; j++) {
        $('div[data-row='+ j + '][data-col=' + i + ']').empty();
      }
    }

    for (var i = 0; i < this.towers.length; i++) {
      for (var j = 0; j < this.towers[i].length; j++) {
        $div = $('<div class="disk' + this.towers[i][j] + '"></div>');
        $('div[data-row='+ j + '][data-col=' + i + ']').append($div);
        //debugger;
      }
    }
  }

  Hanoi.Game.prototype.setEvents = function(){
    var that = this;
    that.from = null;
    $('div.col').on('click', function(event) {
      if (that.from === null ){
        that.from = parseInt($(this).attr("data-col"));//event.currentTarget;
        $(this).addClass("highlight");
      }
      else {
        that.to = parseInt($(this).attr("data-col"));
        if (!that.move(that.from, that.to)){ alert("Invalid Move!")}
        $(that.from).removeClass("highlight");
        that.to = null;
        that.from = null;
        that.render();
        if(that.isWon()) { alert("You won!"); }
      }
    });
  }
})(this);