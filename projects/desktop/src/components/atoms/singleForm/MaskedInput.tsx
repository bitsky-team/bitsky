import React from 'react'
import Masked from 'react-text-mask'

export interface MaskedInputProps {
	inputRef: (ref: HTMLInputElement | null) => void
	mask: (string | RegExp)[]
	showMask: boolean
}

export const MaskedInput = ({
	inputRef,
	mask,
	showMask,
	...rest
}: MaskedInputProps): JSX.Element => (
	<Masked
		{...rest}
		ref={(ref: any) => {
			inputRef(ref ? ref.inputElement : null)
		}}
		mask={mask}
		showMask={showMask}
	/>
)
