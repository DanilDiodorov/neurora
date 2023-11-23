import { Link } from 'react-router-dom'
import styled from 'styled-components'

const FormLink = styled(Link)`
    color: ${({ color = '#1d7195' }) => color};
    text-decoration: none;
`

export default FormLink
