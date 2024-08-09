document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('pencil_icon').addEventListener('click', function() {
        document.getElementById('Container_drop').innerHTML = `
            <div class="container_textarea">
                <textarea id="text-input" placeholder="Escreva aqui"></textarea>
            </div>
        `;
    });
});