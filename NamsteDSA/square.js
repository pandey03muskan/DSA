function squarePattern(n){
    for(i=1;i<=n;i++){
        let row = ""
        for(j=1;j<=n;j++){
            row+=" * "
        }
        console.log(row)
    }
}

squarePattern(10)