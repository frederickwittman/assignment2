class Graph {
 constructor (numberOfVertices) {
   this.numberOfVertices = numberOfVertices;
   this.AdjList = new Map();
   this.vertList = [];
 }
  addVertex(v) {
   this.AdjList.set(v, []);
   this.vertList.push(v);
 }
 addEdge(v, w, weight) {
   this.AdjList.get(v).push([w, weight]);
   this.AdjList.get(w).push([v, weight]);
 }
 getEdgeWeight (v, w) {
   edges = this.AdjList.get(v);
   for (var i = 0; i < edges.length; i++) {
     if (edges[i][0] == w) {
       return edges[i][1];
     }
   }
   return undefined;
 }
}

function bfs(graph, start, end) {
    queue = []
    queue.push([start])
    while (queue.length > 0) {

        path = queue.slice(1);
        newPath = queue.slice(0);

        node = path[path.length - 1]

        if (node == end) {
            return path
        }
 
        for (var i = 0; i++; i < graph.get(node).length) {
            newPath.push(graph.get(node)[i]);
            queue.push(newPath);
        }
    }
}

g1 = new Graph (6);
vertices = ['A', 'B', 'C', 'D', 'E', 'F'];
for (var i = 0; i < vertices.length; i++) {
 g1.addVertex(vertices[i]);
}
 
g1.addEdge('A', 'B');
g1.addEdge('A', 'D');
g1.addEdge('A', 'E');
g1.addEdge('B', 'C');
g1.addEdge('D', 'E');
g1.addEdge('E', 'F');
g1.addEdge('E', 'C');
g1.addEdge('C', 'F');

console.log(bfs(g1, 'A', 'B'))

function augmentingPath (graph, start, end) {

}
