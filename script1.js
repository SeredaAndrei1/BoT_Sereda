const contentContainer = document.getElementById('content-container');


const blockData = [
    {
        title: "Древняя Греция",
        text: "4000.",
        imgSrc: "https://avatars.mds.yandex.net/i?id=005db1434c69bca6b500441060bbbe7fb7b5f484-12539473-images-thumbs&n=13",
        quantity: 0
    },
    {
        title: "Древний Рим",
        text: "3500.",
        imgSrc: "https://avatars.mds.yandex.net/i?id=b46a9555294f44b4c2a3d35f929f1cee3cbeb305-10782253-images-thumbs&n=13",
        quantity: 0
    },
    {
        title: "Древний Китай",
        text: "4660.",
        imgSrc: "https://avatars.mds.yandex.net/i?id=614a8404539ded0844a024e853387fff-4696439-images-thumbs&n=13",
        quantity: 0
    },
    {
        title: "Древний Иран",
        text: "4200.",
        imgSrc: "https://avatars.mds.yandex.net/i?id=3b08c776a7dec17d9c80c5e6b5a4617c293137c3e15a7bf4-10804794-images-thumbs&n=13",
        quantity: 0
    },
    {
        title: "Древняя Русь",
        text: "2900.",
        imgSrc: "https://avatars.mds.yandex.net/i?id=71f5a744cf553dbd91f2d4a686df6c9a87cfda68-9215166-images-thumbs&n=13",
        quantity: 0
    },
    {
        title: "Византия",
        text: "2700.",
        imgSrc: "https://avatars.mds.yandex.net/i?id=ba4022878fcc717a12b3d972dbeacbac-4504275-images-thumbs&n=13",
        quantity: 0
    }
];

function createContentBlocks(data) {
    data.forEach((item, index) => {
        const block = document.createElement('div');
        block.className = 'content-block';
        block.innerHTML = `
            <h2>${item.title}</h2>
            <img src="${item.imgSrc}" alt="${item.title}">
            <p>${item.text}</p>
            <p>Количество: <input type="number" id="quantity-${index}" value="${item.quantity}" min="1"></p>
        `;
        contentContainer.appendChild(block);
    });
}


function goHome() {
    window.location.href = 'index.html'; 
}


async function sendData() {
    const dataToSend = blockData.map((item, index) => {
        const quantity = document.getElementById(`quantity-${index}`).value;
        return {
            title: item.title,
            quantity: quantity
        };
    });

    try {
        const response = await fetch('https://www.bing.com/search?', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataToSend)
        });

        if (!response.ok) {
            throw new Error('Сеть не отвечает');
        }

        const result = await response.json();
        console.log('Успешно отправлено:', result);
        alert('Данные успешно отправлены!');
    } catch (error) {
        console.error('Ошибка при отправке данных:', error);
        alert('Ошибка при отправке данных. Попробуйте еще раз.');
    }
}


createContentBlocks(blockData);


const sendButton = document.createElement('button');
sendButton.innerText = 'Отправить данные';
sendButton.onclick = sendData;
document.body.appendChild(sendButton);