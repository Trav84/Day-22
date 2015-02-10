var expect = chai.expect;

describe('max', function() {

	it('Should take 2 arguments', function(){
		expect(function() { max() }).to.throw('No arguments were passed to the function.');
		expect(function() { max(1) }).to.throw('Only 1 argument was passed to the function.');
		expect(function() { max(1,2,3) }).to.throw('The function should only have 2 arguments.');
	});

	it('Both arguments should be numbers', function(){
		expect(function() { max("dog", 1) }).to.throw('The first argument is not a number.');
		expect(function() { max(1, "cat") }).to.throw('The second argument is not a number.');
		expect(function() { max(true, 1) }).to.throw('The first argument is not a number.');
		expect(function() { max(10, [1,2,3]) }).to.throw('The second argument is not a number.');
		expect(function() { max(50, {obj: "yes"}) }).to.throw('The second argument is not a number.');
		expect(function() { max(0, false) }).to.throw('The second argument is not a number.');
	});

	it('Should return the largest number', function() {
		expect(max(1,2)).to.equal(2);
		expect(max(0,10)).to.equal(10);
		expect(max(-10,-5)).to.equal(-5);
		expect(max(50,0)).to.equal(50);
		expect(max(5,5)).to.equal(5);
		expect(max(1.5,1)).to.equal(1.5);
		expect(max(0, 0.5)).to.equal(0.5);
	});
});

describe('maxOfThree', function() {

	it('Should take 3 arguments', function(){
		expect(function() { maxOfThree() }).to.throw('No arguments were passed to the function.');
		expect(function() { maxOfThree(1) }).to.throw('Only one argument was passed to the function.');
		expect(function() { maxOfThree(1,5) }).to.throw('Only two arguments were passed to the function.');
		expect(function() { maxOfThree(1,2,3,4) }).to.throw('The function should only have 3 arguments.');
	});

	it('All the arguments should be numbers', function(){
		expect(function() { maxOfThree("dog", 1, 2) }).to.throw('The first argument is not a number.');
		expect(function() { maxOfThree(1, "cat", 1) }).to.throw('The second argument is not a number.');
		expect(function() { maxOfThree(1, 2, "unicorn") }).to.throw('The third argument is not a number.');
		expect(function() { maxOfThree(true, 1, 2) }).to.throw('The first argument is not a number.');
		expect(function() { maxOfThree(10, [1,2,3], 9) }).to.throw('The second argument is not a number.');
		expect(function() { maxOfThree(50, {obj: "yes"},5) }).to.throw('The second argument is not a number.');
		expect(function() { maxOfThree(0, false, 2.3) }).to.throw('The second argument is not a number.');
	});

	it('Should return the largest number', function() {
		expect(maxOfThree(1,2,3)).to.equal(3);
		expect(maxOfThree(3,2,1)).to.equal(3);
		expect(maxOfThree(1,3,2)).to.equal(3);
		expect(maxOfThree(1,1,1)).to.equal(1);
		expect(maxOfThree(1,3,3)).to.equal(3);
		expect(maxOfThree(0,10,1.5)).to.equal(10);
		expect(maxOfThree(-10,-5,-1)).to.equal(-1);
		expect(maxOfThree(50,0,0)).to.equal(50);
		expect(maxOfThree(5,5,5)).to.equal(5);
		expect(maxOfThree(-1,1,-50)).to.equal(1);
	});
});

describe('isVowel', function() {

	it('Should take 1 argument', function(){
		expect(function() { isVowel() }).to.throw('No arguments were passed to the function.');
		expect(function() { isVowel("c","E","A") }).to.throw('More than one argument was passed to the function.');
	});

	it('The argument should be a string', function(){
		expect(function() { isVowel(2) }).to.throw('The argument is not a string.');
		expect(function() { isVowel(true) }).to.throw('The argument is not a string.');
		expect(function() { isVowel([1,2,3]) }).to.throw('The argument is not a string.');
		expect(function() { isVowel({obj: 2}) }).to.throw('The argument is not a string.');
	});

	it('Argument should be only a single character', function(){
		expect(function() { isVowel("cat") }).to.throw('String is longer than 1 character.');
		expect(function() { isVowel("da") }).to.throw('String is longer than 1 character.');
		expect(function() { isVowel("12345") }).to.throw('String is longer than 1 character.');
	});

	it('Should true if character is a vowel, otherwise false', function() {
		expect(isVowel("C")).to.equal(false);
		expect(isVowel("c")).to.equal(false);
		expect(isVowel("A")).to.equal(true);
		expect(isVowel("a")).to.equal(true);
		expect(isVowel("e")).to.equal(true);
		expect(isVowel("Y")).to.equal(false);
		expect(isVowel("O")).to.equal(true);
		expect(isVowel("X")).to.equal(false);
	});
});

describe('rovarspraket', function() {

	it('Should take 1 argument', function(){
		expect(function() { rovarspraket() }).to.throw('No arguments were passed to the function.');
		expect(function() { rovarspraket("I hate puppies","And babies") }).to.throw('More than one argument was passed to the function.');
	});

	it('The argument should be a string', function(){
		expect(function() { rovarspraket(2) }).to.throw('The argument is not a string.');
		expect(function() { rovarspraket(true) }).to.throw('The argument is not a string.');
		expect(function() { rovarspraket([1,2,3]) }).to.throw('The argument is not a string.');
		expect(function() { rovarspraket({obj: 1}) }).to.throw('The argument is not a string.');
	});

	it('Should return the string doubling the consenents and inserting o after', function() {
		expect(rovarspraket("cat hat")).to.equal("cocatot hohatot");
		expect(rovarspraket("cat")).to.equal("cocatot");
		expect(rovarspraket("crazy pants")).to.equal("cocrorazozyoy popanontotsos");
		expect(rovarspraket("dog bites man")).to.equal("dodogog bobitotesos momanon");
	});
});

describe('sum', function() {

	it('Should take 1 argument', function(){
		expect(function() { sum() }).to.throw('No arguments were passed to the function.');
		expect(function() { sum([1,2,3],[1]) }).to.throw('The function should only have 1 argument');
	});

	it('Argument should be an array', function(){
		expect(function() { sum("dog") }).to.throw('The argument is not an array.');
		expect(function() { sum(1) }).to.throw('The argument is not an array.');
		expect(function() { sum(true) }).to.throw('The argument is not an array.');
		expect(function() { sum({obj: 5}) }).to.throw('The argument is not an array.');
	});

	it('Array should contain only numbers', function(){
		expect(function() { sum(["dog"]) }).to.throw('The argument should contain only numbers.');
		expect(function() { sum([true, false]) }).to.throw('The argument should contain only numbers.');
		expect(function() { sum([{obj: 5}]) }).to.throw('The argument should contain only numbers.');
	});

	it('Should return the total of all numbers in the array', function() {
		expect(sum([1])).to.equal(1);
		expect(sum([5,5])).to.equal(10);
		expect(sum([10,100,10,100])).to.equal(220);
		expect(sum([1000, 1])).to.equal(1001);
		expect(sum([1.5, 1.5])).to.equal(3);
		expect(sum([5.4, 5])).to.equal(10.4);
		expect(sum([-1,1])).to.equal(0);
	});
});

describe('multiply', function() {

	it('Should take 1 argument', function(){
		expect(function() { multiply() }).to.throw('No arguments were passed to the function.');
		expect(function() { multiply([1,2,3],[1]) }).to.throw('The function should only have 1 argument');
	});

	it('Argument should be an array', function(){
		expect(function() { multiply("dog") }).to.throw('The argument is not an array.');
		expect(function() { multiply(1) }).to.throw('The argument is not an array.');
		expect(function() { multiply(true) }).to.throw('The argument is not an array.');
		expect(function() { multiply({obj: 5}) }).to.throw('The argument is not an array.');
	});

	it('Array should contain only numbers', function(){
		expect(function() { multiply(["dog"]) }).to.throw('The argument should contain only numbers.');
		expect(function() { multiply([true, false]) }).to.throw('The argument should contain only numbers.');
		expect(function() { multiply([{obj: 5}]) }).to.throw('The argument should contain only numbers.');
	});

	it('Should multiply all the numbers in the array together', function() {
		expect(multiply([1])).to.equal(1);
		expect(multiply([5,5])).to.equal(25);
		expect(multiply([1,2,3])).to.equal(6);
		expect(multiply([1.5,0])).to.equal(0);
		expect(multiply([2,2.5])).to.equal(5);
		expect(multiply([1,1,1,1,1])).to.equal(1);
	});
});

describe('reverse', function() {

	it('Should take 1 argument', function(){
		expect(function() { reverse() }).to.throw('No arguments were passed to the function.');
		expect(function() { reverse("I hate puppies","And babies") }).to.throw('More than one argument was passed to the function.');
	});

	it('The argument should be a string', function(){
		expect(function() { reverse(2) }).to.throw('The argument is not a string.');
		expect(function() { reverse(true) }).to.throw('The argument is not a string.');
		expect(function() { reverse([1,2,3]) }).to.throw('The argument is not a string.');
		expect(function() { reverse({obj: 1}) }).to.throw('The argument is not a string.');
	});

	it('Should return the reversal of the given string', function() {
		expect(reverse("cat hat")).to.equal("tah tac");
		expect(reverse("cat")).to.equal("tac");
		expect(reverse("crazy pants")).to.equal("stnap yzarc");
		expect(reverse("dog bites man")).to.equal("nam setib god");
	});
});

describe('findLongestWord', function() {

	it('Should take 1 argument', function(){
		expect(function() { findLongestWord() }).to.throw('No arguments were passed to the function.');
		expect(function() { findLongestWord([1,2,3],[1]) }).to.throw('The function should only have 1 argument');
	});

	it('Argument should be an array', function(){
		expect(function() { findLongestWord("dog") }).to.throw('The argument is not an array.');
		expect(function() { findLongestWord(1) }).to.throw('The argument is not an array.');
		expect(function() { findLongestWord(true) }).to.throw('The argument is not an array.');
		expect(function() { findLongestWord({obj: 5}) }).to.throw('The argument is not an array.');
	});

	it('Array should contain only strings', function(){
		expect(function() { findLongestWord([1,2,3]) }).to.throw('The argument should contain only strings.');
		expect(function() { findLongestWord([true, false]) }).to.throw('The argument should contain only strings.');
		expect(function() { findLongestWord([{obj: 5}]) }).to.throw('The argument should contain only strings.');
	});

	it('Should return the longest word in the array', function() {
		expect(findLongestWord(["dog", "unicorn"])).to.equal(7);
		expect(findLongestWord(["dog"])).to.equal(3);
		expect(findLongestWord(["dog", "cat"])).to.equal(3);
		expect(findLongestWord(["cats", "treehouse"])).to.equal(9);
		expect(findLongestWord(["gravel", "eye"])).to.equal(6);
		expect(findLongestWord(["dog", "mouse", "cat", "forest"])).to.equal(6);
	});
});

describe('filterLongWords', function() {

	it('Should take 2 argument', function(){
		expect(function() { filterLongWords() }).to.throw('No arguments were passed to the function.');
		expect(function() { filterLongWords(["cat","mouse"]) }).to.throw('The function should have 2 arguments.');
		expect(function() { filterLongWords(["cat"],1,5) }).to.throw('The function should have 2 arguments');
	});

	it('First argument should be an array', function(){
		expect(function() { filterLongWords("dog", 1) }).to.throw('The first argument is not an array.');
		expect(function() { filterLongWords(1, 5) }).to.throw('The first argument is not an array.');
		expect(function() { filterLongWords(true, 3) }).to.throw('The first argument is not an array.');
		expect(function() { filterLongWords({obj: 5}, 10) }).to.throw('The first argument is not an array.');
	});

	it('Second argument should be a number', function(){
		expect(function() { filterLongWords(["cat", "mouse"], "house")}).to.throw('The second argument is not a number');
		expect(function() { filterLongWords(["cat", "mouse"], true)}).to.throw('The second argument is not a number');
		expect(function() { filterLongWords(["cat", "mouse"], [1])}).to.throw('The second argument is not a number');
		expect(function() { filterLongWords(["cat", "mouse"], {obj: 6})}).to.throw('The second argument is not a number');
	});

	it('Second argument should be a positive number', function() {
		expect(function() { filterLongWords(["cat", "mouse"], -5)}).to.throw('The second argument is not a positive number');
	});

	it('The array should contain only strings', function(){
		expect(function() { filterLongWords([1,2,3], 10) }).to.throw('The array should contain only strings.');
		expect(function() { filterLongWords([true, false], 5) }).to.throw('The array should contain only strings.');
		expect(function() { filterLongWords([{obj: 5}], 3) }).to.throw('The array should contain only strings.');
	});

	it('Should return words longer than the parameter given', function() {
		expect(filterLongWords(["dog", "slayer"], 5)).to.eql(["slayer"]);
		expect(filterLongWords(["dog"],10)).to.eql([]);
		expect(filterLongWords(["dog", "cat"], 2)).to.eql(["dog","cat"]);
		expect(filterLongWords(["cats", "treehouse"], 5)).to.eql(["treehouse"]);
		expect(filterLongWords(["gravel", "eye"], 3)).to.eql(["gravel"]);
		expect(filterLongWords(["dog", "mouse", "cat", "forest"], 3)).to.eql(["mouse","forest"]);
	});
});

describe('charFreq', function() {

	it('Should take 1 argument', function(){
		expect(function() { charFreq() }).to.throw('No arguments were passed to the function.');
		expect(function() { charFreq("I hate puppies","And babies") }).to.throw('More than one argument was passed to the function.');
	});

	it('The argument should be a string', function(){
		expect(function() { charFreq(2) }).to.throw('The argument is not a string.');
		expect(function() { charFreq(true) }).to.throw('The argument is not a string.');
		expect(function() { charFreq([1,2,3]) }).to.throw('The argument is not a string.');
		expect(function() { charFreq({obj: 5}) }).to.throw('The argument is not a string.');
	});

	it('Should return an object containing the frequency of each character in the given string', function() {
		expect(charFreq("aaaAA")).to.eql({a:3, A:2});
		expect(charFreq("cacaca")).to.eql({a:3, c:3});
		expect(charFreq("aabbccddee")).to.eql({a:2,b:2,c:2,d:2,e:2});
		expect(charFreq("aa bb ee gg aa")).to.eql({a:4,b:2,e:2,g:2});
	});
});


