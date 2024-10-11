document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');


    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            const category = this.dataset.category;

            portfolioItems.forEach(item => {
                if (category === 'all' || item.dataset.category === category) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    const videos = document.querySelectorAll('.preview-video');

    
    videos.forEach(video => {
        video.addEventListener('mouseenter', () => {
            video.play();
        });

        video.addEventListener('mouseleave', () => {
            video.pause();
            video.currentTime = 0; 
        });
    });

    
    const emailForm = document.getElementById('email-form');
    if (emailForm) {
        emailForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const email = document.getElementById('email').value;

            
            fetch('https://script.google.com/macros/s/AKfycbxe9DwHcUg8HRvSVTE9lfu_TL-wTADLH7aYcm_uUJllFGGh3r3p2yI-AtpKhLPIFxqvZw/exec', {
                method: 'POST',
                body: JSON.stringify({ email: email }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(data => {
                alert('Thank you for subscribing!');
                document.getElementById('email').value = ''; 
            })
            .catch(error => {
                console.error('Error:', error);
            });
        });
    }
});
