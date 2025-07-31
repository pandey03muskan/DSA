// 121. Best Time to Buy and Sell Stock  (efficient way)
var maxProfit = function(prices) {
    let maxprofit = 0
    let min = prices[0]
    let i = 0
    while(i<prices.length){
        if(prices[i]<min){
            min = prices[i]
        }
        if(i!=(prices.length-1)) {
            if(prices[i+1]>min){
                if((prices[i+1]-min)>maxprofit){
                    maxprofit = prices[i+1]-min
                }
            }
        }
        i++
    }
    return maxprofit;
};