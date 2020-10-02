$(document).ready(function () {  
  var ul = document.getElementById("pubs");

  for(var i=0; i<pubs.length; i++){
    var pub = pubs[i];
    var li = document.createElement("li");
    li.innerHTML = '<i class="fa-li fa fa-book"></i>' + 
                   '<a href="' + pub["url"] + '">' + pub["title"] + "</a><br>" + 
                   pub["author"] + "<br>" + 
                   pub["conf"] + "<br>";
    if(pub["code"])
      li.innerHTML += '<a href="' + pub["code"] + '" class="comment-link">[code]</a> ';
    if(pub["slides"])
      li.innerHTML += '<a href="' + pub["slides"] + '" class="comment-link">[slides]</a> ';
    if(pub["poster"])
      li.innerHTML += '<a href="' + pub["poster"] + '" class="comment-link">[poster]</a> ';

    if(i<pubs.length-1)
      li.setAttribute("class", "lst-space");

    ul.appendChild(li);
  }
});