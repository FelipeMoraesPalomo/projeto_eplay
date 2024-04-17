import Section from '../Section'
import zelda from '../../assets/images/zelda.png'

import * as S from './styles'

const Gallery = () => (
  <Section title="Galeria" background="black">
    <S.Items>
      <S.Item>
        <img src={zelda} alt="imagem do link" />
      </S.Item>
      <S.Item>
        <img src={zelda} alt="imagem do link" />
      </S.Item>
      <S.Item>
        <img src={zelda} alt="imagem do link" />
      </S.Item>
      <S.Item>
        <img src={zelda} alt="imagem do link" />
      </S.Item>
    </S.Items>
  </Section>
)

export default Gallery
