import Button from '../Button'

import * as S from './styles'

import starwars from '../../assets/images/star_wars.png'
import Tag from '../Tag'

const Cart = () => (
  <S.CartContainer>
    <S.Overlay />
    <S.Sidebar>
      <ul>
        <S.CartItem>
          <img src={starwars} />
          <div>
            <h3>Nome do jogo</h3>
            <Tag>RPG</Tag>
            <Tag>PS5</Tag>
            <span>R$ 150,00</span>
          </div>
          <button type="button" />
        </S.CartItem>
        <S.CartItem>
          <img src={starwars} />
          <div>
            <h3>Nome do jogo</h3>
            <Tag>RPG</Tag>
            <Tag>PS5</Tag>
            <span>R$ 150,00</span>
            <button type="button" />
          </div>
        </S.CartItem>
      </ul>
      <S.Quantity>2 jogo(s) no carinho</S.Quantity>
      <S.Prices>
        Total de R$ 250,00 <span>Em até 6x sem juros</span>
      </S.Prices>
      <Button title="Clique aqui para continuar com a compra" type="button">
        Continuar com a compra
      </Button>
    </S.Sidebar>
  </S.CartContainer>
)

export default Cart
