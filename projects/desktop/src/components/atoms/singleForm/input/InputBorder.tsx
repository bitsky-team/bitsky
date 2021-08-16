import styled from 'styled-components'

import { colors } from '../../../../constants'
import { IInputBorderProps } from '../../../../interfaces/forms'

/**
 * The input's border style
 *
 * Default colors:
 * - Grey when not filled
 * - Gradient pink-blue when filled correctly
 * - Red when not filled correctly
 */
export const InputBorder = styled.div<IInputBorderProps>`
	background: linear-gradient(180deg, ${colors.gradientPink} 0%, ${colors.gradientBlue} 100%);
	background: ${(props: IInputBorderProps) => props.borderColor};
	flex: 1;
	max-width: 2px;
`
