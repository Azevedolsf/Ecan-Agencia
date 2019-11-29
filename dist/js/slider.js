const produtos = document.querySelector('.vitrine__produtos');
const itens = produtos.querySelectorAll('li');

var index = 0;
function autoChangeProduct(){
    if(index < itens.length -1){
        itens[index].classList.remove('ativo');
        index++
        itens[index].classList.add('ativo');
    }else{
        itens[index].classList.remove('ativo')
        index = 0;
        itens[index].classList.add('ativo');
    }
    setTimeout("autoChangeProduct()", 2000);
}

window.onload = autoChangeProduct()