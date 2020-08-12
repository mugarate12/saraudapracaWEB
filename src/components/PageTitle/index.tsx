import React from 'react'

import * as Styled from './styles'

interface PageTitleProps {
  content: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ content }) => {
  return (
    <Styled.Title>{content}</Styled.Title>
  )
}

export default PageTitle
