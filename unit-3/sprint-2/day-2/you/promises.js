// callback

// 1.login/logout
// 2.searching movies
// 3.payment
// 4.food ordering
// 5.downloading

// instragram
// promise :- show the post --> filfill or rejected
// time - pending


// step 1
let url = "https://www.meme.net/babubhaiya"
let url2 = "https://www.meme.net/babubhaiya1"
let url3 = "https://www.meme.net/babubhaiya2"

function download(url, callback){
    setTimeout(function(){
        console.log(`downloading ${url}`)
        callback(url)
    },2000)
    
}

function process(url){
    console.log(`Processing ${url}`)
}

// download(url, process)
// or
download(url, function process(url){
    console.log(`Processing ${url}`)
    download(url2, function process(url){
        console.log(`Processing ${url}`)
        download(url3, function process(url){
            console.log(`Processing ${url}`)
            
        })
    })
    // what the hell is this? -- passing inside callback
    // callback hell - interview question
    
})
// process(url)

//sometime one function is depedent on other
// because processing is done after downloading
// so change the position of process
// to make code dynamic use callback function








