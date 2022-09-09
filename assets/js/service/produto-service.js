

const http = new XMLHttpRequest()
http.open('GET', 'http://localhost:300/profile')

http.onload = function(){
    const data = http.response
    console.log(data);
}