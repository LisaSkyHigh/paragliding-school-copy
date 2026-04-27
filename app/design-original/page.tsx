import HomeWelcomeLegacy from '@/components/home/HomeWelcomeLegacy'
import { generateMetadata } from '@/lib/seo'

export const metadata = generateMetadata({
  title: 'Design reference — homepage (pre–long copy)',
  description: 'Legacy hero and trust bar for visual comparison before new homepage copy.',
  path: '/design-original',
  noIndex: true,
})

export default function DesignOriginalPage() {
  return (
    <main>
      <HomeWelcomeLegacy />
    </main>
  )
}
