// Optional: If you want to use JavaScript for hover effect (hover will work with just CSS, but this can be useful for mobile support).
document.querySelector('.dropdown').addEventListener('mouseover', function() {
    document.querySelector('.dropdown-menu').style.display = 'block';
});

document.querySelector('.dropdown').addEventListener('mouseout', function() {
    document.querySelector('.dropdown-menu').style.display = 'none';
});
