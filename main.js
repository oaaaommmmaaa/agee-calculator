function change() {
	var age = document.getElementById('age').value;
	document.getElementById('months').value = (age * 12 ) + " " + "months";
	
	document.getElementById('days').value = (age * 12 * 30 ) + " " + "days";
	
	document.getElementById('hours').value = (age * 12 * 30 * 24 ) + " " + "hours";
	
	document.getElementById('min').value = (age * 12 * 30 * 24 * 60) + " " + "minutes";
	
	document.getElementById('sec').value = (age * 12 * 30 * 24 * 60 * 60 ) + " " + "seconds";
}