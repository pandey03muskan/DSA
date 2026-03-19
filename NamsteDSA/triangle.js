// *
// **
// ***
// ****

function LeftHalfTriangle(n){
    for(let i=0;i<n;i++){
        let row=""
        for(let j=0;j<=i;j++){
           row+=" * "
        }
        console.log(row)
    }
}

LeftHalfTriangle(12)


// 1
// 12
// 123
// 1234
// 12345

function LeftHalfTriangleNumbersJ(n){
    for(let i=1;i<=n;i++){
       let row=""
       for(let j=1;j<=i;j++){
          row+=j
       }
       console.log(row)
    }
}

LeftHalfTriangleNumbersJ(10)


//1
//22
//333
//4444
//55555

function LeftHalfTriangleNumbersi(n){
    for(let i=1;i<=n;i++){
       let row=""
       for(let j=1;j<=i;j++){
          row+= " " +i+ " "
       }
       console.log(row)
    }
}

LeftHalfTriangleNumbersi(10)


// 12345
// 1234
// 123
// 12
// 1

function LeftReverseTriangle(n){
    for(let i=0;i<n;i++){
    let row = ""
     for(j=1;j<=(n-i);j++){
        row+=j
     }
     console.log(row)
    }
}

LeftReverseTriangle(9)



//***** 
//**** 
//***
//**
//*

function LeftReverseTriangleStar(n){
    for(let i=0;i<n;i++){
    let row = ""
     for(j=1;j<=(n-i);j++){
        row+="*"
     }
     console.log(row)
    }
}

LeftReverseTriangleStar(9)



//   *
//  **
// ***
//****

function RightTraingle(n){
    for(let i=0;i<n;i++){
       let row=""
       for(let j=0;j<(n-i);j++){
            row+=" "
       }
       for(let j=0;j<=i;j++){
         row+="*"
       }
       console.log(row)
    }
}

RightTraingle(10)


function ZeroOneTriangle(n){
   for(let i=0;i<n;i++){
      let row=""
      let temp=1
      for(let j=0;j<=i;j++){
         row+=temp
         if(temp==1){
            temp=0
         }else{
            temp=1
         }
      }
      console.log(row)
   }
}

ZeroOneTriangle(10)

function ZeroOneTriangleWithoutRefresh(n){
   let temp=1
   for(let i=0;i<n;i++){
      let row=""
      for(let j=0;j<=i;j++){
         row+=temp
         if(temp==1){
            temp=0
         }else{
            temp=1
         }
      }
      console.log(row)
   }
}

ZeroOneTriangleWithoutRefresh(10)