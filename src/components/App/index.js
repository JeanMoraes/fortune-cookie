import React, { useState } from 'react';

import Card from '../Card';
import Button from '../Button';
import './index.css';

function App(){

  const [luck, setLuck] = useState("Clique no botão para descobrir sua sorte");
  const phrases = [
                  'A vida trará coisas boas se tiveres paciência.',
                  'Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.',
                  'Não compense na ira o que lhe falta na razão.',
                  'Defeitos e virtudes são apenas dois lados da mesma moeda.'
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
