const apiKey = "f1c32fcf991148b09ff13df0f5cdd3bf";
const api = `https://newsapi.org/v2/top-headlines?country=ng&apiKey=${apiKey}`;
const api_url = `https://newsapi.org/v2/everything?q=sports&apiKey=${apiKey}`;
const for_url = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${apiKey}`;
const apiAd = `https://newsapi.org/v2/everything?q=politics&apiKey=${apiKey}`;

fetch(api)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    const display = `
    <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner" style="height:600px;">
          <div class="carousel-item active">
          <img  class="img-fluid w-100 h-60" src="${data.articles[0].urlToImage}"/>
         
          <p class="title">${data.articles[0].title}</p>
       
          </div>
         
          <div class="carousel-item">
          <img  class="img-fluid w-100 h-60" src="${data.articles[7].urlToImage}"/>
         
          <p class="title">${data.articles[7].title}</p>
       
         
          </div>
          <div class="carousel-item">
          <img  class="img-fluid w-100 h-60" src="${data.articles[2].urlToImage}"/>
         
          <p class="title">${data.articles[0].title}</p>
       
          </div>
       
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
        <div class="text-item">{${data.articles[0].title}}</div>
        
      </div>`;
    document.querySelector(".slide").innerHTML = display;
  });
fetch(for_url)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);

    const foreginNew = `
      <div
      class="container-fluid d-flex justify-content-center align-items-center"
    >
     
      <div class="foregin-polictis-sports">
      <h3>Foreign News</h3>
      <div class="foreign">
      <div class="card" style="width: 18rem; margin: 5px">
      <img src="${data.articles[9].urlToImage}" class="card-img-top" alt="..." />
      <div class="card-body">
      <p class="card-text">
              ${data.articles[9].title}
              </p>
              </div>
              </div>
              <div class="card" style="width: 18rem; margin: 5px">
              <img src="${data.articles[4].urlToImage}" class="card-img-top" alt="..." />
            <div class="card-body">
            <p class="card-text">
            ${data.articles[4].title}
            </p>
            </div>
            </div>
          <div class="card" style="width: 18rem; margin: 5px">
            <img src="${data.articles[0].urlToImage}" class="card-img-top" alt="..." />
            <div class="card-body">
            <p class="card-text">
            ${data.articles[0].title}
            </p>
            </div>
            </div>
            </div>`;
    document.querySelector(".show2").innerHTML = foreginNew;
  });
fetch(api_url)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    const sportNews = `
  
  <h3>Sports News</h3>
    <div class="sports">
      <div class="card" style="width: 18rem; margin: 5px">
        <img src="${data.articles[6].urlToImage}" class="card-img-top" alt="..." />
        <div class="card-body">
        <p class="card-text">
        ${data.articles[6].title}
        </p>
        </div>
      </div>
      <div class="card" style="width: 18rem; margin: 5px">
        <img
        src="${data.articles[3].urlToImage}"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
        <p class="card-text">
        ${data.articles[3].title}
        </p>
        </div>
      </div>
      <div class="card" style="width: 18rem; margin: 5px">
        <img src="${data.articles[5].urlToImage}" class="card-img-top" alt="..." />
        <div class="card-body">
        ${data.articles[5].title}
        </div>
      </div>
    </div>`;
    document.querySelector(".sport-news").innerHTML = sportNews;
  });

fetch(apiAd)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    const PoliticsNew = `
  
  <h3>Politics News</h3>
    <div class="sports">
      <div class="card" style="width: 18rem; margin: 5px">
        <img src="${data.articles[6].urlToImage}" class="card-img-top" alt="..." />
        <div class="card-body">
        <p class="card-text">
        ${data.articles[6].title}
        </p>
        </div>
      </div>
      <div class="card" style="width: 18rem; margin: 5px">
        <img
        src="${data.articles[3].urlToImage}"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
        <p class="card-text">
        ${data.articles[3].title}
        </p>
        </div>
      </div>
      <div class="card" style="width: 18rem; margin: 5px">
        <img src="${data.articles[5].urlToImage}" class="card-img-top" alt="..." />
        <div class="card-body">
        ${data.articles[5].title}
        </div>
      </div>
    </div>`;
    document.querySelector(".politics-news").innerHTML = PoliticsNew;
  });
//
//   <div class="side-menu">
//     <h4>Breaking-News</h4>
//     <div class="breaking-news">
//       <div class="card" style="width: 18rem">
//         <img src="${data.articles[10].urlToImage}" class="card-img-top" alt="..." />
//         <div class="card-body">
//         <p class="card-text">
//         ${data.articles[10].title}
//         </p>
//         </div>
//       </div>
//     </div>
//     <div class="latest-news">
//       <div class="card" style="width: 18rem">
//         <img src="${data.articles[4].urlToImage}" class="card-img-top" alt="..." />
//         <div class="card-body">
//         <p class="card-text">
//         ${data.articles[4].title}
//         </p>
//         </div>
//       </div>
//     </div>
//     <div class="entertainment">
//       <div class="card" style="width: 18rem">
//         <img src="${data.articles[11].urlToImage}" class="card-img-top" alt="..." />
//         <div class="card-body">
//           <p class="card-text">
//           ${data.articles[11].title}
//           </p>
//         </div>
//       </div>
//     </div>
//   </div>

// </div>`;

// fetch(api_url)
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });
