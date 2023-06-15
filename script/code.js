let products = [
    {
      id: '1',
      image: 'https://i.postimg.cc/sDXxJk8C/kids-Biker-Jacket-removebg-preview-1.png',
      name: 'Biker jacket',
      price: 'R250'
    },
    {
      id: '2',
      image: 'https://i.postimg.cc/8CbxfdbX/Mickey-Mouse-Bomber.jpg',
      name: 'Micky Mouse Bomber Jacket',
      price: 'R220'
    },
    {
      id: '3',
      image: 'https://i.postimg.cc/Y08WRSVB/barbie-girls-barbie-fleece-removebg-preview-2.png',
      name: 'Barbie fleece Jacket',
      price: 'R250'
    },
    {
      id: '4',
      image: 'https://i.postimg.cc/zvHh6jtx/Borg-collar-flap-Detail-coat.jpg',
      name: 'Borg collar flap',
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
            <a href="#" class="btn btn-primary">Add to cart</a>
          </div>
        </div>
      </div>
    `;
  });






    