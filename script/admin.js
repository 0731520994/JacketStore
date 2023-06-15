
let jackets = [
    {
      id: '1',
      image: '',
      name: '',
      price: 'R250'
    },
    {
      id: '2',
      image: 'https://i.postimg.cc/xTM04FZg/kids-Biker-Jacket-removebg-preview-8.png',
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
  
  
  
  
  
  localStorage.setItem('jackets', JSON.stringify(jackets));
  
  function displayData() {
    let jackets
  
    if(localStorage.getItem('jackets') == null) {
      jackets = [];
    }else {
      jackets = JSON.parse(localStorage.getItem('jackets'))
    }
  
    console.log(jackets);
  
    let tableData = document.querySelector('#tableData');
  
    tableData.innerHTML = '';
    jackets.forEach((item) => {
      tableData.innerHTML += `
      <tr>
      <td><img src="${item.image}"></td>
      <td>${item.name}</td>
      <td>${item.price}</td>
      <td><button>delete</button><button>Edit</button></td>
      </tr>
      `
    })
  }
  
  document.onload = displayData();
  
  //add
  
  function addItem() {
  let name = document.querySelector('#name').value;
  let price = document.querySelector('#price').value;
  let image = document.querySelector('#image').value;
  // console.log('reached');
  let jackets
  
  if(localStorage.getItem('jackets') == null) {
    jackets = [];
  }else {
    jackets = JSON.parse(localStorage.getItem('jackets'))
  }
  
  console.log(jackets);
  
  jackets.push({
    name: name,
    price: price,
    image: image
  })
  
  localStorage.setItem('jackets', JSON.stringify(jackets));
  displayData();
  
  name = document.querySelector('#name').value = '';
  price = document.querySelector('#price').value = '';
  image = document.querySelector('#image').value = '';
  }
  
  
  
  function sortItem() {
    let name = document.querySelector('#name').value = '';
    price = document.querySelector('#price').value = '';
    image = document.querySelector('#image').value = '';
  }
  
  
  if(localStorage.getItem('jacket')== null) {
    jacket =[]
  }else {
    jacket = JSON.parse(localStorage.getItem('jacket'))
  }
  
  
  
  //sort
  
  
  function sortItem() {
    let name = document.querySelector('#name').value = '';
    let price = document.querySelector('#price').value = '';
    let image = document.querySelector('#image').value = '';
  
    jackets.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      } else {
        return 0;
      }
    });
  
    localStorage.setItem('jackets', JSON.stringify(jackets)); // Update local storage
  
    displayData();
  }
  
  
  //edit 
  
  
  function displayData() {
    let jackets;
  
    if (localStorage.getItem('jackets') == null) {
      jackets = [];
    } else {
      jackets = JSON.parse(localStorage.getItem('jackets'));
    }
  
    console.log(jackets);
  
    let tableData = document.querySelector('#tableData');
  
    tableData.innerHTML = '';
    jackets.forEach((item, index) => {
      tableData.innerHTML += `
      <tr>
        <td><img src="${item.image}"></td>
        <td>${item.name}</td>
        <td>${item.price}</td>
        <td>
          <button class="delete-button" onclick="deleteItem(${index})">Delete</button>
          <button class="edit-button" onclick="editItem(${index})">Edit</button>
        </td>
      </tr>
      `;
    });
  }
  
  function editItem(index) {
    const jacket = jackets[index];
  
    const nameInput = prompt('Enter the new name:', jacket.name);
    const priceInput = prompt('Enter the new price:', jacket.price);
    const imageInput = prompt('Enter the new image URL:', jacket.image);
  
    // Update the jacket object in the array if inputs are not empty
    if (nameInput !== null && nameInput !== '') {
      jacket.name = nameInput;
    }
    if (priceInput !== null && priceInput !== '') {
      jacket.price = priceInput;
    }
    if (imageInput !== null && imageInput !== '') {
      jacket.image = imageInput;
    }
  
    localStorage.setItem('jackets', JSON.stringify(jackets));
    displayData();
  }
  
  
  //delete
  
  
  function deleteItem(index) {
    jackets.splice(index, 1);
    localStorage.setItem('jackets', JSON.stringify(jackets));
    displayData();
  }