var element = ['✕', '◯'];
var next = element [0];
var markedByBoxNumber = [];
$(".box").one("click", function(e) {
	($("p").text()) ? "" : draw(e) ;
	next = (next == element[0]) ? element[1] : element [0];
	$(".line div").each(function (key, value) {
		value = (value.children[0]) ? value.children[0].textContent : "";
		markedByBoxNumber[key] = value;
	})
	checkWinByDiagonal(markedByBoxNumber);
	checkWinByColumn();
	checkWinByRow();
});

//var g = jQuery("main").find("> .line")
function draw(e) {
	var colorChosen = "black";
	if (next == element[0]) {
		colorChosen = "red"
	} else {
		colorChosen = "blue";
	}
	var span = $('<span>', {
		text: next, 
		class: "player_move", 
	}).css("color", colorChosen)
	span.appendTo(e.target)
}
function checkWinByColumn () {
	for(let i = 0; i <= 2; i++){
		string = "";
		$('.column_' + (i+1)).each(function (key, value) { //3 rounds for each column
		 	val = $(this).text();
		 	string += val;
		})
		if (checkMatch(string)) {break;}
		string = "";
	}	
}

function checkMatch(string){
	var winningCombos = ['✕✕✕', '◯◯◯']
	if (string === winningCombos[0]) {
		console.log('✕ has won the game');
		announcement("✕");
		return true;
	} else if (string === winningCombos[1]) {
		console.log('◯ has won the game');
		announcement("◯");
		return true;
	}
}

function checkWinByRow() {
	for(let i = 0; i <= 2; i++){
		string = "";
		$('.row_' + (i+1)).each(function (key, value) { //3 rounds for each column
		 	val = $(this).text();
		 	string += val;
		});
		if (checkMatch(string)) {break;}
		string = "";
	}
}

function checkWinByDiagonal(array) {
	var diagonalLayout = [
		array[2] + array[4] + array[6], 
		array[0] + array[4] + array[8]
	];
	for(let i = 0, length1 = diagonalLayout.length; i < length1; i++){
		checkMatch(diagonalLayout[i]);
	}
}

function announcement(sign) {
	$("p").text(sign + " has won this round").appendTo("#announce");
}

