$(document).ready(function() {
	var crystalValue;
	var totalScore = 0;
	var wins = 0;
	var losses = 0;
	var crystal1Number;
	var crystal2Number;
	var crystal3Number;
    var crystal4Number;
    
    //declaring all variables

	function newNumbers() {
		crystalValue = Math.floor(Math.random() * 101) + 19;
		crystal1Number = Math.floor(Math.random() * 12);
		crystal2Number = Math.floor(Math.random() * 12);
		crystal3Number = Math.floor(Math.random() * 12);
		crystal4Number = Math.floor(Math.random() * 12);
	}
//generating random numbers for Magic Number 19-120 and crystals 1-20

	function newGame() {
		newNumbers();
		totalScore = 0;
		$("#crystalValue").text(crystalValue);
		$("#totalScore").text(totalScore);
		$("#crystal1").attr("data-crystalnumber", crystal1Number);  
		$("#crystal2").attr("data-crystalnumber", crystal2Number);
		$("#crystal3").attr("data-crystalnumber", crystal3Number);
		$("#crystal4").attr("data-crystalnumber", crystal4Number);
		$("#wins").text(wins);
		$("#losses").text(losses);
		$("#win-Lose").text("");

		
	}

	function youWin() {
		$("#win-Lose").text("WINNER!"); // .text function to change the text
		wins++;
		$("#wins").text(wins);
	}

	function youLose() {
		$("#win-Lose").text("You Lost. Play Again!"); // .text function to change the text
		losses++;
		$("#losses").text(losses);
	}

	newGame();



	// Function adds the crystal values together .. all crystals have a same class of .crystalimage1
	$(".crystalimage1").on("click", function() {
		if (totalScore >= crystalValue) {
			return;
		}

		var crystalNumber = $(this).attr("data-crystalnumber");
		crystalNumber = parseInt(crystalNumber); // parses string to return an integer
		totalScore += crystalNumber;
		$("#totalScore").text(totalScore);

		if (totalScore === crystalValue) {
			youWin();
		} else if (totalScore > crystalValue) {
			youLose();
		}
	});

	$(".btn").on("click", function() {
		newGame(); //play again button function for game to reset
	});

});