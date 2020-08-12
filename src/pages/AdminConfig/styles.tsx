import styled from 'styled-components'

import backgroundImage from './../../assets/imgs/admin-background.svg'

export const Container = styled.div`
  height: 100vh;

  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-position: top center;
  background-attachment: fixed;
  background-size: cover;

  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
`
