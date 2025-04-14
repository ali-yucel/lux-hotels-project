import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function Footer() {
  const t = useTranslations();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">LUX Hotels</h3>
            <p className="text-gray-400">
              {t('footer.description')}
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.quick_links.title')}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  {t('navigation.home')}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  {t('navigation.about')}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  {t('navigation.hotels')}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  {t('navigation.contact')}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.contact.title')}</h4>
            <ul className="space-y-2 text-gray-400">
              <li>{t('footer.contact.email')}</li>
              <li>{t('footer.contact.phone')}</li>
              <li>{t('footer.contact.address')}</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.social.title')}</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                {t('footer.social.instagram')}
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                {t('footer.social.twitter')}
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                {t('footer.social.facebook')}
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>{t('footer.copyright', { year: currentYear })}</p>
        </div>
      </div>
    </footer>
  );
} 