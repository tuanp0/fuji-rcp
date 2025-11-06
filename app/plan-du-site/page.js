import recipes from '@data/recipes'
import Link from 'next/link'
import { Back } from '@components/Back'
import { Container } from '@components/Container'

import styles from './page.module.scss'

// export const dynamic = 'force-static'

const SitemapPage = () => {
  return (
    <main className={styles.sitemap}>
      <section>
        <Back link={`/`} />
        <Container className={styles.container}>
          <div className={styles.sitemapContent}>
            <h1>Pages</h1>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/recipe-comparateur">Comparateur de recipe</Link></li>
              <li><Link href="/recipe-installation">Installation de recipe</Link></li>
            </ul>

            <h2>Pages Recipe : ({recipes.length})</h2>
            <ul>
              {recipes.map((recipe) => (
                <li key={recipe.slug}>
                  <Link href={`/${recipe.slug}`}>
                    {recipe.title}
                  </Link>
                  {' - '}
                  <span>{recipe.shortDesc}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </main>
  )
}

export default SitemapPage