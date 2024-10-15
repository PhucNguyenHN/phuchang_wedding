$(document).ready(function() {
    $('#GROUP537').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 'smooth');
    });

    // Image Data (URLs, alt, sizes, etc.)
    const images = [
        {
            href: "images/ph/anh_slide_1.JPG",
            src: "images/ph/anh_slide_1.JPG",
            width: 1000,
            height: 1500,
            paddingTop: "150%",
            sizes: "(max-width: 1000px) 100vw, 1000px"
        },
        {
            href: "images/ph/anh_slide_2.JPG",
            src: "images/ph/anh_slide_2.JPG",
            width: 1100,
            height: 733,
            paddingTop: "75%",
            sizes: "(max-width: 1100px) 100vw, 1100px"
        },
        {
            href: "images/ph/anh_slide_3.JPG",
            src: "images/ph/anh_slide_3.JPG",
            width: 800,
            height: 1200,
            paddingTop: "150%",
            sizes: "(max-width: 800px) 100vw, 800px"
        },
        {
            href: "images/ph/anh_slide_4.JPG",
            src: "images/ph/anh_slide_4.JPG",
            width: 1000,
            height: 1500,
            paddingTop: "150%",
            sizes: "(max-width: 1000px) 100vw, 1000px"
        },
        {
            href: "images/ph/anh_slide_5.JPG",
            src: "images/ph/anh_slide_5.JPG",
            width: 800,
            height: 1200,
            paddingTop: "75%",
            sizes: "(max-width: 800px) 100vw, 800px"
        },
        {
            href: "images/ph/anh_slide_6.JPG",
            src: "images/ph/anh_slide_6.JPG",
            width: 1000,
            height: 1500,
            paddingTop: "150%",
            sizes: "(max-width: 1000px) 100vw, 1000px"
        },
        {
            href: "images/ph/anh_slide_7.JPG",
            src: "images/ph/anh_slide_7.JPG",
            width: 1600,
            height: 1067,
            paddingTop: "75%",
            sizes: "(max-width: 1600px) 100vw, 1600px"
        },
        {
            href: "images/ph/anh_slide_8.JPG",
            src: "images/ph/anh_slide_8.JPG",
            width: 800,
            height: 1200,
            paddingTop: "150%",
            sizes: "(max-width: 800px) 100vw, 800px"
        },
        {
            href: "images/ph/anh_slide_9.JPG",
            src: "images/ph/anh_slide_9.JPG",
            width: 1500,
            height: 1000,
            paddingTop: "150%",
            sizes: "(max-width: 1500px) 100vw, 1500px"
        },
        {
            href: "images/ph/anh_slide_10.JPG",
            src: "images/ph/anh_slide_10.JPG",
            width: 1500,
            height: 1000,
            paddingTop: "72%",
            sizes: "(max-width: 1500px) 100vw, 1500px"
        },
        {
            href: "images/ph/anh_slide_11.JPG",
            src: "images/ph/anh_slide_11.JPG",
            width: 1700,
            height: 1133,
            paddingTop: "71%",
            sizes: "(max-width: 1700px) 100vw, 1700px"
        },
        {
            href: "images/ph/anh_slide_12.JPG",
            src: "images/ph/anh_slide_12.JPG",
            width: 1500,
            height: 1000,
            paddingTop: "100%",
            sizes: "(max-width: 1500px) 100vw, 1500px"
        },
        {
            href: "images/ph/anh_slide_13.JPG",
            src: "images/ph/anh_slide_13.JPG",
            width: 1500,
            height: 1000,
            paddingTop: "100%",
            sizes: "(max-width: 1500px) 100vw, 1500px"
        },
        {
            href: "images/ph/anh_slide_14.JPG",
            src: "images/ph/anh_slide_14.JPG",
            width: 1000,
            height: 1500,
            paddingTop: "150%",
            sizes: "(max-width: 1000px) 100vw, 1000px"
        },
        {
            href: "images/ph/anh_slide_15.JPG",
            src: "images/ph/anh_slide_15.JPG",
            width: 800,
            height: 1200,
            paddingTop: "75%",
            sizes: "(max-width: 800px) 100vw, 800px"
        },
        {
            href: "images/ph/anh_slide_16.JPG",
            src: "images/ph/anh_slide_16.JPG",
            width: 1000,
            height: 1500,
            paddingTop: "150%",
            sizes: "(max-width: 1000px) 100vw, 1000px"
        }
    ];    
    

    // Function to dynamically create image elements
    function createImageElement(imageData) {
        const col = document.createElement('div');
        col.className = 'col medium-3 small-6 large-3';
        
        const colInner = document.createElement('div');
        colInner.className = 'col-inner';
        
        const imgContainer = document.createElement('div');
        imgContainer.className = 'img has-hover x md-x lg-x y md-y lg-y';
        
        const link = document.createElement('a');
        link.className = 'image-lightbox lightbox-gallery';
        link.href = imageData.href;
        link.setAttribute('title', '');
        
        const imgWrapper = document.createElement('div');
        imgWrapper.dataset.animate = 'bounceIn';
        
        const imgInner = document.createElement('div');
        imgInner.className = 'img-inner image-cover box-shadow-4-hover dark';
        imgInner.style.paddingTop = `${imageData.ratio}%`;
        
        const img = document.createElement('img');
        img.loading = 'lazy';
        img.decoding = 'async';
        img.width = imageData.width;
        img.height = imageData.height;
        img.src = imageData.src;
        img.alt = imageData.alt;
        img.sizes = `(max-width: ${imageData.width}px) 100vw, ${imageData.width}px`;
        
        // Append elements to build the structure
        imgInner.appendChild(img);
        imgWrapper.appendChild(imgInner);
        link.appendChild(imgWrapper);
        imgContainer.appendChild(link);
        colInner.appendChild(imgContainer);
        col.appendChild(colInner);
        
        return col;
    }

    // Append all images to the container
    const imageContainer = document.getElementById('imageContainer');
    images.forEach(imageData => {
        const imageElement = createImageElement(imageData);
        imageContainer.appendChild(imageElement);
    });

});

