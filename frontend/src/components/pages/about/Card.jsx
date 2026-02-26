import React from 'react';
import { useTranslation } from 'react-i18next';
import Section from '../../Section';
import "../../../style.css";


function Card() {
  const { t } = useTranslation();

  return (
    <div className="card-page">
      <div className="card-container">
        <Section title={t('card.welcome.title', 'Welcome')}>
          <p className="card-section-content">
            {t('card.welcome.content', 'This is the about page content.')}
          </p>
        </Section>
        <Section title={t('card.stats.title', 'Stats')}>
          <p className="card-section-content">
            {t('card.stats.content', 'More content goes here.')}
          </p>
        </Section>
      </div>
    </div>
  );
}

export default Card;