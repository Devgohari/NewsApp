let newA = document.getElementById("newA")
async function getNews() {
  let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=a827b1dbba744199b29fdf7c07a53486";
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}
async function renderNews() {
  let news = await getNews();
  let articles = news.articles
  let html = "";
  articles.forEach(newss => {
    let newsItem = `<div class="card" style="width: 18rem;">
        <img src="${newss.urlToImage}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${newss.title}</h5>
            <p class="card-text">${newss.description}</p>
            <a href="${newss.url}" class="btn btn-primary">Read more</a>
        </div>
    </div>`;
    html += newsItem
});
newA.innerHTML = html
}
renderNews()

