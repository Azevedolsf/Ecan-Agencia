const btnTopo = document.querySelector('.btn-topo')


btnTopo.onclick = function(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
}