document.addEventListener('DOMContentLoaded', function() {
    const legImage = document.getElementById('leg-image');
    const handImage = document.getElementById('hand-image');

    

    const handleNumberClick = (event) => {
        const part = event.target.dataset.part;
        const number = event.target.textContent;
        window.location.href = `detail.html?part=${part}&number=${number}`;
    };

    const numbers = document.querySelectorAll('.number');
    numbers.forEach(number => {
        number.addEventListener('click', handleNumberClick);
    });
});