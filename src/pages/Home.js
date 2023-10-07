import getData from '../utils/getData';

const Home =  async () => {

    const characters = await getData();

    const view =  `
        <div class="Characters">
        ${characters.data.map(character => `
        <article class="Character-item">
            <a href="#/${character.id}/">
            <h2>"symbol" : ${character.symbol}</h2>
            <h2>"name" : ${character.name}</h2>
            <h2>"nameid" : ${character.nameid}</h2>
            <h2>"rank" : ${character.rank}</h2>
            <h2>"price_usd" : ${character.price_usd}</h2>
            </a>
        </article>
                `).join('') }
        </div  
            `
    return view;
}

export default Home;