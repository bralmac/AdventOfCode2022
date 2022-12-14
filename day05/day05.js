//         [F] [Q]         [Q]
// [B]     [Q] [V] [D]     [S]
// [S] [P] [T] [R] [M]     [D]
// [J] [V] [W] [M] [F]     [J]     [J]
// [Z] [G] [S] [W] [N] [D] [R]     [T]
// [V] [M] [B] [G] [S] [C] [T] [V] [S]
// [D] [S] [L] [J] [L] [G] [G] [F] [R]
// [G] [Z] [C] [H] [C] [R] [H] [P] [D]
// 1   2   3   4   5   6   7   8   9

const dayInput = `move 3 from 5 to 2
move 3 from 8 to 4
move 7 from 7 to 3
move 14 from 3 to 9
move 8 from 4 to 1
move 1 from 7 to 5
move 2 from 6 to 4
move 4 from 5 to 7
move 1 from 3 to 6
move 3 from 4 to 3
move 1 from 4 to 1
move 5 from 1 to 9
move 1 from 4 to 6
move 4 from 7 to 4
move 15 from 9 to 2
move 7 from 1 to 6
move 3 from 3 to 5
move 1 from 4 to 9
move 2 from 5 to 3
move 2 from 4 to 9
move 4 from 1 to 6
move 1 from 3 to 1
move 1 from 3 to 2
move 4 from 6 to 3
move 24 from 2 to 8
move 4 from 9 to 8
move 1 from 1 to 3
move 2 from 5 to 4
move 1 from 2 to 4
move 19 from 8 to 1
move 5 from 3 to 9
move 8 from 1 to 3
move 3 from 4 to 1
move 6 from 9 to 5
move 2 from 3 to 4
move 1 from 8 to 5
move 2 from 4 to 6
move 11 from 6 to 1
move 8 from 8 to 7
move 1 from 6 to 5
move 13 from 1 to 3
move 1 from 1 to 7
move 2 from 7 to 8
move 5 from 7 to 1
move 2 from 8 to 4
move 3 from 5 to 3
move 11 from 3 to 1
move 2 from 5 to 3
move 2 from 5 to 3
move 2 from 7 to 1
move 7 from 3 to 1
move 1 from 4 to 5
move 1 from 6 to 4
move 3 from 4 to 7
move 3 from 7 to 1
move 6 from 3 to 5
move 1 from 5 to 9
move 4 from 5 to 4
move 2 from 3 to 4
move 8 from 9 to 2
move 5 from 4 to 6
move 1 from 6 to 5
move 1 from 4 to 9
move 39 from 1 to 7
move 7 from 2 to 6
move 1 from 9 to 3
move 1 from 2 to 7
move 1 from 3 to 1
move 5 from 7 to 3
move 4 from 5 to 1
move 19 from 7 to 9
move 1 from 9 to 8
move 1 from 9 to 7
move 5 from 9 to 3
move 6 from 6 to 7
move 1 from 8 to 3
move 4 from 1 to 4
move 23 from 7 to 6
move 1 from 1 to 6
move 21 from 6 to 2
move 3 from 4 to 8
move 7 from 6 to 1
move 1 from 4 to 9
move 1 from 6 to 7
move 6 from 1 to 2
move 1 from 7 to 4
move 15 from 2 to 8
move 5 from 3 to 8
move 22 from 8 to 7
move 1 from 8 to 1
move 5 from 3 to 4
move 1 from 3 to 2
move 1 from 1 to 2
move 3 from 4 to 8
move 3 from 8 to 9
move 11 from 2 to 1
move 2 from 1 to 4
move 15 from 9 to 5
move 22 from 7 to 3
move 2 from 4 to 9
move 3 from 4 to 2
move 8 from 1 to 8
move 6 from 8 to 6
move 1 from 6 to 2
move 3 from 6 to 9
move 3 from 2 to 7
move 4 from 2 to 9
move 2 from 7 to 5
move 1 from 1 to 7
move 2 from 8 to 2
move 2 from 7 to 5
move 9 from 5 to 3
move 8 from 5 to 2
move 1 from 6 to 4
move 1 from 6 to 9
move 1 from 2 to 9
move 2 from 5 to 1
move 7 from 2 to 3
move 1 from 4 to 3
move 1 from 2 to 4
move 5 from 3 to 4
move 6 from 9 to 3
move 1 from 2 to 6
move 6 from 9 to 6
move 2 from 1 to 8
move 3 from 6 to 3
move 2 from 8 to 6
move 6 from 4 to 1
move 14 from 3 to 9
move 1 from 6 to 4
move 3 from 3 to 9
move 1 from 4 to 5
move 10 from 9 to 6
move 6 from 6 to 7
move 2 from 1 to 8
move 1 from 8 to 6
move 16 from 3 to 2
move 1 from 8 to 1
move 1 from 7 to 1
move 7 from 3 to 4
move 1 from 6 to 5
move 4 from 2 to 3
move 5 from 4 to 9
move 2 from 4 to 5
move 4 from 7 to 4
move 5 from 9 to 6
move 2 from 5 to 4
move 11 from 6 to 7
move 1 from 6 to 8
move 5 from 1 to 5
move 2 from 6 to 4
move 7 from 7 to 3
move 1 from 8 to 6
move 2 from 7 to 3
move 1 from 1 to 3
move 3 from 2 to 8
move 9 from 2 to 5
move 1 from 6 to 1
move 1 from 4 to 8
move 7 from 4 to 7
move 8 from 5 to 6
move 1 from 7 to 2
move 1 from 7 to 4
move 3 from 7 to 8
move 1 from 2 to 3
move 1 from 1 to 2
move 1 from 1 to 7
move 3 from 7 to 6
move 11 from 6 to 2
move 4 from 8 to 7
move 2 from 8 to 7
move 15 from 3 to 2
move 7 from 9 to 4
move 3 from 3 to 2
move 4 from 4 to 7
move 5 from 7 to 3
move 3 from 4 to 6
move 3 from 6 to 9
move 1 from 4 to 2
move 1 from 8 to 1
move 2 from 3 to 7
move 2 from 3 to 7
move 23 from 2 to 5
move 1 from 9 to 1
move 1 from 7 to 9
move 1 from 1 to 8
move 8 from 7 to 1
move 1 from 8 to 4
move 1 from 4 to 2
move 3 from 9 to 8
move 1 from 7 to 9
move 22 from 5 to 9
move 1 from 8 to 5
move 1 from 7 to 4
move 1 from 4 to 5
move 1 from 8 to 3
move 2 from 9 to 3
move 5 from 5 to 2
move 5 from 5 to 4
move 3 from 2 to 7
move 1 from 7 to 3
move 6 from 1 to 7
move 4 from 3 to 1
move 6 from 2 to 8
move 1 from 5 to 6
move 2 from 8 to 1
move 12 from 9 to 4
move 8 from 9 to 4
move 1 from 2 to 9
move 2 from 9 to 8
move 3 from 2 to 8
move 5 from 8 to 6
move 7 from 7 to 1
move 4 from 8 to 9
move 1 from 6 to 1
move 17 from 4 to 7
move 1 from 2 to 4
move 2 from 4 to 1
move 6 from 4 to 6
move 1 from 1 to 4
move 7 from 1 to 5
move 9 from 7 to 9
move 8 from 9 to 8
move 5 from 8 to 3
move 1 from 5 to 6
move 2 from 3 to 6
move 1 from 9 to 1
move 1 from 6 to 1
move 10 from 6 to 1
move 1 from 5 to 1
move 2 from 9 to 1
move 1 from 9 to 7
move 2 from 6 to 8
move 2 from 8 to 2
move 1 from 6 to 8
move 22 from 1 to 9
move 9 from 7 to 5
move 1 from 8 to 1
move 2 from 8 to 3
move 4 from 5 to 9
move 1 from 8 to 3
move 5 from 1 to 9
move 2 from 7 to 3
move 2 from 4 to 7
move 1 from 8 to 5
move 2 from 2 to 4
move 1 from 5 to 8
move 9 from 5 to 8
move 2 from 7 to 5
move 2 from 4 to 5
move 3 from 8 to 4
move 3 from 4 to 3
move 2 from 8 to 6
move 1 from 6 to 4
move 3 from 5 to 9
move 1 from 6 to 3
move 12 from 3 to 5
move 1 from 3 to 1
move 7 from 5 to 4
move 1 from 1 to 3
move 1 from 8 to 1
move 7 from 5 to 1
move 6 from 9 to 6
move 29 from 9 to 5
move 2 from 4 to 6
move 26 from 5 to 2
move 24 from 2 to 7
move 1 from 3 to 2
move 8 from 1 to 7
move 7 from 6 to 9
move 2 from 5 to 3
move 1 from 6 to 4
move 3 from 8 to 5
move 2 from 3 to 8
move 2 from 2 to 8
move 5 from 9 to 2
move 27 from 7 to 2
move 2 from 8 to 3
move 2 from 9 to 5
move 3 from 8 to 5
move 2 from 7 to 4
move 3 from 4 to 7
move 2 from 3 to 2
move 4 from 5 to 1
move 5 from 7 to 2
move 29 from 2 to 8
move 9 from 8 to 3
move 2 from 4 to 8
move 7 from 3 to 2
move 3 from 5 to 4
move 1 from 7 to 5
move 3 from 5 to 6
move 2 from 1 to 8
move 2 from 6 to 8
move 3 from 4 to 2
move 4 from 4 to 2
move 1 from 6 to 8
move 8 from 2 to 4
move 2 from 3 to 5
move 1 from 4 to 1
move 3 from 1 to 2
move 4 from 8 to 2
move 3 from 4 to 9
move 3 from 4 to 1
move 2 from 9 to 5
move 1 from 4 to 6
move 4 from 5 to 1
move 1 from 6 to 8
move 1 from 9 to 3
move 4 from 2 to 3
move 15 from 8 to 2
move 9 from 8 to 1
move 1 from 3 to 9
move 5 from 1 to 9
move 3 from 9 to 7
move 2 from 7 to 6
move 3 from 3 to 2
move 1 from 7 to 8
move 1 from 9 to 6
move 1 from 9 to 8
move 2 from 8 to 2
move 1 from 1 to 2
move 1 from 3 to 7
move 4 from 1 to 7
move 19 from 2 to 5
move 1 from 1 to 4
move 1 from 7 to 4
move 1 from 1 to 5
move 3 from 1 to 4
move 1 from 1 to 8
move 6 from 2 to 4
move 7 from 2 to 1
move 2 from 7 to 9
move 8 from 2 to 8
move 2 from 7 to 3
move 1 from 6 to 4
move 10 from 4 to 6
move 5 from 6 to 7
move 2 from 9 to 8
move 6 from 8 to 9
move 1 from 2 to 3
move 2 from 8 to 3
move 5 from 1 to 8
move 8 from 5 to 2
move 8 from 8 to 7
move 7 from 2 to 8
move 1 from 1 to 2
move 1 from 9 to 7
move 1 from 4 to 2
move 2 from 2 to 6
move 5 from 9 to 3
move 2 from 8 to 6
move 2 from 3 to 9
move 4 from 8 to 6
move 7 from 6 to 1
move 8 from 1 to 5
move 1 from 8 to 7
move 1 from 9 to 6
move 12 from 5 to 3
move 1 from 4 to 8
move 2 from 9 to 5
move 1 from 2 to 3
move 3 from 5 to 1
move 1 from 1 to 5
move 21 from 3 to 8
move 2 from 1 to 5
move 6 from 5 to 7
move 2 from 5 to 6
move 10 from 6 to 9
move 1 from 6 to 8
move 13 from 8 to 2
move 2 from 5 to 4
move 2 from 4 to 3
move 4 from 9 to 1
move 5 from 7 to 8
move 12 from 8 to 1
move 5 from 9 to 6
move 1 from 3 to 7
move 2 from 6 to 5
move 11 from 2 to 1
move 1 from 8 to 4
move 16 from 1 to 9
move 1 from 2 to 6
move 1 from 8 to 5
move 12 from 9 to 3
move 14 from 7 to 2
move 1 from 7 to 9
move 1 from 4 to 2
move 1 from 7 to 5
move 3 from 9 to 5
move 4 from 6 to 9
move 3 from 9 to 4
move 1 from 8 to 4
move 2 from 4 to 5
move 1 from 7 to 1
move 5 from 3 to 5
move 2 from 4 to 2
move 8 from 2 to 7
move 7 from 2 to 4
move 1 from 3 to 7
move 3 from 9 to 7
move 2 from 2 to 9
move 3 from 4 to 5
move 6 from 1 to 8
move 6 from 1 to 5
move 3 from 9 to 2
move 22 from 5 to 9
move 1 from 5 to 6
move 2 from 2 to 3
move 5 from 7 to 6
move 5 from 8 to 9
move 2 from 7 to 2
move 20 from 9 to 4
move 1 from 8 to 3
move 2 from 2 to 5
move 1 from 2 to 5
move 15 from 4 to 8
move 1 from 5 to 7
move 6 from 9 to 1
move 5 from 4 to 8
move 2 from 4 to 8
move 1 from 2 to 1
move 5 from 6 to 5
move 5 from 5 to 7
move 1 from 9 to 8
move 5 from 7 to 2
move 2 from 5 to 1
move 4 from 7 to 5
move 1 from 5 to 9
move 1 from 6 to 8
move 1 from 7 to 2
move 6 from 3 to 4
move 3 from 5 to 7
move 1 from 9 to 2
move 6 from 2 to 3
move 1 from 3 to 4
move 13 from 8 to 9
move 7 from 1 to 5
move 6 from 9 to 2
move 1 from 1 to 4
move 6 from 2 to 3
move 1 from 1 to 4
move 5 from 9 to 7
move 11 from 8 to 4
move 7 from 7 to 3
move 2 from 7 to 8
move 1 from 8 to 2
move 8 from 4 to 1
move 2 from 1 to 6
move 2 from 5 to 8
move 3 from 1 to 9
move 1 from 8 to 2
move 11 from 3 to 2
move 2 from 8 to 9
move 9 from 4 to 7
move 11 from 3 to 8
move 7 from 9 to 6
move 5 from 4 to 6
move 3 from 7 to 3
move 1 from 7 to 1
move 5 from 7 to 6
move 2 from 3 to 5
move 1 from 3 to 4
move 5 from 2 to 5
move 1 from 1 to 7
move 1 from 4 to 8
move 1 from 7 to 6
move 7 from 5 to 7
move 2 from 5 to 7
move 3 from 1 to 7
move 1 from 2 to 3
move 1 from 6 to 4
move 1 from 3 to 4
move 1 from 5 to 3
move 18 from 6 to 4
move 9 from 7 to 1
move 14 from 4 to 6
move 3 from 6 to 4
move 12 from 6 to 7
move 2 from 5 to 3
move 3 from 7 to 4
move 6 from 4 to 7
move 5 from 1 to 7
move 5 from 4 to 5
move 5 from 2 to 1
move 9 from 8 to 4
move 9 from 1 to 3
move 2 from 8 to 2
move 4 from 2 to 4
move 1 from 7 to 6
move 1 from 2 to 3
move 1 from 8 to 9
move 1 from 6 to 9
move 2 from 9 to 3
move 3 from 4 to 1
move 13 from 3 to 5
move 12 from 5 to 1
move 7 from 1 to 8
move 1 from 3 to 6
move 4 from 5 to 4
move 1 from 5 to 2
move 8 from 4 to 9`

// BDFQNDQVJ
const arr1 = ['B', 'S', 'J', 'Z', 'V', 'D', 'G']
const arr2 = ['P', 'V', 'G', 'M', 'S', 'Z']
const arr3 = ['F', 'Q', 'T', 'W', 'S', 'B', 'L', 'C']
const arr4 = ['Q', 'V', 'R', 'M', 'W', 'G', 'J', 'H']
const arr5 = ['D', 'M', 'F', 'N', 'S', 'L', 'C']
const arr6 = ['D', 'C', 'G', 'R']
const arr7 = ['Q', 'S', 'D', 'J', 'R', 'T', 'G', 'H']
const arr8 = ['V', 'F', 'P']
const arr9 = ['J', 'T', 'S', 'R', 'D']
const arrayValues = {
	1: arr1,
	2: arr2,
	3: arr3,
	4: arr4,
	5: arr5,
	6: arr6,
	7: arr7,
	8: arr8,
	9: arr9,
}

const testInput = `move 3 from 5 to 2`
const RUNIT = dayInput.split('\n')

// Find move command from each string
const commandList = (commands) => {
	const [moveX, moveFrom, moveTo] = commands
		.match(/move (\d+) from (\d+) to (\d+)/)
		.slice(1)
		.map(Number)
	// return { moveX, moveFrom, moveTo }

	// .unshift from old array and .shift to new array
	// for (i = 0; i < moveX; i++) {
	// 	if (arrayValues[moveFrom].length > moveX) {
	// 		moveY = arrayValues[moveFrom].length
	// 		const cratesToMove = arrayValues[moveFrom].splice(0, moveY)
	// 		arrayValues[moveTo].unshift(...cratesToMove)
	// 	} else {
	// 		const cratesToMove = arrayValues[moveFrom].splice(0, moveX)
	// 		arrayValues[moveTo].unshift(...cratesToMove)
	// 	}
	// }

	// for (i = 0; i < moveX; i++) {
	// 	if (arrayValues[moveFrom].length > moveX) {
	// 		moveY = arrayValues[moveFrom].length
	// 		const cratesToMove = arrayValues[moveFrom].splice(0, moveY)
	// 		arrayValues[moveTo].unshift(...cratesToMove)
	// 	} else {
	const cratesToMove = arrayValues[moveFrom].splice(0, moveX)
	arrayValues[moveTo].unshift(...cratesToMove)
	// 	}
	// }

	console.log(arrayValues)
	return (results = [
		arr1[0],
		arr2[0],
		arr3[0],
		arr4[0],
		arr5[0],
		arr6[0],
		arr7[0],
		arr8[0],
		arr9[0],
	])
}

// const stackTops = results.map((result) => result[0]).join('')

const craneGame = RUNIT.map(commandList)
console.log(results)

// Very important comment to test git
