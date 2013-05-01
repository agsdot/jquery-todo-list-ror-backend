
$(document).ready(function(){
	
	$(function() {
	$("#datepicker").datepicker();
	});


	$("#new_todo_item").on('submit', function(event){
		event.preventDefault();
			// {todo_item: {name: "milk the cow"}}
		var form = $(this);
		var name = $("#todo_item_name").val();
		var datepicker = $('#datepicker').val();

		var completed = $("#todo_item_completed").is(':checked')
		$.ajax({
			url: form.attr('action'),
			method: form.attr('method'),
			data: {todo_item: {
				"name": name,
				"completed": completed,
				"due_at": datepicker
				}
			},
			dataType:"json",
			success: function(todo_item) {
				var table = $('#todo');
    
				
				var row = $('<tr><td><input type="checkbox" class="checkbox"></td><td>' + todo_item.name + '</td><td>' + todo_item.due_at + '</td><td>' + todo_item.completed + '</td><td>' + todo_item.deleted + '</td></tr>');
				row.appendTo(table);
			},
			error: function(){
				alert("Couldn't add a todo because the server was broken :( ");
			}
		});
	});

});