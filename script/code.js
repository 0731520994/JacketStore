let products = [
  {
    id: '5',
    image: 'https://i.postimg.cc/Y9qZ64nr/Puffer-Jacket.jpg',
    name: '💓Puffer Jacket',
    price: 'R220'
  },
  {
    id: '9',
    image: 'https://i.postimg.cc/Gm2BGbFh/Mickey-Mouse-Bomber.jpg',
    name: '💙Mickey Mouse Bomber jacket',
    price: 'R350'
  },
  {
    id: '3',
    image: 'https://i.postimg.cc/Y08WRSVB/barbie-girls-barbie-fleece-removebg-preview-2.png',
    name: '💓Barbie fleece Jacket',
    price: 'R250'
  },

];

let featured = document.querySelector('.featured-item');

products.forEach(item => {
  featured.innerHTML += `



    <div class="col">
      <div class="card" style="width: 18rem;">
        <img src="${item.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
          <p class="card-text">${item.price}</p>
          <select class="jacket">
            <option>select size </option>
            <option value="size">2-3yrs</option>
            <option value="size">3-4yrs</option>
            <option value="size">4-5yrs</option>
            <option value="size">5-6yrs</option>
            <option value="size">7-8yrs</option>
            <option value="size">S</option>
            <option value="size">M</option>
            <option value="size">L</option>
          </select>
          <a href="./html/products.html" class="btn btn-primary">See more ...</a>
        </div>
      </div>
    </div>
  `;
});

