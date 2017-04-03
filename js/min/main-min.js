function generateArticle(e,t,n,r){var a=document.getElementById("articleTemplate").innerHTML,i=e[t][n],l=i.title,c=i.description,s=i.kind;"New face"===t&&null===c&&(c="Welcome!");var o=a.replace("ARTICLE_TITLE",l).replace("ARTICLE_DESCRIPTION",c).replace("ARTICLE_CLASS",r).replace("ARTICLE_KIND",s);return o}function generateArticles(e,t,n,r){if("undefined"!=typeof e[t]){for(var a=e[t].length,i="",l=0;l<a;l++){var c=generateArticle(e,t,l,r);i+=c}var s=document.querySelector(n);s.innerHTML=i}}function setFirstArticleAsCurrent(){var e=document.querySelectorAll("article")[0];e.classList.add("current")}function generateAllArticles(e){generateArticles(e,"New face",".articleGroup.newFaces","newFaces"),generateArticles(e,"Help",".articleGroup.helps","helps"),generateArticles(e,"Interesting",".articleGroup.interestings","interestings"),generateArticles(e,"Event",".articleGroup.events","events")}function populateContent(e){generateAllArticles(e),initAllArticleCounts(),setFirstArticleAsCurrent()}function getWhiteboardItemsAndPopulateContent(){$.getJSON(URL_FOR_WHITEBOARD_ITEMS,populateContent)}function assignBackgrounds(){assignRandomBackground("article.newFaces aside",["image-1","image-2","image-3"]),assignRandomBackground("article.helps aside",["image-1","image-2","image-3"]),assignRandomBackground("article.interestings aside",["image-1","image-2","image-3"]),assignRandomBackground("article.events aside",["image-1","image-2","image-3"])}function init(){document.addEventListener("keypress",nextArticle),assignBackgrounds(),getWhiteboardItemsAndPopulateContent()}var URL_FOR_WHITEBOARD_ITEMS="whiteboard_items.json",indexOfClass=function(e,t){for(var n=0;n<e.length;n++){var r=e[n];if(r.classList.contains(t))return n}},advanceClassOrWrap=function(e,t){var n=indexOfClass(e,t),r,a=n===e.length-1;r=a?e[0]:e[n+1];var i=e[n];i.classList.remove(t),r.classList.add(t)},nextArticle=function(){var e=document.querySelectorAll("article");advanceClassOrWrap(e,"current")},getRandom=function(e){var t=Math.floor(Math.random()*e.length),n=e[t];return n},assignRandomBackground=function(e,t){for(var n=document.querySelectorAll(e),r=0;r<n.length;r++){var a=getRandom(t),i=n[r];i.classList.add(a)}},displayArticleCount=function(e){for(var t=e.querySelectorAll("article"),n=0;n<t.length;n++){var r=t[n],a=r.querySelectorAll(".articleCount")[0];a.innerHTML=n+1+" of "+t.length}},initAllArticleCounts=function(){for(var e=document.querySelectorAll(".articleGroup"),t=0;t<e.length;t++){var n=e[t];displayArticleCount(n)}};init();