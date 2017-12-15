exports.makeID = function(){
	return Math.random().toString(36).slice(2, -1);
}

exports.getbetween = function(str, del1, del2){
	var sub1 = str.substring(str.indexOf(del1), str.length);
	return sub1.substring(0,sub1.indexOf(del2));
}