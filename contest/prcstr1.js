var processStr = function(s) {
    let i=0
    let news = []
    while(i<s.length){
        if(s[i]!="#" && s[i]!="*" && s[i]!="%"){
            news.push(s[i]);
            console.log(news)
        }
        if(s[i]=="#"){
            if (news.length!=0){
               news = news.concat(news)
               console.log("# ",news)
            }
        }else if(s[i]=="*"){
            if (news.length!=0){
                news.pop()
                console.log("* ",news)
            }
        }else if(s[i]=="%"){
            if(news.length!=0){
                news.reverse()
                console.log("% ",news)
            }
        }
        i++
    }
    return news.join('')
};
console.log(processStr("a#b%*"))