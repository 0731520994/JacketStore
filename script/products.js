let girlsJackets = JSON.parse(localStorage.getItem('girlsJackets')) || [];
if (girlsJackets.length === 0) {
  girlsJackets = [
    {
      id: '1',
      image: 'https://o.remove.bg/downloads/1569c899-0a68-45dc-a177-b130672361b8/barbie-girls-barbie-fleece-removebg-preview.png',
      name: 'Babie girls fleece',
      price: 'R250'
    },
    {
      id: '2',
      image:'',
      name: 'Denim jacket',
      price: 'R200'
    },
    {
      id: '3',
      image: '../images/Kiddies-J (girls)/kids_micky_demin-removebg-preview.png',
      name: 'Micky denim',
      price: 'R250'
    },
    {
      id: '4',
      image: '../images/Kiddies-J (girls)/Puffer-Jacket-removebg-preview (1).png',
      name: 'Puffer jacket',
      price: 'R220'
    },
    {
      id: '5',
      image: 'https://i.postimg.cc/NFNPJYcL/teddy-jacket-removebg-preview.png',
      name: 'Teddy jacket',
      price: 'R250'
    }
  ];
  localStorage.setItem('girlsJackets', JSON.stringify(girlsJackets));
}

let boysJackets = JSON.parse(localStorage.getItem('boysJackets')) || [];
if (boysJackets.length === 0) {
  boysJackets = [
    {
      id: '6',
      image: '',
      name: '',
      price: 'R250'
    },
    {
      id: '7',
      image: 'https://i.postimg.cc/xTM04FZg/kids-Biker-Jacket-removebg-preview-8.png',
      name: 'Denim jacket',
      price: 'R200'
    },
    {
      id: '8',
      image: '../images/Kiddies-J (girls)/kids_micky_demin-removebg-preview.png',
      name: 'Micky denim',
      price: 'R250'
    },
    {
      id: '9',
      image: '../images/Kiddies-J (girls)/Puffer-Jacket-removebg-preview (1).png',
      name: 'Puffer jacket',
      price: 'R220'
    },
    {
      id: '10',
      image: 'https://i.postimg.cc/NFNPJYcL/teddy-jacket-removebg-preview.png',
      name: 'Teddy jacket',
      price: 'R250'
    }
  ];
  localStorage.setItem('boysJackets', JSON.stringify(boysJackets));
}

let productsContainer = document.querySelector('.jackets-item');

try {
  // Display girls' jackets
  girlsJackets.forEach(item => {
    productsContainer.innerHTML += `
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
            </select>
            <a href="./products.js" class="btn btn-primary hotpink-link">Add to cart</a>
          </div>
        </div>
      </div>
    `;
  });

  // Display boys' jackets
  boysJackets.forEach(item => {
    productsContainer.innerHTML += `
      <div class="col">
        <div class="card" style="width: 18rem;">
          <img src="${item.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">${item.price}</p>
            <select class="iphone">
              <option>select size</option>
              <option value="size">3-4yrs</option>
              <option value="size">5-6yrz</option>
              <option value="size">7-8yrs</option>
              <option value="size">S</option>
              <option value="size">M</option>
              <option value="size">L</option>
            </select>
            <a href="./products.js" class="btn btn-primary">Add to cart</a>
          </div>
        </div>
      </div>
    `;
  });
} catch(e) {
  location.reload();
}
