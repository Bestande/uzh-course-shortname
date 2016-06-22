'use strict';

function prepareShortname(name) {
	// Remove everything in parenthis
	name = name.replace(/\(.*?\)/g, '');
	// Remove CL GV / CL AV prefixes
	name = name.replace(/CL (G|A)V:?/, '');
	// Remove numbers at start
	name = name.replace(/^[0-9a-z]{1,5}/, '');
	// Remove Basismodul prefix. Run twice.
	for (var i = 0; i < 2; i++) {
		name = name.replace(/.*?(((Aufbau|Vertiefungs|Sprach|Basis)modul)|Kolloquium|Seminar|Vorlesung|Übung|Prüfung|Modul|Banking).*?(:|\-|–)/i, '').trim();
	}
	// Remove prefixes like MAT 902 or PHY 101
	name = name.replace(/[A-Z]{3}\s[0-9]{3}\s?/, '');
	// Remove 'M' modules
	name = name.replace(/^[A-Z0-9\s]*:/, '');
	// Remove prefixes from 'Religionswissenschaften' modules: ERWTh, Eth, SRWse, HisF
	name = name.replace(/^[A-Z]{1,4}[a-z]{1,2}[A-Z]{0,2}:/, '');
	return name;
}
module.exports = function (name) {
	name = prepareShortname(name);
	var firstParenthesis = name.indexOf('(');
	if (firstParenthesis === -1) {
		firstParenthesis = Infinity;
	}
	var firstDash = name.indexOf(' -');
	if (firstDash === -1) {
		firstDash = Infinity;
	}
	var firstEmDash = name.indexOf(' –');
	if (firstEmDash === -1) {
		firstEmDash = Infinity;
	}
	var firstColon = name.indexOf(':');
	if (firstColon === -1) {
		firstColon = Infinity;
	}
	var max = Math.min(Math.min(Math.min(firstColon, firstEmDash), firstDash), firstParenthesis);
	if (max === -1) {
		return name;
	}
	return name.substr(0, max).trim();
};
