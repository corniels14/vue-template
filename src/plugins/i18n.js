import { createI18n } from 'vue-i18n';

const messages = {
    en: {
        welcome: 'Welcome'
    },
    nl: {
        welcome: 'Welkom'
    }
}

const i18n = createI18n({
    locale: 'en',
    messages,
});

export default i18n;