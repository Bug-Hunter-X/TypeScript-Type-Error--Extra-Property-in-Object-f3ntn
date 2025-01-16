function printCoordinates(coord: { x: number; y: number; }) {
  console.log(`Coordinates: (${coord.x}, ${coord.y})`)
}

const obj = { x: 10, y: 20, z: 30 };

// Solution 1: Type assertion
printCoordinates(obj as { x: number; y: number; });

// Solution 2: Using optional properties
function printCoordinatesOptional(coord: { x: number; y: number; z?: number; }) {
  console.log(`Coordinates: (${coord.x}, ${coord.y})`)
}

printCoordinatesOptional(obj); 