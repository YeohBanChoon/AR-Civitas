document.addEventListener("mousemove", function(e){
    const art = document.querySelector('.art');
    const search = document.querySelector('.search');
    const content = document.querySelector('#content');

    art.style.width = 100 + e.pageX/100 + '%';
    art.style.height = 100 + e.pageX/100 + '%';

    search.style.right = 100 + e.pageX/2 + 'px';

    content.style.left = 100 + e.pageX/2 + 'px';
})


