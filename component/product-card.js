function createProductCard(imageSrc, title, price) {
    return `
        <div style="padding: 20px; text-align: center;">
            <div style="background-color: #D9CBB8; padding: 20px; border-radius: 8px;">
                <img src="${imageSrc}" alt="${title}" style="width: 100%; height: auto; border-radius: 8px;">
            </div>
            <h2 style="font-size: 1.2rem; font-weight: 600; color: #1A1A1A; margin-top: 10px;">${title}</h2>
            <p style="font-size: 1rem; color: #1A1A1A;">${price}</p>
        </div>
    `;
}

function addProductCard(containerId, imageSrc, title, price) {
    const container = document.getElementById(containerId);
    if (container) {
        const card = document.createElement("div");
        card.innerHTML = createProductCard(imageSrc, title, price);
        container.appendChild(card);
    } else {
        console.error("Container dengan ID '" + containerId + "' tidak ditemukan.");
    }
}
