var reverseSubmatrix = function(grid, x, y, k) {
     let n=k
     while(n>0){
        startx=x,endx=k
        while(startx<endx){
            let temp = grid[startx][y]
            grid[startx][y] = grid[endx][y]
            grid[endx][y] = temp
            console.log([startx,y], [endx,y])
            startx++        
            endx--
        }
        n--
        y++
     }
};
let grid = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];
x = 1, y = 0, k = 3
reverseSubmatrix(grid, x, y, k);
console.log(grid)    