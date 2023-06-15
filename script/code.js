let products = [
    {
      id: '1',
      image: 'https://i.postimg.cc/c46dfMDm/kids-Biker-Jacket-removebg-preview-8-edited.jpg',
      name: 'Biker jacket',
      price: 'R250'
    },
    {
      id: '2',
      image: 'https://i.postimg.cc/fbs4qxv1/Mickey-Mouse-Bomber.jpg',
      name: 'Micky Mouse Bomber Jacket',
      price: 'R220'
    },
    {
      id: '3',
      image: 'https://i.postimg.cc/5yzBwyTV/barbie-girls-barbie-fleece.jpg',
      name: 'Barbie fleece Jacket',
      price: 'R250'
    },
    {
      id: '4',
      image: 'https://i.postimg.cc/SQtFGrbw/Borg-collar-flap-Detail-coat.jpg',
      name: 'Bprg collar flap',
      price: 'R350'
    },
    {
      id: '5',
      image: 'https://i.postimg.cc/Y9qZ64nr/Puffer-Jacket.jpg',
      name: 'Puffer Jacket',
      price: 'R800'
    }
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
            <option>select size</option>
            <option value="size">3-4yrs</option>
            <option value="size">5-6yrz</option>
            <option value="size">7-8yrs</option>
            <option value="size">S</option>
            <option value="size">M</option>
            <option value="size">L</option>
            <a href="./products.js" class="btn btn-primary style="color: hotpink">Add to cart</a>
        
          </div>
        </div>
      </div>
    `;
  });






    