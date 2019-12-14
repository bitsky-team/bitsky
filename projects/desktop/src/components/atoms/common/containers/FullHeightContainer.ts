import styled from 'styled-components'
import { Container as MaterialContainer } from '@material-ui/core'

/**
 * A container who takes the full screen height
 * and centers the content
 */
export const FullHeightContainer = styled(MaterialContainer)`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
