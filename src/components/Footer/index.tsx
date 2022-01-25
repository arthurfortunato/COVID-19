import {
  ContainerStyled,
  IconsStyled,
  PresentationStyled
} from './styles';

import { 
  FiGithub,
  FiLinkedin,
  FiInstagram
} from 'react-icons/fi';

export const Footer = () => {
  return (
    <ContainerStyled>
      <IconsStyled>
        <a href="https://github.com/arthurfortunato" target="_blank" rel="noreferrer"><FiGithub size={"20px"}/></a>
        <a href="https://www.linkedin.com/in/arthur-forturnato-643828187/" target="_blank" rel="noreferrer" ><FiLinkedin size={"20px"}/></a>
        <a href="https://www.instagram.com/luizarthur.fortunato/" target="_blank" rel="noreferrer"><FiInstagram size={"20px"}/></a>
      </IconsStyled>

      <PresentationStyled>
        <p>
          Desenvolvido por
          <strong>
            <a href="https://portfolioarthurfortunato.netlify.app/" target="_blank" rel="noreferrer">Arthur Fortunato</a>
          </strong>
        </p>
      </PresentationStyled>
    </ContainerStyled>
  )
}