document.addEventListener('DOMContentLoaded', ()=>{
    const refs = {
        burger: document.querySelector('.burger'),
        list: document.querySelector('.header-nav_list')
    }
// burger logic
    refs.burger.addEventListener('click',()=>{  
        refs.list.classList.toggle('active');
        if(refs.list.classList.contains('active')){
            refs.list.style.display = 'flex';
        } else{
            refs.list.style.display = 'none';
        }
    });

// scroll animate
    onepagescroll('.wrapper');
// animate first page
    const tl = new TimelineMax();
    tl.from('.main-content_info',1,{
        x: '-100%'
    });
    tl.from('.main-content_video',1,{
        x: '100%'
    });
    tl.from('.header',0.5,{
        y: '-100%'
    });
    

},{passive:false});

    
