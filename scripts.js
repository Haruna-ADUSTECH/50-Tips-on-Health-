function toggleTip(id) {
    var tipContent = document.getElementById('tip' + id);
    if (tipContent.style.display === 'block') {
        tipContent.style.display = 'none';
    } else {
        tipContent.style.display = 'block';
    }
}
