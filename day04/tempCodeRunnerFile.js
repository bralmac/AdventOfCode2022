const testInput = `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`

let min = 50
let max = 50

const cleaningList = testInput.split('\n')
const minMax = (items) => {
	const rangePair = items.split(',')
	const [range1, range2] = [rangePair[0].split('-'), rangePair[1].split('-')]
	if (range1[0] < min) {
		min = range1[0]
	} else if (range1[0] > max) {
		max = range1[0]
	} else if (range1[1] < min) {
		min = range1[1]
	} else if (range1[1] > max) {
		max = range1[1]
	}
	console.log(min, max)
}