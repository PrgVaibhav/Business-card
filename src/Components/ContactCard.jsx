import React from 'react';
import CardImage from './CardImage';
import AuthorCard from './AuthorCard';
import CardButton from './CardButton';
import AuthorInfo from './AuthorInfo';
import Footer from './Footer';
import './ContactCard.css';
import './responsive.css';

function ContactCard() {
  return (
    <main>
      <section className="contact-card">
        <CardImage />
        <AuthorCard />
        <CardButton />
        <AuthorInfo />
        <Footer />
      </section>
    </main>
  );
}

export default ContactCard;
