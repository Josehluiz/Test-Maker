document.getElementById('create-card').addEventListener('click', function() {
    document.getElementById('create-card').classList.add('d-none');
    document.getElementById('create-form').classList.remove('d-none');
});

document.getElementById('advance-btn').addEventListener('click', function() {
    window.location.href = 'gerar.html';
});