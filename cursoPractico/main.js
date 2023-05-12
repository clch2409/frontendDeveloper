const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burgerButton = document.querySelector(".burger_menu");
const mobileMenu = document.querySelector(".mobile_menu");
const shoppingCart = document.querySelector(".navbar-shopping-cart")
const shoppingCartMenu = document.querySelector(".shopping-cart")
const cardsContainer = document.querySelector(".cards-container")
const productDetail = document.querySelector(".product-detail")
const closeIcon = document.querySelector(".close")

let productList = []
productList.push ({
    name:'Bike',
    price: 12700,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1200,
    image: 'https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1600,
    image: 'https://m.media-amazon.com/images/I/61eExL-rIAL._AC_SL1001_.jpg'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1500,
    image: 'https://assets.specialized.com/i/specialized/60822-140_HLMT_CHAMONIX-HLMT-MIPS-CE-MRN-M-L_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});
productList.push ({
    name:'Seat',
    price: 300,
    image: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg'
});
productList.push ({
    name:'Tennis Montain Bike',
    price: 2200,
    image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg'
});
productList.push ({
    name:'Sunglasses',
    price: 800,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602'
});
productList.push ({
    name:'Sunglasses',
    price: 600,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/siroko-tech-k3s-clearfog-lente-antiniebla-frontal/1200x/crop_center.jpg?v=1635209603'
});
productList.push ({
    name:'Bicycle seat bag',
    price: 876,
    image: 'https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg'
});

window.addEventListener('load', ()=> {placeProducts(productList)})
menuEmail.addEventListener('click', toggleDesktopMenu);
shoppingCart.addEventListener('click', toggleShoppingCart);
burgerButton.addEventListener('click', toggleMobileMenu);
closeIcon.addEventListener('click', closeProductDetail)

function toggleDesktopMenu(){
    shoppingCartMenu.classList.add('inactive')
    mobileMenu.classList.add('inactive')
    closeProductDetail()
    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu(){
    shoppingCartMenu.classList.add('inactive')
    productDetail.classList.add('inactive')
    closeProductDetail()
    mobileMenu.classList.toggle('inactive')
}

function toggleShoppingCart(){
    desktopMenu.classList.add('inactive')
    mobileMenu.classList.add('inactive')
    closeProductDetail()
    shoppingCartMenu.classList.toggle('inactive')
}

function openProductDetail(){
    productDetail.classList.remove('inactive')
    desktopMenu.classList.add('inactive')
    mobileMenu.classList.add('inactive')
    shoppingCartMenu.classList.add('inactive')
}

function closeProductDetail(){
    productDetail.classList.add('inactive')
}

{/* <div class="product-card">
    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" class="producto-img">
    <div class="product-info">
        <div>
            <p>$120,00</p>
            <p>Bike</p>
        </div>
        <figure>
            <img src="/icons/bt_add_to_cart.svg" alt="">
        </figure>
    </div>
</div> */}

function placeProducts(arr){
    for (product of arr){
        //! Creacion de etiquetas y contenedores
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')

        const productImage = document.createElement('img')
        productImage.setAttribute('src', product.image)
        productImage.classList.add('product-card-img')
        productImage.addEventListener('click', openProductDetail)

        const productInfo = document.createElement('div')
        productInfo.classList.add('product-card-info')

        const divProductInfo = document.createElement('div')

        const productPrice = document.createElement('p')
        productPrice.innerText = `$${product.price}`
        const productName = document.createElement('p')
        productName.innerText = product.name
        productName.addEventListener('click', openProductDetail)
        
        const figure = document.createElement('figure')
        const imageCart = document.createElement('img')
        imageCart.setAttribute('src', './icons/bt_add_to_cart.svg') 

        //!Agregando las etiquetas de contenido a las contenedoras (adentro hacia afuera)
        figure.appendChild(imageCart)
        divProductInfo.appendChild(productPrice)
        divProductInfo.appendChild(productName)
        productInfo.appendChild(divProductInfo)
        productInfo.appendChild(figure)
        productCard.appendChild(productImage)
        productCard.appendChild(productInfo)

        cardsContainer.appendChild(productCard)
    }
}
