function openNav() {
    document.getElementById("sidebar").style.width = "250px";
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0";
}

// Function to toggle between dark and light mode
function toggleMode() {
    const htmlElement = document.documentElement;
    htmlElement.classList.toggle('dark');
    const toggleButton = document.getElementById('toggleButton');
    if (htmlElement.classList.contains('dark')) {
        toggleButton.textContent = '☀️';
    } else {
        toggleButton.textContent = '🌙';
    }
}
