import VueI18n from 'vue-i18n';
import { config } from '../config';
import defaultTranslation from './default';

export const translationFactory = (customerConfig, translations) => new VueI18n({
  locale: customerConfig.language,
  fallbackLocale: 'en-PIRATE',
  messages: {
    [customerConfig.language]: translations[config.serviceName],
    'en-PIRATE': defaultTranslation
  },
  silentTranslationWarn: true
});
