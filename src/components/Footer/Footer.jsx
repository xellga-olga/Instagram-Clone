import React from 'react';
import './footer.css'
import {useTranslation} from "react-i18next";

const Footer = () => {
  const {t, i18n} = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="footer">
      <div className="footer-links">
        <a href="#">{t('footerLinks.meta')}</a>
        <a href="#">{t('footerLinks.info')}</a>
        <a href="#">{t('footerLinks.blog')}</a>
        <a href="#">{t('footerLinks.jobs')}</a>
        <a href="#">{t('footerLinks.help')}</a>
        <a href="#">{t('footerLinks.api')}</a>
        <a href="#">{t('footerLinks.privacy')}</a>
        <a href="#">{t('footerLinks.terms')}</a>
        <a href="#">{t('footerLinks.locations')}</a>
        <a href="#">{t('footerLinks.instagramLite')}</a>
        <a href="#">{t('footerLinks.metaAi')}</a>
        <a href="#">{t('footerLinks.metaAiArticles')}</a>
        <a href="#">{t('footerLinks.threads')}</a>
        <a href="#">{t('footerLinks.contactUploading')}</a>
        <a href="#">{t('footerLinks.metaVerified')}</a>
      </div>

      <div className="footer-bottom">
        <div className="lang-switcher-footer">
          <select
            className="lang-select-footer"
            value={i18n.language}
            onChange={(e) => changeLanguage(e.target.value)}
          >
            <option value="ru">Русский</option>
            <option value="en">English</option>
          </select>
        </div>

        <p>{t('rightSide.copyright')}</p>
      </div>
    </div>
  );
};

export default Footer;