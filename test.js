import test from 'ava';
import parser from './';

var tests = [
	{
		input: 'CL GV: Quantitative Methoden in der Computerlinguistik',
		output: 'Quantitative Methoden in der Computerlinguistik'
	},
	{
		input: 'CL AV Programmiertechniken in der Computerlinguistik III',
		output: 'Programmiertechniken in der Computerlinguistik III'
	},
	{
		input: 'BWL III (V+Ü) (Business Administration III)',
		output: 'BWL III'
	},
	{
		input: 'Mathematik III für Wirtschaftswissenschaftler (Mathematics III for economists)',
		output: 'Mathematik III für Wirtschaftswissenschaftler'
	},
	{
		input: '066b Aufbaumodul I - Geschichte der Neuzeit: Bachelorseminar: Staatlichkeit in der frühen Neuzeit: Konföderationen, Imperien und zusammengesetzte Staaten (2-semestrig, Beginn HS16)',
		output: 'Staatlichkeit in der frühen Neuzeit'
	},
	{
		input: '159 Aufbaumodul 3 NDL (SU): Poetik und Praxis des Notierens',
		output: 'Poetik und Praxis des Notierens'
	},
	{
		input: 'Basismodul: Religion',
		output: 'Religion'
	},
	{
		input: '001 Einführung in die allgemeine Phonetik und Phonologie, für Studierende der Romanistik',
		output: 'Einführung in die allgemeine Phonetik und Phonologie, für Studierende der Romanistik'
	},
	{
		input: '260 Sprachmodul 2: Fortgeschrittene I Norwegisch (PR)',
		output: 'Fortgeschrittene I Norwegisch'
	},
	{
		input: '274a Vertiefungsmodul Skandinavische Mediävistik (PR): Mythen, Medien, Memory. Die Literaturen im skandinavischen Mittelalter',
		output: 'Mythen, Medien, Memory. Die Literaturen im skandinavischen Mittelalter'
	},
	{
		input: 'MAT 902 Stochastik II',
		output: 'Stochastik II'
	},
	{
		input: 'ESC 411 Computational Science I',
		output: 'Computational Science I'
	},
	{
		input: 'ERWTh: Einführung in die Religionswissenschaft',
		output: 'Einführung in die Religionswissenschaft'
	},
	{
		input: 'GEO 101 Einführung in Geographie',
		output: 'Einführung in Geographie'
	},
	{
		input: 'INI 431 Readings in Neuroinformatics',
		output: 'Readings in Neuroinformatics'
	},
	{
		input: '968 (WM) Einführung in die Testkonstruktion: Theorie und Praxis',
		output: 'Einführung in die Testkonstruktion'
	},
	{
		input: '951 (WM) Real Life Health Outcome Measurement',
		output: 'Real Life Health Outcome Measurement'
	},
	{
		input: 'M SE BW 1: Berufliche Weiterbildung, Seminar',
		output: 'Berufliche Weiterbildung, Seminar'
	},
	{
		input: 'M SE PP 4: Elaborierte statistische Verfahren',
		output: 'Elaborierte statistische Verfahren'
	},
	{
		input: 'MS53 Kolloquium für Masterstudierende: Linguistisches Forschungskolloquium',
		output: 'Linguistisches Forschungskolloquium'
	},
	{
		input: 'ETh: Einführung in die Theologie',
		output: 'Einführung in die Theologie'
	},
	{
		input: '002a Proseminario I di linguistica italiana: Elementi di linguistica sincronica',
		output: 'Elementi di linguistica sincronica'
	},
	{
		input: 'NT 2: Grundwissen Neues Testament',
		output: 'Grundwissen Neues Testament'
	},
	{
		input: 'SRWse: Bachelorseminar Systematische Religionswissenschaft',
		output: 'Bachelorseminar Systematische Religionswissenschaft'
	},
	{
		input: 'HisF: Masterseminar Religionsgeschichte (ohne SA)',
		output: 'Masterseminar Religionsgeschichte'
	},
	{
		input: 'Vorlesung (MA): Barockskulptur in Europa. Positionen zwischen 1650 und 1800',
		output: 'Barockskulptur in Europa. Positionen zwischen 1650 und 1800'
	},
	{
		input: 'Übung (MA): Stille, Gewalt und Erinnerung: Körperbilder aus der zeitgenössischen Kunst in der Türkei',
		output: 'Stille, Gewalt und Erinnerung'
	},
	{
		input: 'Wiederholungsprüfung: Wirtschaftsinformatik (Re-examination: Business Informatics)',
		output: 'Wirtschaftsinformatik'
	},
	{
		input: 'LTK Modul 5: Zuchtmanagement Nagetiere',
		output: 'Zuchtmanagement Nagetiere'
	},
	{
		input: '670 Ergänzungsmodul Sprachwissenschaft: 2 semestriges Seminar: Zwischen Tempus und Genus verbi: Resultativa in den slavischen Sprachen',
		output: 'Zwischen Tempus und Genus verbi'
	},
	{
		input: 'Banking: Regulation and Supervision (L)',
		output: 'Regulation and Supervision'
	},
	{
		input: 'Private Banking: Aktuelle Herausforderungen in der Vermögensverwaltung (S) (Private Banking: Current Challenges in Wealth Management)',
		output: 'Aktuelle Herausforderungen in der Vermögensverwaltung'
	}
];

for (let [, _test] of tests.entries()) {
	test(`"${_test.input}" --> "${_test.output}"`, t => t.is(_test.output, parser(_test.input)));
}
