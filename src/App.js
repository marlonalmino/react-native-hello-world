import React from 'react'
import {View, StyleSheet} from 'react-native'

import UsuarioLogado from './components/UsuarioLogado'
// import Familia from './components/relacao/Familia'
// import Membro from './components/relacao/Membro'
// import ParImpar from './components/ParImpar'
// import ContadorV2 from './components/contador/ContadorV2'
// import Pai from './components/indireta/Pai'
// import Contador from './components/Contador'
// import Botao from './components/Botao'
// import Titulo from './components/Titulo'
// import Aleatorio from './components/Aleatorio'
// import MinMax from './components/MinMax'
// import CompPadrao, {Comp1, Comp2} from './components/Multi'
// import Primeiro from './components/Primeiro'

export default () => (
  <View style={style.App}>
    <UsuarioLogado usuario={{nome: 'Gui', email: 'gui@gui.com'}} />
    <UsuarioLogado usuario={{nome: 'Gui'}} />
    <UsuarioLogado usuario={{ email: 'carlos@email.com' }} />
    <UsuarioLogado usuario={null} />
    <UsuarioLogado usuario={{}} />
    {/*
    <Familia>
      <Membro nome='Bia' sobrenome='Arruda' />
      <Membro nome='Carlos' sobrenome='Arruda' />
    </Familia>

    <Familia>
      <Membro nome='Ana' sobrenome='Silva' />
      <Membro nome='Julia' sobrenome='Silva' />
      <Membro nome='Gui' sobrenome='Silva' />
      <Membro nome='Rebeca' sobrenome='Silva' />
    </Familia>
    <ParImpar num={1} />
    <ContadorV2 />
    <Pai />
    <Contador inicial={100} passo={13} />
    <Contador />
    <Botao />
    <Titulo
      principal="Cadastro de Produto"
      secundario="Tela de Cadastro do produto"
    />
    <Aleatorio min={10} max={60} />
    <Aleatorio min={10} max={60} />
    <Aleatorio min={10} max={60} />
    <Aleatorio min={10} max={60} />
    <Aleatorio min={10} max={60} />
    <Aleatorio min={10} max={60} />
    <MinMax min={3} max={20} />
    <MinMax min={1} max={94} />
    <CompPadrao />
    <Comp1 />
    <Comp2 />
    <Primeiro /> */}
  </View>
)

const style = StyleSheet.create({
  App: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
})
