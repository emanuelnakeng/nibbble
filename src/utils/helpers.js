const getRandomArrayItems = (arr, items) => {
	const shuffled = arr.sort(() => 0.5 - Math.random());
	console.log(shuffled);

	return shuffled.slice(0, items);
};

const checkRandomNumber = (arr, number) => {
	if (number > arr.length - 1) {
		return 0;
	}
	if (number < 0) {
		return arr.length - 1;
	}
	return number;
};

export { getRandomArrayItems, checkRandomNumber };
