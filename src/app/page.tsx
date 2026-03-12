"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroCentered from '@/components/sections/hero/HeroCentered';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Heart, Sparkles, Star } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="directional-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="compact"
      sizing="large"
      background="grid"
      cardStyle="inset"
      primaryButtonStyle="flat"
      secondaryButtonStyle="layered"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="Bäckerei Haas"
          navItems={[
            { name: "Backwaren", id: "products" },
            { name: "Über uns", id: "about" },
            { name: "Kontakt", id: "contact" }
          ]}
          button={{ text: "Besuch uns", href: "#visit" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroCentered
          title="Tradition, die man schmecken kann"
          description="Seit Jahren backen wir bei Bäckerei Haas jeden Morgen frisch – mit ehrlichen Zutaten und echter Handarbeit."
          background={{ variant: "plain" }}
          avatars={[
            {
              src: "http://img.b2bpic.net/free-photo/bakery-bread-wooden-table_1421-437.jpg",              alt: "Frisch gebackenes Brot"
            }
          ]}
          avatarText="Täglich frisch aus unserem Ofen"
          buttons={[
            { text: "Unsere Backwaren", href: "#products" },
            { text: "Frühstück & Snacks", href: "#products" }
          ]}
          buttonAnimation="slide-up"
          ariaLabel="Hero section - Bäckerei Haas"
        />
      </div>

      <div id="about" data-section="about">
        <MetricSplitMediaAbout
          title="Was macht Bäckerei Haas besonders"
          description="Wir vereinen traditionelles Handwerk mit modernem Service. Jedes Produkt entsteht mit Sorgfalt und Leidenschaft."
          tag="Unser Handwerk"
          tagIcon={Sparkles}
          metrics={[
            { value: "Jeden Morgen", title: "Frisch gebacken aus unserem Ofen" },
            { value: "100%", title: "Handwerk ohne Industrieproduktion" }
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/high-angle-father-son-making-dough_23-2148366158.jpg"
          imageAlt="Handwerkliche Bäckerei"
          useInvertedBackground={false}
          mediaAnimation="slide-up"
          metricsAnimation="slide-up"
          ariaLabel="About section"
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardFour
          title="Unsere Backwaren"
          description="Eine sorgfältig ausgewählte Auswahl an frischen, handwerklich hergestellten Produkten für jeden Tag."
          tag="Täglich frisch"
          products={[
            {
              id: "bauernbrot",              name: "Bauernbrot",              price: "€4,50",              variant: "Rustikales Mischbrot",              imageSrc: "http://img.b2bpic.net/free-photo/utensils-rope-near-bread_23-2147851914.jpg",              imageAlt: "Bauernbrot"
            },
            {
              id: "roggenbrot",              name: "Roggenbrot",              price: "€4,20",              variant: "Vollkorn Roggen",              imageSrc: "http://img.b2bpic.net/free-photo/utensils-rope-near-bread_23-2147851914.jpg",              imageAlt: "Roggenbrot"
            },
            {
              id: "kaisersemmel",              name: "Kaiserbrötchen",              price: "€0,80",              variant: "6er Packung",              imageSrc: "http://img.b2bpic.net/free-photo/homemade-sausages-dough_114579-24537.jpg",              imageAlt: "Kaiserbrötchen"
            },
            {
              id: "koernerbroetchen",              name: "Körnerbrötchen",              price: "€0,95",              variant: "Mit Leinsamen",              imageSrc: "http://img.b2bpic.net/free-photo/homemade-sausages-dough_114579-24537.jpg",              imageAlt: "Körnerbrötchen"
            },
            {
              id: "croissant",              name: "Croissant",              price: "€2,50",              variant: "Butter, Schoko",              imageSrc: "http://img.b2bpic.net/free-photo/baked-breads-buns-kept-shelf_1170-2304.jpg",              imageAlt: "Croissant"
            },
            {
              id: "belagtes-broetchen",              name: "Belegte Brötchen",              price: "€5,00",              variant: "Käse, Schinken, Salat",              imageSrc: "http://img.b2bpic.net/free-photo/baked-breads-buns-kept-shelf_1170-2304.jpg",              imageAlt: "Belegte Brötchen"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          ariaLabel="Product section"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwelve
          testimonials={[
            {
              id: "1",              name: "Maria Schmidt",              imageSrc: "http://img.b2bpic.net/free-photo/handsome-man-outdoors-portrait_158595-3547.jpg",              imageAlt: "Maria Schmidt"
            },
            {
              id: "2",              name: "Thomas Weber",              imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-adult-woman-portrait_23-2149069158.jpg",              imageAlt: "Thomas Weber"
            },
            {
              id: "3",              name: "Anna Müller",              imageSrc: "http://img.b2bpic.net/free-photo/handsome-smug-look-man-looking-camera_329181-541.jpg",              imageAlt: "Anna Müller"
            },
            {
              id: "4",              name: "Klaus Fischer",              imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-smiling-woman-looking-camera_23-2148187139.jpg",              imageAlt: "Klaus Fischer"
            }
          ]}
          cardTitle="Alles lecker – Bedienung super freundlich. Darum kommen unsere Gäste jeden Morgen vorbei."
          cardTag="Von unseren Gästen geliebt"
          cardTagIcon={Star}
          cardAnimation="slide-up"
          useInvertedBackground={false}
          ariaLabel="Testimonials section"
        />
      </div>

      <div id="story" data-section="story">
        <MetricSplitMediaAbout
          title="Bäckerei Haas in Hainburg"
          description="In Hainburg ist Bäckerei Haas seit Jahren ein fester Bestandteil des Alltags. Viele unserer Gäste kommen jeden Morgen vorbei – für frische Brötchen, ein schnelles Frühstück oder einfach ein freundliches Gespräch. Wir backen mit Liebe, Zeit und echtem Handwerk."
          tag="Unsere Geschichte"
          tagIcon={Heart}
          metrics={[
            { value: "20+", title: "Jahre Erfahrung und Tradition" },
            { value: "Täglich", title: "Frische Zutaten, ehrliches Handwerk" }
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/best-friends-getting-some-street-food-outdoors_23-2149009644.jpg"
          imageAlt="Bäckerei Haas Geschäft"
          useInvertedBackground={false}
          mediaAnimation="slide-up"
          metricsAnimation="slide-up"
          ariaLabel="Story section"
        />
      </div>

      <div id="visit" data-section="visit">
        <ContactSplitForm
          title="Besuchen Sie uns"
          description="Königsberger Str. 75, 63512 Hainburg. Rufen Sie an oder planen Sie Ihre Route zu uns."
          inputs={[
            { name: "name", type: "text", placeholder: "Ihr Name", required: true },
            { name: "phone", type: "tel", placeholder: "Telefon", required: true }
          ]}
          textarea={{ name: "message", placeholder: "Ihre Nachricht (optional)", rows: 4, required: false }}
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-photo/best-friends-getting-some-street-food-outdoors_23-2149009644.jpg"
          imageAlt="Bäckerei Haas"
          mediaAnimation="slide-up"
          mediaPosition="right"
          buttonText="Senden"
          ariaLabel="Contact section"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Bäckerei Haas",              items: [
                { label: "Königsberger Str. 75", href: "#" },
                { label: "63512 Hainburg", href: "#" },
                { label: "Telefon: 06182 9479171", href: "tel:061829479171" }
              ]
            },
            {
              title: "Öffnungszeiten",              items: [
                { label: "Mo–Fr: 06:00 – 18:00", href: "#" },
                { label: "Sa: 06:00 – 13:00", href: "#" },
                { label: "So: Geschlossen", href: "#" }
              ]
            },
            {
              title: "Navigation",              items: [
                { label: "Startseite", href: "/" },
                { label: "Backwaren", href: "#products" },
                { label: "Über uns", href: "#story" },
                { label: "Kontakt", href: "#visit" }
              ]
            }
          ]}
          copyrightText="© 2025 Bäckerei Haas. Mit Liebe gebacken in Hainburg."
          ariaLabel="Footer"
        />
      </div>
    </ThemeProvider>
  );
}
