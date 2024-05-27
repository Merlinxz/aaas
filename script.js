document.addEventListener('DOMContentLoaded', function() {
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');

    yesButton.addEventListener('click', function() {
        swal("!", "ไม่มีอะไรหรอก", "success");
    });

    noButton.addEventListener('mouseover', function() {
        // Hide the button
        noButton.classList.add('hidden');
        setTimeout(() => {
            // Reset button position
            const randomX = Math.floor(Math.random() * (window.innerWidth - noButton.offsetWidth));
            const randomY = Math.floor(Math.random() * (window.innerHeight - noButton.offsetHeight));
            noButton.style.position = 'absolute';
            noButton.style.left = randomX + 'px';
            noButton.style.top = randomY + 'px';

            // Show the button again
            noButton.classList.remove('hidden');
            // Trigger CSS animation
            noButton.classList.add('animated');
            setTimeout(() => {
                noButton.classList.remove('animated');
            }, 800); // Adjusted duration to match CSS animation duration
        }, 300); // Delay before showing the button again
    });
});