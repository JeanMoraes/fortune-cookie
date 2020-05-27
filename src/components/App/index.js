import React, { useState } from 'react';

import Card from '../Card';
import Button from '../Button';
import './index.css';

function App(){

  const [luck, setLuck] = useState("Clique no botão para descobrir sua sorte");
  const phrases = [
                  'A vida trará coisas boas se tiveres paciência.',
                  'Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.',
                  'Não compense na irá o que lhe falta na razão.',
                  'Defeitos e virtudes são apenas dois lados da mesma moeda.',
                  'Você é jovem apenas uma vez. Depois precisa inventar outra desculpa.',
                  'Más companhias são como um mercado de peixes: acaba-se acostumando com o mal cheiro.',
                  'As pessoas acham difícil resistir ao seu jeito persuasivo de ser.',
                  'Faça pequenas coisas agora e maiores coisas lhe serão confiadas cada dia.',
                  'As pessoas se esquecerão do que você disse e do que você fez… mas nunca se esquecerão de como você as fez sentir.',
                  'Você pode encontrar a si mesmo fazendo ou dizendo coisas que você nunca imaginou possíveis.'
                ];

  function breakCookie(){
    let randomNum = Math.floor(Math.random() * phrases.length);
    setLuck(phrases[randomNum]);
  }

    return (
        <Card luck={luck}>
          <Button
            name={"Quebre o Biscoito"}
            breakCookie={breakCookie}
            />
          </Card>
    );

}

export default App;
