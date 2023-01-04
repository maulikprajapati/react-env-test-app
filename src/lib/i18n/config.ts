import i18n, { TFunction } from 'i18next';
import { initReactI18next } from 'react-i18next';
import { setLocale } from 'yup';
import en from './en/en.json';

export const defaultNS = 'en';

export const resources = { en: { en } };

export const buildYupLocale = (_: unknown, t: TFunction) => {
  setLocale({
    mixed: {
      default: t('validation.mixed.default') || '',
      required: t('validation.mixed.required') || '',
      defined: '${path} must be defined',
      oneOf: '${path} must be one of the following values: ${values}',
      notOneOf: '${path} must not be one of the following values: ${values}',
    },
    string: {
      length: t('validation.string.length') || '',
      min: t('validation.string.min') || '',
      max: t('validation.string.max') || '',
      matches: t('validation.string.matches') || '',
      email: t('validation.string.email') || '',
      url: t('validation.string.url') || '',
      uuid: t('validation.string.uuid') || '',
      trim: t('validation.string.trim') || '',
      lowercase: t('validation.string.lowercase') || '',
      uppercase: t('validation.string.uppercase') || '',
    },
    number: {
      min: t('validation.number.min') || '',
      max: t('validation.number.max') || '',
      lessThan: t('validation.number.lessThan') || '',
      moreThan: t('validation.number.moreThan') || '',
      positive: t('validation.number.positive') || '',
      negative: t('validation.number.negative') || '',
      integer: t('validation.number.integer') || '',
    },
    date: {
      min: t('validation.date.min') || '',
      max: t('validation.date.max') || '',
    },
    boolean: {
      isValue: t('validation.boolean.isValue') || '',
    },
    object: {
      noUnknown: t('validation.object.noUnknown') || '',
    },
    array: {
      min: t('validation.array.min') || '',
      max: t('validation.array.max') || '',
      length: t('validation.array.length') || '',
    },
  });
};

i18n.use(initReactI18next).init(
  {
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  },
  buildYupLocale,
);

export default i18n;
