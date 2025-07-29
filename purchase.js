const added = document.querySelector('.add');
const btnpurchase = document.querySelector('.btn-chart');

btnpurchase.addEventListener('click', ()=>{
    added.innerHTML = 'Added to cart!';
    setTimeout(()=>{
        if(added.innerHTML === 'Added to cart!'){
            added.innerHTML = '';
        }
    }, 3000)
})