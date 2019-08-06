var arrayColor = ['#2E9AFE', '#04B431', '#E00000'];
var arrayColorText = ['Azul', 'Verde', 'Rojo'];

var randomColorNumber = 0;//getRndInteger();
var randomColorTextNumber = 0;//getRndInteger();

function getRndInteger() {
	var min = 0;
	var max = 3;
	return Math.floor(Math.random() * (max - min)) + min;
}

var $ppc = $('.progress-pie-chart');
var $blueButton = $('.btn-blue');
var $greenButton = $('.btn-green');
var $redButton = $('.btn-red');
var $trueButton = $('.btn-success');
var $falseButton = $('.btn-danger');
var $startButton = $('.btn-primary');
var limit = 20, keyNew = 0, deg = 0, time = 0, point = 0;
$('.game-over').hide();

$(document).ready(function() {
	$('.load').remove();
});

$startButton.click(function() {
	startGame();
	$blueButton.show();
	$greenButton.show();
	$redButton.show();
	$trueButton.show();
	$falseButton.show();
	$('.point').show();
	$('.time').show();
});

var timerId = 0;
function resetTimerId(){
	timerId = setInterval(function() {
		$('.ppc-progress-fill').css('transform','rotate('+ time +'deg)');
		if (time > 180) {
			$ppc.addClass('gt-50');
		}
		if (time == 360) {
			time = 0;
			clearInterval(timerId);
			failAnswer();
		}; time = time+3;
	}, 20);
}

function startGame() {
	console.log('startGame');
	$('.welcome').remove();
	$('.point').html(point);
	$('.time').html(randomColorNumber);
	$('.pcc-percents-wrapper').html('<span class="color">' + arrayColorText[randomColorTextNumber] + '</span>');
	$('.color').css('color', arrayColor[randomColorNumber]);
	$('.addColor').html('<style>.progress-pie-chart.gt-50{background-color:' + arrayColor[randomColorNumber] + ';}.ppc-progress .ppc-progress-fill{background:' + arrayColor[randomColorNumber] + ';position: absolute;border-radius: 50%;left: calc(50% - 130px);top: calc(50% - 130px);width: 260px;height: 260px;clip: rect(0, 130px, 260px, 0);transform: rotate(0deg);}</style>');

	if(randomColorTextNumber == randomColorNumber) {
		statusPoint = 0;
	} else {
		statusPoint = 1;
	}

	resetTimerId();

	$(document).keydown(function(e) {
		if(e.which == 37) {
			if(statusPoint == 0) {
				clearInterval(timerId);
				time = 0;
				$ppc.removeClass('gt-50');
			} else {
				clearInterval(timerId);
				time = 0;
				$ppc.removeClass('gt-50');
			}
		}

		if(e.which == 39) {
			if(statusPoint == 1) {
				clearInterval(timerId);
				time = 0;
				$ppc.removeClass('gt-50');
			} else {
				clearInterval(timerId);
				time = 0;
				$ppc.removeClass('gt-50');
			}
		}
	});

	$trueButton.click(function() {
		if(statusPoint == 0) {
			clearInterval(timerId);
			time = 0;
			$ppc.removeClass('gt-50');
		} else {
			clearInterval(timerId);
			time = 0;
			$ppc.removeClass('gt-50');
		}
	});

	$falseButton.click(function() {
		if(statusPoint == 1) {
			clearInterval(timerId);
			time = 0;
			$ppc.removeClass('gt-50');
		} else {
			clearInterval(timerId);
			time = 0;
			$ppc.removeClass('gt-50');
		}
	});
}



function failAnswer() {
	time = 0;
	$ppc.removeClass('gt-50');
	point--;
	$('.point').html(point);
	limit = limit*0.99;
	// console.log(limit);
	// console.log('point ' + point);
	randomColorNumber = getRndInteger();
	randomColorTextNumber = getRndInteger();

	if(randomColorTextNumber == randomColorNumber) {
		statusPoint = 0;
	} else {
		statusPoint = 1;
	}

	$('.pcc-percents-wrapper').html('<span class="color">' + arrayColorText[randomColorTextNumber] + '</span>');
	$('.color').css('color', arrayColor[randomColorNumber]);
	$('.addColor').html('<style>.progress-pie-chart.gt-50{background-color:' + arrayColor[randomColorNumber] + ';}.ppc-progress .ppc-progress-fill{background:' + arrayColor[randomColorNumber] + ';position: absolute;border-radius: 50%;left: calc(50% - 130px);top: calc(50% - 130px);width: 260px;height: 260px;clip: rect(0, 130px, 260px, 0);transform: rotate(0deg);}</style>');

	if(randomColorTextNumber == randomColorNumber) {
		statusPoint = 0;
	} else {
		statusPoint = 1;
	}

	var timerId = setInterval(function() {
		$('.ppc-progress-fill').css('transform','rotate('+ time +'deg)');
		if (time > 180) {
			$ppc.addClass('gt-50');
		}
		if (time == 360) {
			clearInterval(timerId);
			failAnswer();
			$ppc.removeClass('gt-50');
		}; time = time+3;
	}, 20);

	$(document).keydown(function(e) {
		if(e.which == 37) {
			if(statusPoint == 0) {
				clearInterval(timerId);
				time = 0;
				$ppc.removeClass('gt-50');
			} else {
				clearInterval(timerId);
				time = 0;
				$ppc.removeClass('gt-50');
			}
		}

		if(e.which == 39) {
			if(statusPoint == 1) {
				clearInterval(timerId);
				time = 0;
				$ppc.removeClass('gt-50');
			} else {
				clearInterval(timerId);
				time = 0;
				$ppc.removeClass('gt-50');
			}
		}
	});

	$trueButton.click(function() {
		if(statusPoint == 0) {
			clearInterval(timerId);
			time = 0;
			$ppc.removeClass('gt-50');
		} else {
			clearInterval(timerId);
			time = 0;
			$ppc.removeClass('gt-50');
		}
	});

	$falseButton.click(function() {
		if(statusPoint == 1) {
			clearInterval(timerId);
			time = 0;
			$ppc.removeClass('gt-50');
		} else {
			clearInterval(timerId);
			time = 0;
			$ppc.removeClass('gt-50');
		}
	});
}

function trueAnswer() {
	time = 0;
	$ppc.removeClass('gt-50');
	point++;
	$('.point').html(point);
	limit = limit*0.99;
	// console.log(limit);
	// console.log('point ' + point);
	randomColorNumber = getRndInteger();
	randomColorTextNumber = getRndInteger();

	if(randomColorTextNumber == randomColorNumber) {
		statusPoint = 0;
	} else {
		statusPoint = 1;
	}

	$('.pcc-percents-wrapper').html('<span class="color">' + arrayColorText[randomColorTextNumber] + '</span>');
	$('.color').css('color', arrayColor[randomColorNumber]);
	$('.addColor').html('<style>.progress-pie-chart.gt-50{background-color:' + arrayColor[randomColorNumber] + ';}.ppc-progress .ppc-progress-fill{background:' + arrayColor[randomColorNumber] + ';position: absolute;border-radius: 50%;left: calc(50% - 130px);top: calc(50% - 130px);width: 260px;height: 260px;clip: rect(0, 130px, 260px, 0);transform: rotate(0deg);}</style>');

	if(randomColorTextNumber == randomColorNumber) {
		statusPoint = 0;
	} else {
		statusPoint = 1;
	}

	var timerId = setInterval(function() {
		$('.ppc-progress-fill').css('transform','rotate('+ time +'deg)');
		if (time > 180) {
			$ppc.addClass('gt-50');
		}
		if (time == 360) {
			clearInterval(timerId);
			failAnswer();
			$ppc.removeClass('gt-50');
		}; time = time+3;
	}, 20);

	$(document).keydown(function(e) {
		if(e.which == 37) {
			if(statusPoint == 0) {
				clearInterval(timerId);
				time = 0;
				$ppc.removeClass('gt-50');
			} else {
				clearInterval(timerId);
				time = 0;
				$ppc.removeClass('gt-50');
			}
		}

		if(e.which == 39) {
			if(statusPoint == 1) {
				clearInterval(timerId);
				time = 0;
				$ppc.removeClass('gt-50');
			} else {
				clearInterval(timerId);
				time = 0;
				$ppc.removeClass('gt-50');
			}
		}
	});

	$trueButton.click(function() {
		if(statusPoint == 0) {
			clearInterval(timerId);
			time = 0;
			$ppc.removeClass('gt-50');
		} else {
			clearInterval(timerId);
			time = 0;
			$ppc.removeClass('gt-50');
		}
	});

	$falseButton.click(function() {
		if(statusPoint == 1) {
			clearInterval(timerId);
			time = 0;
			$ppc.removeClass('gt-50');
		} else {
			clearInterval(timerId);
			time = 0;
			$ppc.removeClass('gt-50');
		}
	});
}

function endGame() {
	keyNew = 1;
	$('.score').html('Score: ' + point);
	$('.game-over').show();
	// console.log('end');
}

$(document).keydown(function(e) {
	if(e.which == 32) {
		if(keyNew == 1) {
			newGame();
		} if (keyNew == 0) {
			startGame();
		}
	}

	if(!$('.game-over').is(':visible')) {
		if(e.which == 37) {
			if(statusPoint == 0) {
				trueAnswer();
				time = 0;
			} else {
				failAnswer();
				time = 0;
			}
		} if(e.which == 39) {
				if(statusPoint == 1) {
					trueAnswer();
					time = 0;
				} else {
					failAnswer();
					time = 0;
				}
			}
		}
});

function redraw(){
	$('.point').html(point);
	$('.time').html(time);
	clearInterval(timerId);
	resetTimerId();
	time = 0;
	$ppc.removeClass('gt-50');
	randomColorNumber = getRndInteger();
	randomColorTextNumber = getRndInteger();
	$('.pcc-percents-wrapper').html('<span class="color">' + arrayColorText[randomColorTextNumber] + '</span>');
	$('.color').css('color', arrayColor[randomColorNumber]);
	$('.addColor').html('<style>.progress-pie-chart.gt-50{background-color:' + arrayColor[randomColorNumber] + ';}.ppc-progress .ppc-progress-fill{background:' + arrayColor[randomColorNumber] + ';position: absolute;border-radius: 50%;left: calc(50% - 130px);top: calc(50% - 130px);width: 260px;height: 260px;clip: rect(0, 130px, 260px, 0);transform: rotate(0deg);}</style>');
}

$blueButton.click(function() {
	console.log('blueButton');
	if (randomColorNumber == 0){
		point++;
	} else {
		point--;
	}
	redraw();
});

$greenButton.click(function() {
	console.log('greenButton');
	if (randomColorNumber == 1){
		point++;
	} else {
		point--;
	}
	redraw();
});

$redButton.click(function() {
	console.log('redButton');
	if (randomColorNumber == 2){
		point++;
	} else {
		point--;
	}
	redraw();
});

$trueButton.click(function() {
	if(statusPoint == 0) {
		trueAnswer();
		time = 0;
	} else {
		failAnswer();
		time = 0;
	}
});

$falseButton.click(function() {
	if(statusPoint == 1) {
		trueAnswer();
		time = 0;
	} else {
		failAnswer();
		time = 0;
	}
});

/*
var $tryButton = $('.btn-warning');

$tryButton.click(function() {
	newGame();
});

function newGame() {
	time = 0;
	limit = 22;
	point = 0;
	$('.point').html(point);
	$ppc.removeClass('gt-50');
	$('.game-over').hide();
	randomColorNumber = getRndInteger();
	randomColorTextNumber = getRndInteger();
	$('.pcc-percents-wrapper').html('<span class="color">' + arrayColorText[randomColorTextNumber] + '</span>');
	$('.color').css('color', arrayColor[randomColorNumber]);
	$('.addColor').html('<style>.progress-pie-chart.gt-50{background-color:' + arrayColor[randomColorNumber] + ';}.ppc-progress .ppc-progress-fill{background:' + arrayColor[randomColorNumber] + ';position: absolute;border-radius: 50%;left: calc(50% - 130px);top: calc(50% - 130px);width: 260px;height: 260px;clip: rect(0, 130px, 260px, 0);transform: rotate(0deg);}</style>');

	if(randomColorTextNumber == randomColorNumber) {
		statusPoint = 0;
	} else {
		statusPoint = 1;
	}

	var timerId = setInterval(function() {
		$('.ppc-progress-fill').css('transform','rotate('+ time +'deg)');
		if (time > 180) {
			$ppc.addClass('gt-50');
		}
		if (time == 360) {
			clearInterval(timerId);
			failAnswer();
			$ppc.removeClass('gt-50');
		}; time = time+3;
	}, 20);

	$(document).keydown(function(e) {
		if(e.which == 37) {
			if(statusPoint == 0) {
				clearInterval(timerId);
				time = 0;
				$ppc.removeClass('gt-50');
			} else {
				clearInterval(timerId);
				time = 0;
				$ppc.removeClass('gt-50');
			}
		}

		if(e.which == 39) {
			if(statusPoint == 1) {
				clearInterval(timerId);
				time = 0;
				$ppc.removeClass('gt-50');
			} else {
				clearInterval(timerId);
				time = 0;
				$ppc.removeClass('gt-50');
			}
		}
	});

	$trueButton.click(function() {
		if(statusPoint == 0) {
			clearInterval(timerId);
			time = 0;
			$ppc.removeClass('gt-50');
		} else {
			clearInterval(timerId);
			time = 0;
			$ppc.removeClass('gt-50');
		}
	});

	$falseButton.click(function() {
		if(statusPoint == 1) {
			clearInterval(timerId);
			time = 0;
			$ppc.removeClass('gt-50');
		} else {
			clearInterval(timerId);
			time = 0;
			$ppc.removeClass('gt-50');
		}
	});
}*/
