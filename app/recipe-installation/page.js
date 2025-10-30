import howTo from '@data/howTo'

import React from 'react'
import { Wysiwyg } from '@components/Wysiwyg'

const InstallationPage = () => {
  return (
    <main>
      <section>
        <Wysiwyg title={howTo.title} subtitle={howTo.subtitle} description={howTo.description} />
      </section>
    </main>
  )
}

export default InstallationPage