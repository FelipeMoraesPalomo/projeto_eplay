import bannerimg from '../../assets/images/fundo_hogwarts.png'
import Button from '../Button'
import Tag from '../Tag'

import * as S from './styles'

const Hero = () => (
  <S.Banner style={{ backgroundImage: `url(${bannerimg})` }}>
    <div className="container">
      <div>
        <Tag>Rpg</Tag>
        <Tag>PS5</Tag>
      </div>
      <S.Infos>
        <h2>Hogwarts Legacy</h2>
        <p>
          <span>De R$ 250,00</span>
          por R$ 190,00
        </p>
        <Button
          type="button"
          title="Clique para adicionar este jogo ao carrinho"
          variant="primary"
        >
          Adicionar ao carrinho
        </Button>
      </S.Infos>
    </div>
  </S.Banner>
)

export default Hero
