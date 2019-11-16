// Frederick Wittman
// W08288149
// COSC 3020
// Assignment 2
// 11/15/19

// This was helpful to me: https://stackoverflow.com/questions/8922060/how-to-trace-the-path-in-a-breadth-first-search
// The nodes are labeled 0 through n - 1
// Edges go from row to column
// 0 denotes no edge
// Here is a sample of acceptable input:


a = [ [0, 1, 0, 0, 0, 0, 1, 0, 0, 0],
  [1, 0, 0, 0, 1, 0, 1, 0, 0, 1],
  [0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  [0, 1, 1, 1, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 0, 9, 0, 0, 0],
  [1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 1, 15, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 1, 0, 0] ];

  b = augmentingPaths(a, 0, 7);
  console.log(b);


function augmentingPaths (graph, start, end) {
 
// Keep track of vertices with that have been visited with "processedList" to avoid cycles
// If a cycle existed and "end" could not be found the code would execute forever
// Also, using "processedList" may be faster in graphs with a large edges/vertices ratio
processedList = [];
processedList.push(start)
 
// "Queue" keeps track of the growth of the paths as the breadth first search proceeds
queue = [];
queue.push([start]);
 
while (queue.length > 0) {
 path = [];
 path = queue[0];
 queue.splice(0, 1);

 vert = path[path.length - 1];
 
 
 if (vert == end) {
   return path;
 }

 adjacentVerts = [];

 for (var j = 0; j < graph.length; j++) {
   if (graph[vert][j] != 0) {
    adjacentVerts.push(j);
   }
 }

 for (var i = 0; i < adjacentVerts.length; i++) {

   currVert = adjacentVerts[i];

   if (!(processedList.includes(currVert))) {
     processedList.push(currVert);
     newPath = path.slice();
     newPath.push(currVert);
     queue.push(newPath);
   }
 }
}
return ("Failure")
}
