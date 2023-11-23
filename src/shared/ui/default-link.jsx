import { Link } from 'react-router-dom'
import styled from 'styled-components'

const DefaultLink = styled(Link)`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
`

export default DefaultLink
