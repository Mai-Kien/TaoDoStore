

// chọn phần tử trong DOM (Document Object Model). Này giúp ta lấy phần tử trong html ngắn gọn hơn 
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Lấy dữ liệu( Mở phần danh mục)
function openCategory(){
    const navbarCatalog = $('.navbar__catalog');
    const catalogList = $('.catalog__list');
    const navbarContact = $('.navbar__contact');
    navbarCatalog.onclick = () => {
        navbarContact.classList.toggle('navbar__contact--margin');
        catalogList.classList.toggle('navbar__list--open');
    }
    
}

// gọi api
const productApi = 'http://localhost:3000/product';
const productPuchasedApi = 'http://localhost:3000/productPuchased';
const userApi = 'http://localhost:3000/user';
const productCartApi = 'http://localhost:3000/productCart';
const notificationApi = 'http://localhost:3000/notificationList';

function app (){
    openCategory()
    getProduct()
    getProduct(renderPhoneProduct)
    getProduct(renderEarPhoneProduct)
    getProduct(renderComputerProduct)
    getProduct(productSearch)
    
}
app()
// render lấy giữ liệu nhé cậu 
function getProduct(callback){
    fetch(productApi)
    .then( (response) => {
        return response.json();

    })
    .then(callback)
}
// render giữ liệu của thằng phone
function renderPhoneProduct(products){
    const Phone = $('.product__type-phone');
    const typePhone = Phone.title

    const itemsTypePhone = products.filter(item)
    function item(product){
        return product.productType === typePhone
    }
    const htmlPhone = itemsTypePhone.map( (item) => {
        return `
        <div title="${item.productType}" class="product__item-${item.productType} product__item product__item-${item.id} product__width ipad-col-4">
                                
            <div onclick="HandleShowProduct(${item.id})" class="product__container">  
                <div title="${item.productImg}" style="background-image: ${item.productImg};" class="product__img product__img-${item.id}"></div>
                <div class="product__describe">
                    <h4 class="product__name product__name-${item.id}">${item.productName}</h4>
                    <p class="product__paragram product__paragram-${item.id}">${item.productDescription}</p>
                    <div class="product__price">
                        <span class="product__price--new product__price--new-${item.id}">${item.productNewPrice}</span>
                        <span class="product__price--old product__price--old-${item.id}">${item.productOldPrice}</span>
                    </div>
                </div>
            </div>
            <button id="btn" onclick="handleDeleteProduct(${item.id})" class="remove__product-item close remove__product-item-${item.id}">
                <i class="fas fa-times"></i>
            </button>
            
            <button id="btn" onclick="handleEditProduct(${item.id})" class="edit__product-item-btn close edit__product-item-${item.id}">
                Chỉnh sửa sản phẩm
            </button>

        </div>
        
        `
    })
    Phone.innerHTML = htmlPhone.join('')
}  
     
// render giữ liệu của thằng earphone
function renderEarPhoneProduct(products){
    const EarPhone = $('.product__type-earphone');
    const typeEarPhone = EarPhone.title

    const itemsTypeEarPhone = products.filter(item)
    function item(product){
        return product.productType === typeEarPhone
    }   
    const htmlEarPhone = itemsTypeEarPhone.map( (item) => {
        return `
        <div title="${item.productType}" class="product__item-${item.productType} product__item product__item-${item.id} product__width ipad-col-4">
                                
            <div onclick="HandleShowProduct(${item.id})" class="product__container">  
                <div title="${item.productImg}" style="background-image: ${item.productImg};" class="product__img product__img-${item.id}"></div>
                <div class="product__describe">
                    <h4 class="product__name product__name-${item.id}">${item.productName}</h4>
                    <p class="product__paragram product__paragram-${item.id}">${item.productDescription}</p>
                    <div class="product__price">
                        <span class="product__price--new product__price--new-${item.id}">${item.productNewPrice}</span>
                        <span class="product__price--old product__price--old-${item.id}">${item.productOldPrice}</span>
                    </div>
                </div>
            </div>
            <button id="btn" onclick="handleDeleteProduct(${item.id})" class="remove__product-item close remove__product-item-${item.id}">
                <i class="fas fa-times"></i>
            </button>
            
            <button id="btn" onclick="handleEditProduct(${item.id})" class="edit__product-item-btn close edit__product-item-${item.id}">
                Chỉnh sửa sản phẩm
            </button>

        </div>
        
        `
    })
    EarPhone.innerHTML = htmlEarPhone.join('')
}      

// render giữ liệu của computer
function renderComputerProduct(products){
    const Computer = $('.product__type-computer');
    const typeComputer = Computer.title

    const itemsTypeComputer = products.filter(item)
    function item(product){
        return product.productType === typeComputer
    }   
    const htmlComputer = itemsTypeComputer.map( (item) => {
        return `
        <div title="${item.productType}" class="product__item-${item.productType} product__item product__item-${item.id} product__width ipad-col-4">
                                
            <div onclick="HandleShowProduct(${item.id})" class="product__container">  
                <div title="${item.productImg}" style="background-image: ${item.productImg};" class="product__img product__img-${item.id}"></div>
                <div class="product__describe">
                    <h4 class="product__name product__name-${item.id}">${item.productName}</h4>
                    <p class="product__paragram product__paragram-${item.id}">${item.productDescription}</p>
                    <div class="product__price">
                        <span class="product__price--new product__price--new-${item.id}">${item.productNewPrice}</span>
                        <span class="product__price--old product__price--old-${item.id}">${item.productOldPrice}</span>
                    </div>
                </div>
            </div>
            <button id="btn" onclick="handleDeleteProduct(${item.id})" class="remove__product-item close remove__product-item-${item.id}">
                <i class="fas fa-times"></i>
            </button>
            
            <button id="btn" onclick="handleEditProduct(${item.id})" class="edit__product-item-btn close edit__product-item-${item.id}">
                Chỉnh sửa sản phẩm
            </button>

        </div>
        
        `
    })
    Computer.innerHTML = htmlComputer.join('')
}       

// Làm phần tìm kiếm 
// function productSearch(products){
//     let arrProduct = [];
//     arrProduct = products;

//     const searchTitle = $('input[name="search__input"]')
//     inputSearch.oninput = () => {

//         const searchTitle = $('.search__title')
//         openFunction(searchTitle)
//         const productSearchResult = $('.product__type-search')
//         openFunction(productSearchResult)

//         let inputSearchValue = inputSearch.Value
//         const resultProduct = arrProduct.filter( (product) => {
//             return product.productName.toUpperCase().includes(inputSearchValue.toUpperCase())
//         })
        
    

//     }

// }
function openFunction(element){
    element.classList.remove('close');
}
function closeFunction(element){
    element.classList.add('close');
}

//     stopPropagation Modal;
    const overlayModals =$$('.overlay__modal')

    for (const overlayModal of overlayModals){
        overlayModal.addEventListener('click', (e) =>{
            e.stopPropagation();
    }
    )}


function productSearch(products) {
    let arrProduct = []
    arrProduct= products;

    const inputSearch = $('input[name="search__input"]')
    inputSearch.oninput = () => {

        const searchTitle = $('.search__title')
        openFunction(searchTitle)
        const productSearchResult = $('.product__type-search')
        openFunction(productSearchResult)

        let inputSearchValue = inputSearch.value

        const resultProuct = arrProduct.filter( (product) => {
            return product.productName.toUpperCase().includes(inputSearchValue.toUpperCase())
        })
        const searchResult = $('.product__type-search')
        const htmls = resultProuct.map( (item) =>{
            return`
                <div title="${item.productType}" class="product__item-${item.productType} product__item product__item-${item.id} product__width ipad-col-4">
                                    
                <div onclick="HandleShowProduct(${item.id})" class="product__container">  
                    <div title="${item.productImg}" style="background-image: ${item.productImg};" class="product__img product__img-${item.id}"></div>
                    <div class="product__describe">
                        <h4 class="product__name product__name-${item.id}">${item.productName}</h4>
                        <p class="product__paragram product__paragram-${item.id}">${item.productDescription}</p>
                        <div class="product__price">
                            <span class="product__price--new product__price--new-${item.id}">${item.productNewPrice}</span>
                            <span class="product__price--old product__price--old-${item.id}">${item.productOldPrice}</span>
                        </div>
                    </div>
                </div>
                <button id="btn" onclick="handleDeleteProduct(${item.id})" class="remove__product-item close remove__product-item-${item.id}">
                    <i class="fas fa-times"></i>
                </button>
                
                <button id="btn" onclick="handleEditProduct(${item.id})" class="edit__product-item-btn close edit__product-item-${item.id}">
                    Chỉnh sửa sản phẩm
                </button>

            </div>
            `
        })

        searchResult.innerHTML = htmls.join('')

        const closePhone = $('#product__type-phone')
        const closeEarPhone = $('#product__type-earphone')
        const closeComputer = $('#product__type-computer')
        const closePhoneList = $('.product__type-phone')
        const closeEarPhoneList = $('.product__type-earphone')
        const closeComputerList = $('.product__type-computer')

        closeFunction(closePhone)
        closeFunction(closeEarPhone)
        closeFunction(closeComputer)
        closeFunction(closePhoneList)
        closeFunction(closeEarPhoneList)
        closeFunction(closeComputerList)


    }
}
