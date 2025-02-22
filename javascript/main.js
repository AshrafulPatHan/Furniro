// Fecth data

document.addEventListener("DOMContentLoaded", () => {
    const sec3Div = document.getElementById("Sec3-div-pri");
    console.log("Hello world");
    
    fetch("https://furnio-server.vercel.app/Image") // API থেকে ডাটা ফেচ করা
        .then(response => response.json()) // JSON এ কনভার্ট করা
        .then(data => {
            sec3Div.innerHTML = data.map(item => `
                <div class="product-card">
                    <img src="${item.Img}" alt="Product Image" class="product-img">
                </div>
            `).join(""); // প্রতিটি আইটেমের জন্য HTML তৈরি করা
        })
        .catch(error => console.error("Error fetching data:", error));
});




