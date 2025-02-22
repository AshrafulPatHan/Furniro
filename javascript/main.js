document.addEventListener("DOMContentLoaded", () => {
    const sec3Div = document.getElementById("Sec3-div-pri");

    if (sec3Div) {
        fetch("https://furnio-server.vercel.app/Image")
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log("Fetched Data:", data); // একবারই কনসোলে প্রিন্ট করা হচ্ছে

                sec3Div.innerHTML = data.map(item => `
                    <div class="product-card">
                        <img src="${item.Img}" alt="Product Image" class="product-img">
                        <h3 class="product-name">${item.name}</h3>
                        <p class="product-price">Price: ${item.price} $</p>
                    </div>
                `).join("");
            })
            .catch(error => console.error("Error fetching data:", error.message));
    } else {
        console.error("Element with ID 'Sec3-div-pri' not found.");
    }
});

