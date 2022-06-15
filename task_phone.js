function getAjax(method, url, func) {
    let request = new XMLHttpRequest();
    request.open(method, url, true);
    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200){
            func(request.responseText);
        }
    }
    request.send()
}
document.querySelector("#btn").addEventListener('click', function () {
    let request = new XMLHttpRequest();
    request.open('GET', "phone.json", false);
    request.send();
    if (request.status == 200) {
        console.log(request.responseText);
        document.querySelector("#result").innerHTML = request.responseText;
    }
});