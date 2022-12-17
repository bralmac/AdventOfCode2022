// const dayInput =

const testInput = `$ cd /
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k`

const deepCopyTree = (tree) => {
	const newTree = Object.entries(tree).reduce((newTree, [key, value]) => {
		const nextVale = typeof value === 'object' ? deepCopyTree(value) : value
		return { ...newTree, [key]: value }
	}, {})
	return newTree
}

const deepCopy = deepCopyTree(fileTree)
console.log(deepCopy)

// create a tree of the file system (in the form of nexted objects)

// depth first search the tree to find the size of each directory

// find all the directories under 100000 size
