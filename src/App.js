import React from 'react'
import {View, StyleSheet} from 'react-native'

import ParImpar from './components/ParImpar'
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
    <ParImpar num={1} />
    {/*
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
