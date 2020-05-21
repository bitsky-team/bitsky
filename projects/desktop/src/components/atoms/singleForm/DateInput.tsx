import React from 'react'

import { MaskedInput } from '../../'
import { MaskedInputProps } from './MaskedInput'

export const DateInput = ({ inputRef, ...rest }: MaskedInputProps): JSX.Element =>
    <MaskedInput
        {...rest}
        inputRef={inputRef}
        mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
        showMask={false}
    />