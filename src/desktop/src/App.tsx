import React, {Suspense} from 'react'
import {Card, Button, Container} from '@material-ui/core'
import {useTranslation} from 'react-i18next'

export const App = (): JSX.Element => {
  const [t, i18n] = useTranslation()

  const toggleLang = async () => {
    await i18n.changeLanguage(
      i18n.language === 'en' ? 'fr' : 'en',
    )
  }

  return (
    <Container maxWidth='sm'>
      <Card>
        <h1>{t('app.test')}</h1>
        <Button
          variant='contained'
          color='primary'
          onClick={toggleLang}
        >
          This is a butiful button
        </Button>
      </Card>
    </Container>
  )
}
