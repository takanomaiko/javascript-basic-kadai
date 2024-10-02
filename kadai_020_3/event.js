const btn = document.getElementById('btn');

btn.addEventListener('click', ()=>{
    const text = 'ボタンをクリックしました';
    document.getElementById("text").textContent = text;
});