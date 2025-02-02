const apiKey = {
    key: '59397ca3-e17a-4592-8e57-43bfb9296da1'
}


//get
fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=${apiKey.key}`)
    .then((response) => {
        if(!response.ok) throw new Error('Erro ao executar a requisição, status', response.status)
        return response.json();
    })
    .then((api) => {

        var text = '';
        for (let i = 0; i <= 10; i++) {
            text += `
                <div class='media'>
                    <img src="./img/coin.jpg" alt="coin" class="align-self-center mr-3" width="80" height="60"/>
                    <div class='media-body'>
                        <h5 class='mt-2'>${api.data[i].name}</h5>
                        <p>${api.data[i].symbol}</p>
                    </div>
                </div>
                `;

                document.getElementById('coins').innerHTML = text;
        }
        console.log(api);
    })
    .catch((error) => {
        console.error(error.message);
    })