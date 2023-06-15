let products = [
    {
      id: '1',
      image: '../images/Kiddies-J (girls)/kids_Biker_Jacket-removebg-preview (8).png',
      name: 'Biker jacket',
      price: 'R250'
    },
    {
      id: '2',
      image: '../images/Kiddies-J (girls)/Puffer-Jacket-removebg-preview (1).png',
      name: 'Puffer jacket',
      price: 'R220'
    },
    {
      id: '3',
      image: '../images/teens-J (girls)/teens_Stone_faux_fur_lined_bicker_jacket-removebg-preview.png',
      name: 'Stone faux fur lined biker jacket',
      price: 'R450'
    },
    {
      id: '4',
      image: '../images/tenns-J (boys)/men_corduroy_demin-removebg-preview.png',
      name: 'Corduroy denim jacket',
      price: 'R1500'
    },
    {
      id: '5',
      image: '../images/tenns-J (boys)/Utility_puffer_jacket-removebg-preview (1).png',
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
              <option>select color</option>
              <option value="color">black</option>
              <option value="color">white</option>
              <option value="color">Navy</option>
              <option value="color">pink</option>
            </select>
            <a href="./products.js" class="btn btn-primary">Add to cart</a>
        
          </div>
        </div>
      </div>
    `;
  });
