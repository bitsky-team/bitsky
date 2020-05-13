import React from 'react'
import { SFTextField, DateInput } from '../../../'

/**
 * Date field for single form
 */
interface IOwnProps {
    name: string;
    label: string;
    validators: any[];
}

type IProps = IOwnProps

export const SFDateField = (props: IProps): JSX.Element => (
    <SFTextField {...props} customComponent={DateInput} />
)