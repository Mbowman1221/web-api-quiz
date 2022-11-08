// Access element using id
var articlesDiv = document.getElementById('articles');
var headerDiv = document.getElementById("header");

// Change style by accessing style object's properties
articlesDiv.children[0].style.fontSize = '50px';

for (let i = 0; i < headerDiv.children.length; i++){
    headerDiv.children[i].style.color = 'white';

}
// headerDiv.children[1].style.color = 'white';

console.log(headerDiv)
