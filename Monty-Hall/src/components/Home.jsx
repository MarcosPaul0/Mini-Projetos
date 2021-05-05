import React from 'react'

import Main from '../templates/Main' 

export default function() {
    return (
        <Main>
            <div className="p-5">
                <p className="text-justify">Este problema tornou-se famoso nos EUA como o problema de Monty Hall, devido ao apresentador que possuía um quadro em seu programa 'Let's Make a Deal' nos anos 70, onde havia três portas sendo que, atrás de uma delas estava um prêmio e, atrás das outras duas, dois bodes.</p>

                <p className="text-justify">O jogo consistia na escolha de uma das três portas pelo participante, a partir desse ponto o apresentador revelava uma das portas erradas, logo depois perguntava se o participante gostaria de trocar de porta, e aí está o problema, a probabilidade seria maior se trocasse de porta ou seria de 50%?</p>

                <p className="text-justify">A resposta correta e contra-intuitiva é que é vantajoso trocar. Na verdade, é mais provável estatísticamente ganhar o prêmio se trocar de porta do que se não o fizer, pois a probabilidade em acertar na premiada passa para o dobro, de 33,33% para 66,66%.</p>

                <p className="text-justify">Quando o concorrente escolheu uma das portas, a chance de que ela seja a premiada é de 1/3. Como consequência, a probabilidade de que tenha errado é de 2/3.</p>

                <p className="text-justify">Entendendo isso, basta ver que o apresentador abrirá sem erro uma dessas outras duas portas que não contém o prêmio. Ao fazer isso, ele está lhe dando uma informação valiosa: se o prêmio estava nas outras portas não escolhida, então agora ele só pode estar na porta que você não escolheu e não foi aberta. Ou seja, se o concorrente errou ao escolher uma porta, e as chances disto são de 2/3, então ao abrir uma das outras portas não-premiadas o apresentador está lhe dizendo onde está o prêmio. Toda vez que o concorrente tiver escolhido inicialmente uma porta errada, ao trocar de porta irá com mais probabilidade ganhar. Já que as chances de que tenha errado em sua escolha inicial são de 2/3, se trocar suas chances de ganhar serão de 2/3 e por conseguinte a chance de que ganhe se não trocar de porta é de apenas 1/3. Portanto, é assim mais vantajoso trocar sempre de porta.</p>
            </div>
        </Main>
    )
} 