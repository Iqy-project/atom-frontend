function getProduct() {
    
    let product = $('.product');
    // console.log(product)
    let number = 0;
    let totalCart = $('#total-cart');
    resultPrice = totalCart.data('total-cart');

        $(product).on('click', function () {
            $("#list-grop-none").addClass('d-none');
            number++;
            let priceProduct = $(this).find('.price').data('price-product');
            let textVal = $(this).find('.description .product-title').text();
            let product = $('.product');
            let productItemData = $(`<div class="product-item-data"></div>`);
            let productItemDataGroup = productItemData
                .append(`<span class="d-block">${textVal}</span>`)
                .append(`<span class="price-cart d-block" data-price-cart="${priceProduct}">${idr(priceProduct).format()}</span>`)
            let productItem = $(`<div class="d-flex"></div> <input data-counter="${number}" min="1" type="number" value="1" name="" id="">`)
                .append(`<i data-close="${textVal}" class="fa-solid fa-x text-danger me-3 my-auto delete-product"></i>`)
                .append(productItemDataGroup);


            let productItemWrapper = $('<div></div>').addClass('cart-item d-flex justify-content-between align-items-center').html(productItem)
            let productItemHTML = $("<div></div>").html(productItemWrapper);
            let dataProduct = $(this).data('product');
            let listProduct = `<li data-item="${dataProduct}" class="list-group-item rounded-1 mb-2 border-0">${productItemHTML.html()}</li>`;
            $('.list-group').append(listProduct);
            $(`input[data-counter='${number}']`).inputSpinner();
            let productPrice = $(this).find('.price').data('price-product');
            resultPrice += productPrice;
            
            totalCart.html(idr(resultPrice).format());
            totalCart.attr('data-total-cart', resultPrice);
            deleteProduct();
            getPayment();
        })

}

function deleteProduct() {
    let deleteButton = $(".delete-product");
    console.log(deleteButton);
    let counter = deleteButton.length;
    let totalCart = $('#total-cart')
    
    $(deleteButton).on('click', function (e) {
        e.stopImmediatePropagation();
        let productPriceCart = $(this).siblings('.product-item-data').find('.price-cart').data('price-cart');
        console.log('cok');
        resultPrice -= productPriceCart;
        totalCart.attr('data-total-cart', resultPrice);
        totalCart.html(idr(resultPrice).format());
        $(this).parents("li").remove();
        if ($(".list-group").children().length == 0) {
            $("#list-grop-none").addClass('d-block').removeClass('d-none')
        }  
    })
}

function deleteAllProduct() {
    let deleteCart = $('#delete-all-cart');
    deleteCart.on('click', function () {
        $("list-group-cart").html("");
    })
}

function rightAmountPay() {
    $("#right-amount").on('click', function () {
        let totalPayment = $('#total-payment').data('total-payment');
        $("#pos-paid").val(totalPayment);
        new AutoNumeric('#pos-paid', totalPayment,{
            "allowDecimalPadding": false,
            "currencySymbol": "Rp",
            "digitGroupSeparator": ".",
            "decimalCharacter": ",",
            "caretPositionOnFocuss": "end",
            "emptyInputBehavior": "always"
        });
    })
}
function zeroCart() {
    // settingCurrency();
    let totalCart = $('#total-cart');
    // console.log(totalCart);
    totalCart.html(idr(0).format());
}

function getpayment() {
    
}