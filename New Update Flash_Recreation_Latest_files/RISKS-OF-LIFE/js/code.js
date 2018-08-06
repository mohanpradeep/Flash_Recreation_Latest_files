$(function () {
    $(".draggableParent div").draggable({ revert: 'invalid' });
    $(".droppableParent div").droppable({ 
        accept: function(drag) {
            var dropId = $(this).attr('data-id');
            var dragId = $(drag).attr('data-id');  
            return dropId === dragId;
        },
        drop: function ( event, ui ) {
            $(this).addClass('hello'); 
            //console.log(event);
            
            $(event.originalEvent.target).css('visibility','hidden');
        }
    });
});