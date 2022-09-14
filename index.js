const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '323e6e957cmsh4306a46ada0243dp10c3ebjsnfebfcbce53fc',
		'X-RapidAPI-Host': 'mental-health-info-api.p.rapidapi.com'
	}
};


search = document.querySelector("#searchbar")
 search.addEventListener("submit",(e)=>{
    e.preventDefault()
    console.log(e.target.search.value);
    fetch(`https://mental-health-info-api.p.rapidapi.com/news/${e.target.search.value}`, options).then(response => {
        return response.json(); 
    })
    .then(data =>{
        console.log(data);
        const html = data
        .map(article => {
            document.querySelector("#app").innerHTML=``
            return `
         
           <div class = "user flex-child">

         <p>${article.source}</p>
          <p>${article.title}</p>
           </div>
            `;
        })
        .join('');
        //console.log(html);
        document.querySelector("#app").insertAdjacentHTML('afterbegin',html) 
  
    })
    e.target.reset();
})
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
var post= document.getElementById("post");
post.addEventListener("click", function(){
    var commentBoxValue= document.getElementById("comment-box").value;
 
    var li = document.createElement("li");
    var text = document.createTextNode(commentBoxValue);
    li.appendChild(text);
    document.getElementById("unordered").appendChild(li);
 
});
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

    
    
    

	
	    

    