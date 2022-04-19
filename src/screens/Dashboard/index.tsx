import React from "react"
import { getBottomSpace } from 'react-native-iphone-x-helper';

import { HighlightCard } from "../../components/HighlightCard"
import { TransactionCard } from "../../components/TransactionCard"

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionsList,

} from "./styles"

export function Dashboard() {
  const data = [
    {
    type: 'positive',
    title: "Desenvolvimento de site",
    amount: "R$ 12.000,00",
    category: {
      name: 'Vendas',
      icon: 'dollar-sign',
    },
    date: "13/04/2020"
  },
  {
    type: 'negative',
    title: "Hamburguer Pizzy",
    amount: "R$ 59,00",
    category: {
      name: 'Alimentação',
      icon: 'coffee',
    },
    date: "10/04/2020"
  },
  {
    type: 'positive',
    title: "Aluguel do apartamento",
    amount: "R$ 1.200,00",
    category: {
      name: 'Casa',
      icon: 'shopping-bag',
    },
    date: "10/04/2020"
  },
]

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: "https://avatars.githubusercontent.com/u/53520169?v=4",
              }}
            />
            <User>
              <UserGreeting>Ola, </UserGreeting>
              <UserName>Murilo</UserName>
            </User>
          </UserInfo>

          <Icon name="power" />
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard />
        <HighlightCard />
        <HighlightCard />
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>
        
        <TransactionsList
          data={data}
          renderItem={({ item }) => <TransactionCard data={item} />}
          
        />
        
        
         
        
      </Transactions>

    </Container>
  )
}
