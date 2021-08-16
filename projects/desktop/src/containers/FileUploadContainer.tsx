/**
 * For testing purpose only
 **/

import React, { useContext, ChangeEvent, useState, useEffect } from 'react'
import { ThemeContext } from 'styled-components'
import axios, { AxiosResponse } from 'axios'

import { getLogo } from '../helpers/logo'
import { ITheme } from '../interfaces/theme'
import { IDangerousHTMLContent } from '../interfaces/generics'
import { SingleFormContainer } from '../components'
import { Logo } from '../components/atoms/singleForm/Logo'
import { LoginBox } from '../components/atoms/login/LoginBox'
import { BigTitle } from '../components/atoms/singleForm/BigTitle'
import { LeftSide } from '../components/molecules/singleForm/LeftSide'
import { SFLanguageChooser } from '../components/molecules/singleForm/SFLanguageChooser'
import { serverURL } from '../constants/misc'

export const FileUploadContainer = (): JSX.Element => {
	const theme: ITheme = useContext(ThemeContext)
	const [files, setFiles] = useState<File[]>([])
	const getTitleContent = (): IDangerousHTMLContent => ({
		__html: '<span>Upload</span> your files',
	})

	const handleFileSelected = (event: ChangeEvent<HTMLInputElement>) => {
		const target = event.target
		const files = target.files

		if (files) {
			setFiles(Array.from(files))
		}
	}

	const uploadFiles = async (files: File[]) => {
		const formData = new FormData()

		for (const file of files) {
			formData.append(file.name, file)
		}

		const response: AxiosResponse = await axios.post(`${serverURL}/file/upload`, formData, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		})
	}

	useEffect(() => {
		if (files?.length) {
			uploadFiles(files).catch((e) => {
				console.error(e)
			})
		}
	}, [files])

	return (
		<SingleFormContainer>
			<LoginBox>
				<LeftSide>
					<Logo src={getLogo(theme)} alt="Bitsky" />
					<SFLanguageChooser />
					<BigTitle dangerouslySetInnerHTML={getTitleContent()} />
					<input type="file" multiple onChange={handleFileSelected} />
				</LeftSide>
			</LoginBox>
		</SingleFormContainer>
	)
}
