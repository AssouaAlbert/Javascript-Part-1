//Variable
var clickedCounter = 1;
const btn = document.getElementById('btn');
var divver = document.getElementById('animal-info');
//EVent Listener
btn.addEventListener('click', ()=>{
//Crerate a xhr request
var ourRequest = new XMLHttpRequest();
//Define the request method "GET" or "POST"
//Add the location of the file
//Set Async tre(defualt value === true)
ourRequest.open('GET','https://learnwebcode.github.io/json-example/animals-'+clickedCounter+'.json',true);
//Test the status of the Request when open it is 0;
//What should happen when the request is succesful?
//Use the onload and use the callback funtion;
//onload is an event other examples are onerror, onprogress
ourRequest.onload = function (){
    //onload the xhr ReadyState is 4 and Status is 200
    // ReadyStates
    // 0 : Unsent
    // 1: Opened
    // 2: received
    // 3: loading
    // 4: done

    // HTTP Status
    // 200: Correct
    // 403: Forbidden
    // 404: not found
    // console.log('Ready States', ourRequest.readyState)
    // console.log('Status States', ourRequest.status);
    console.log(ourRequest.responseText);
    var cats = JSON.parse(this.responseText);
    //Remember the JSON pasre, it will convert the JSON file to array or objects;
    console.log('cats: ', cats);
    let i = 0;
    cats.forEach((element,index) => {
        let text = document.createElement('p');
        text.innerHTML = `${cats[i].name} is a ${cats[i].species} <br/>`;
        divver.appendChild(text);
        // divver.append = `${cats[i].name} is a ${cats[i].species} and like ${cats[i].foods[i]} </br>`;
        i++;
    });
    clickedCounter++;
    if(clickedCounter>3){
        btn.disabled = true;
    }
}
ourRequest.onreadystatechange = function (){
    console.log('onreadystatechange: ', this.readyState);
}
ourRequest.send();

});



// var myArray = [
//     {
//         name:"Matthew",
//         possition: "1",
//         age: "New Test"
//     },
//     {
//         name:"Mark",
//         possition: "2",
//         age: "New Test"
//     },
//     {
//         name:"Luke",
//         possition: "3",
//         age: "New Test"
//     },
//     {
//         name:"John",
//         possition: "2",
//         age: "New Test"
//     }
// ]
// console.log("The value: %s",myArray[0].name)