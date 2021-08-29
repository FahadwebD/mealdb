const homeDisplayFood = () =>{
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
    .then(res => res.json())
    .then(data => foodInHome(data.meals))
}
homeDisplayFood()
const foodInHome = data =>{
    
    const bItem = document.getElementById('b-item')
    data.forEach(data=> {
        console.log(data)
        const newItem = document.createElement('div')
        newItem.innerHTML =`<div class="col">
          <div class="card">
            <img src="${data.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${data.strMeal}</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                
              </div>
              <div class="d-flex  justify-content-between">
              <h2>$200</h2><button onclick="bondo('${data.idMeal}')" type="button" class="btn btn-dark">ADD TO CART</button>
        </div>
          </div>
        </div>`

        bItem.appendChild(newItem)
    });
} 
const homeADisplayFood = () =>{
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
    .then(res => res.json())
    .then(data => foodInHomeA(data.meals))
}
homeADisplayFood()
const foodInHomeA = data =>{
    
    const aItem = document.getElementById('a-item')
    data.forEach(data=> {
        console.log(data)
        const newItem = document.createElement('div')
        newItem.innerHTML =`<div class="col">
          <div class="card">
            <img src="${data.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${data.strMeal}</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>

            <div class="d-flex  justify-content-between">
                <h2>$200</h2><button onclick="bondo()" type="button" class="btn btn-dark">ADD TO CART</button>
          </div>
          </div>
        </div>`

        aItem.appendChild(newItem)
    });
} 
//home//

document.getElementById('dessert').addEventListener('click' , function() {

    const displayBlockSectionOne = document.getElementById('s-one').style.display ='none'
    const displayBlockSectionTwo = document.getElementById('s-two').style.display ='none'
    const hOne= document.getElementById('tag-h1');
    hOne.innerText = 'Desert'
    
    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=dessert')
    .then(res => res.json())
    .then(data => desertDisplay(data.meals))
})

const desertDisplay = data =>{
    console.log(data)

    const sec = document.getElementById('main');
    data.forEach(data=> {
        console.log(data)
        const newItem = document.createElement('div')
        newItem.innerHTML =`<div class="col">
          <div class="card">
            <img src="${data.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${data.strMeal}</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div class="d-flex  justify-content-between">
            <h2>$200</h2><button type="button" class="btn btn-dark">ADD TO CART</button>
      </div>
          </div>
        </div>`

        sec.appendChild(newItem)
    });
}

document.getElementById('beef').addEventListener('click' , function() {

    const displayBlockSectionOne = document.getElementById('s-one').style.display ='none'
    const displayBlockSectionTwo = document.getElementById('s-two').style.display ='none'
    const hOne= document.getElementById('tag-h1');
    hOne.innerText = 'Beef'
    
    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=beef')
    .then(res => res.json())
    .then(data => beefDisplay(data.meals))
})

const beefDisplay = data =>{
    console.log(data)

    const sec = document.getElementById('main');
    data.forEach(data=> {
        console.log(data)
        const newItem = document.createElement('div')
        newItem.innerHTML =`<div class="col">
          <div class="card">
            <img src="${data.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${data.strMeal}</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div class="d-flex  justify-content-between">
            <h2>$200</h2><button type="button" class="btn btn-dark">ADD TO CART</button>
      </div>
          </div>
        </div>`

        sec.appendChild(newItem)
    });
}
document.getElementById('seaFood').addEventListener('click' , function() {

    const displayBlockSectionOne = document.getElementById('s-one').style.display ='none'
    const displayBlockSectionTwo = document.getElementById('s-two').style.display ='none'
    const hOne= document.getElementById('tag-h1');
    hOne.innerText = 'Sea Food'
    
    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=dessert')
    .then(res => res.json())
    .then(data => seaFoodDisplay(data.meals))
})

const seaFoodDisplay = data =>{
    console.log(data)

    const sec = document.getElementById('main')
    data.forEach(data=> {
        console.log(data)
        const newItem = document.createElement('div')
        newItem.innerHTML =`<div class="col">
          <div class="card">
            <img src="${data.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${data.strMeal}</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div class="d-flex  justify-content-between">
            <h2>$200</h2><button type="button" class="btn btn-dark">ADD TO CART</button>
      </div>
          </div>
        </div>`

        sec.appendChild(newItem)
    });
}



const bondo = data =>{
    console.log(parseInt(data))
    const dataNumber = parseInt(data)
    document.getElementById('letsDoIt').style.display = 'none'
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${dataNumber}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayCart(data.meals[0]))
}

const displayCart = data =>{
    console.log(data)
    const cartDisplay = document.getElementById('cart')
    cartDisplay.innerHTML = `<div class="row">

    <!--Grid column-->
    <div class="col-lg-8">

      <!-- Card -->
      <div class="mb-3">
        <div class="pt-4 wish-list">

          <h5 class="mb-4">Cart (<span>2</span> items)</h5>

          <div class="row mb-4">
            <div class="col-md-5 col-lg-3 col-xl-3">
              <div class="rounded mb-3 mb-md-0">
              <img src="${data.strMealThumb}" class="img-fluid w-100">

              </div>
            </div>
            <div class="col-md-7 col-lg-9 col-xl-9">
              <div>
                <div class="d-flex justify-content-between">
                  <div>
                    <h5>${data.strMeal}</h5>
                    <p class="mb-3 text-muted text-uppercase small">Area -${data.strArea}</p>
                    <p class="mb-2 text-muted text-uppercase small">Category: ${data.strCategory}</p>
                  </div>
                  <div>
                    <div class="def-number-input number-input safari_only mb-0 w-100">
                      <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                        class="minus decrease btn btn-light">-</button>
                      <input class="quantity" min="0" name="quantity" value="1" type="number">
                      <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                        class="plus increase btn btn-light">+</button>
                    </div>
                    <small id="passwordHelpBlock" class="form-text text-muted text-center">
                      (Note, 1 piece)
                    </small>
                  </div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <div>
                    <a href="#!" type="button" class="card-link-secondary small text-uppercase mr-3"><i
                        class="fas fa-trash-alt mr-1"></i> Remove item </a>
                    <a href="#!" type="button" class="card-link-secondary small text-uppercase"><i
                        class="fas fa-heart mr-1"></i> Move to wish list </a>
                  </div>
                  <p class="mb-0"><span><strong id="summary">$17.99</strong></span></p class="mb-0">
                </div>
              </div>
            </div>
          </div>
          <hr class="mb-4">
          
          <p class="text-primary mb-0"><i class="fas fa-info-circle mr-1"></i> Do not delay the purchase, adding
            items to your cart does not mean booking them.</p>

        </div>
      </div>
      <!-- Card -->

      <!-- Card -->
      <div class="mb-3">
        <div class="pt-4">

          <h5 class="mb-4">Expected shipping delivery</h5>

          <p class="mb-0"> Thu., 12.03. - Mon., 16.03.</p>
        </div>
      </div>
      <!-- Card -->

      <!-- Card -->
      <div class="mb-3">
        <div class="pt-4">

          <h5 class="mb-4">We accept</h5>

          <img class="mr-2" width="45px"
            src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
            alt="Visa">
          <img class="mr-2" width="45px"
            src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
            alt="American Express">
          <img class="mr-2" width="45px"
            src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
            alt="Mastercard">
          <img class="mr-2" width="45px"
            src="https://mdbootstrap.com/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
            alt="PayPal acceptance mark">
        </div>
      </div>
      <!-- Card -->

    </div>
    <!--Grid column-->

    <!--Grid column-->
    <div class="col-lg-4">

      <!-- Card -->
      <div class="mb-3">
        <div class="pt-4">

          <h5 class="mb-3">The total amount of</h5>

          <ul class="list-group list-group-flush">
            <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
              Temporary amount
              <span>$25.98</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center px-0">
              Shipping
              <span>Gratis</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
              <div>
                <strong>The total amount of</strong>
                <strong>
                  <p class="mb-0">(including VAT)</p>
                </strong>
              </div>
              <span><strong>$53.98</strong></span>
            </li>
          </ul>

          <button type="button" class="btn btn-primary btn-block">go to checkout</button>

        </div>
      </div>
      <!-- Card -->

      <!-- Card -->
      <div class="mb-3">
        <div class="pt-4">

          <a class="dark-grey-text d-flex justify-content-between" data-toggle="collapse" href="#collapseExample"
            aria-expanded="false" aria-controls="collapseExample">
            Add a discount code (optional)
            <span><i class="fas fa-chevron-down pt-1"></i></span>
          </a>

          <div class="collapse" id="collapseExample">
            <div class="mt-3">
              <div class="md-form md-outline mb-0">
                <input type="text" id="discount-code" class="form-control font-weight-light"
                  placeholder="Enter discount code">
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Card -->

    </div>
    <!--Grid column-->

  </div>
  <!-- Grid row -->`

}