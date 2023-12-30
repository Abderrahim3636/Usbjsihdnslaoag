const omenu = document.getElementById('omenu');
const cmenu = document.getElementById('cmenu');
const oside = document.getElementById('oside');

omenu.addEventListener('click', () => {
    oside.classList.add('active');
});
cmenu.addEventListener('click', () => {
    oside.classList.remove('active');
});