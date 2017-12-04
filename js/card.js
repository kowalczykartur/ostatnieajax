// KLASA KANBAN CARD
function Card(id, name, columnId) {
	var self = this;
    this.columnId = columnId;
	this.id = id;
    this.name = name || 'No name given';
	this.element = createCard();

	function createCard() {
		var card = $('<li class="card"></li>');
		var cardDeleteBtn = $('<button class="btn-delete">x</button>');
        var cardEditButton = $('<button class="btn-edit">Edit</button>');
		var cardDescription = $('<p class="card-description"></p>');
		
		cardDeleteBtn.click(function(){
			self.removeCard();
		});

		
		card.append(cardDeleteBtn);
        card.append(cardEditButton);
		cardDescription.text(self.name);
		card.append(cardDescription);
        
        cardEditButton.click(function(){
			var newName =prompt('Enter new card name');
            self.changeCardName(self.id, newName, self.columnId, card);            
		});
        
		return card;
	}
}
Card.prototype = {
	removeCard: function() {
    var self = this;
    $.ajax({
      url: baseUrl + '/card/' + self.id,
      method: 'DELETE',
      success: function(){
        self.element.remove();
      }
    });
},
    changeCardName:function(id, name, columnId, card){
        var self = this;
        $.ajax({
        url: baseUrl + '/card/' + self.id,
        method: 'PUT',
        data: {
            	name:name,
                id:id,
                bootcamp_kanban_column_id:columnId
    		}, 
        
      success: function(resp){
          console.log('card',card);
          self.name = name;
          
            card.find('.card-description').html(name);
          //alert('Name changed');
      }
    });
    }
    
}