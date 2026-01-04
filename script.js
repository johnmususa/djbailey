
        window.addEventListener('load', () => {
            const preloader = document.getElementById('preloader');
            const mainContent = document.getElementById('main-content');

            // Force a 3-second wait time
            setTimeout(() => {
                preloader.style.display = 'none'; // Hide loader
                mainContent.style.display = 'block'; // Show main page
            }, 2000); 
            
            
            /* Banner background rotator: change images every 2 seconds. Using local images from images folder 
            const banner = document.querySelector('.banner');
            const bannerImages = [
                //'images/slide2.jpg',
                //'images/slide2.jpg',
                //'images/slide2.jpg',
                //'images/slide2.jpg',
            ];

            // preload images
            bannerImages.forEach(src => { const i = new Image(); i.src = src; });

            let bi = 0;
            function setBannerBg(i){
                if(!banner) return;
                banner.style.backgroundImage = `url('${bannerImages[i]}')`;
                // add temporary class to animate glass-card nudge
                banner.classList.add('bg-change');
                setTimeout(()=> banner.classList.remove('bg-change'), 700);
            }

            if(banner && bannerImages.length){
                setBannerBg(0);
                setInterval(()=>{ bi = (bi + 1) % bannerImages.length; setBannerBg(bi); }, 2000);
            }*/
        });