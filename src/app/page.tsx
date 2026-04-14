"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FeatureCardTwentyThree from '@/components/sections/feature/FeatureCardTwentyThree';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import PricingCardFive from '@/components/sections/pricing/PricingCardFive';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import { CheckCircle, Globe } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="mediumSmall"
        sizing="mediumLarge"
        background="aurora"
        cardStyle="glass-depth"
        primaryButtonStyle="flat"
        secondaryButtonStyle="layered"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        { name: "Home", id: "hero" },
        { name: "Destinations", id: "destinations" },
        { name: "Pricing", id: "pricing" },
        { name: "Contact", id: "contact" }
      ]}
      brandName="EuroAsia Travel"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDualMedia
      title="Your Journey Across Continents"
      description="Seamlessly book travel tickets across Europe and Asia with our reliable, fast, and secure platform. Experience stress-free travel planning with our integrated booking system."
      tag="NEW BOOKING SYSTEM"
      rating={5}
      ratingText="Trusted by 50,000+ travelers"
      background={{ variant: "plain" }}
      mediaItems={[
          { imageSrc: "http://img.b2bpic.net/free-photo/3d-rendering-dark-earth-space_23-2151051365.jpg", imageAlt: "Global travel" },
          { imageSrc: "http://img.b2bpic.net/free-photo/high-spirited-male-passenger-with-trolley-suitcase-getting-off-moving-staircase-airport_259150-58718.jpg", imageAlt: "Airport travel" }
      ]}
      buttons={[
        { text: "Book Now", href: "#pricing" },
        { text: "Learn More", href: "#features" }
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyThree
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        { id: "1", title: "Instant Booking", tags: ["fast", "digital"], imageSrc: "http://img.b2bpic.net/free-photo/woman-camping-looking-map-top-view_23-2148785863.jpg" },
        { id: "2", title: "Global Coverage", tags: ["europe", "asia"], imageSrc: "http://img.b2bpic.net/free-photo/logistics-means-transport-together-with-technological-futuristic-holograms_23-2151662944.jpg" },
        { id: "3", title: "24/7 Support", tags: ["help", "reliable"], imageSrc: "http://img.b2bpic.net/free-photo/woman-blowing-kiss-wechat-icon_53876-49344.jpg" }
      ]}
      title="Why Choose EuroAsia Travel?"
      description="We simplify cross-continental travel by providing integrated booking options."
    />
  </div>

  <div id="destinations" data-section="destinations">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      title="Regional Destinations"
      description="Explore over 20 unique destinations grouped by region for your convenience."
      products={Array.from({ length: 20 }).map((_, i) => ({
        id: `d${i}`,
        name: `Travel Route ${String.fromCharCode(65 + (i % 5))}${i + 1}`,
        price: `$${(i + 1) * 150}`,
        variant: i < 5 ? "Europe" : i < 10 ? "Asia" : i < 15 ? "Australia" : "Middle East",        imageSrc: "http://img.b2bpic.net/free-photo/blank-diary-personal-accessories-coffee-cup-world-map_23-2147856128.jpg"
      }))}
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardFive
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      plans={[
        { id: "basic", tag: "Essential", price: "$99", period: "/trip", description: "Perfect for solo travelers.", button: { text: "Book Now" }, featuresTitle: "Included", features: ["Standard support", "Ticket insurance", "Mobile access"] },
        { id: "pro", tag: "Explorer", price: "$299", period: "/trip", description: "Best for frequent explorers.", button: { text: "Book Now" }, featuresTitle: "Included", features: ["Priority support", "Flexible booking", "Lounge access"] },
        { id: "premium", tag: "Luxury", price: "$599", period: "/trip", description: "Ultimate travel experience.", button: { text: "Book Now" }, featuresTitle: "Included", features: ["Concierge support", "Full refunds", "Unlimited perks"] }
      ]}
      title="Transparent Pricing"
      description="Choose the best plan for your travel needs."
    />
  </div>

  <div id="testimonial-section" data-section="testimonial-section">
      <TestimonialCardSix
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        { id: "t1", name: "Elena Rodriguez", handle: "@elena_travel", testimonial: "Absolutely amazing experience booking my trip.", imageSrc: "http://img.b2bpic.net/free-photo/pretty-glad-traveler-clicks-selfie-photo-makes-new-pictures-uses-cell-phone-application_273609-26947.jpg" },
        { id: "t2", name: "Kenji Tanaka", handle: "@kenji_explorer", testimonial: "The best booking platform I've used so far.", imageSrc: "http://img.b2bpic.net/free-photo/businessman-smiling-airport-terminal_107420-85119.jpg" },
        { id: "t3", name: "Sarah Miller", handle: "@sarah_wanderlust", testimonial: "Very satisfied with the customer service.", imageSrc: "http://img.b2bpic.net/free-photo/young-hipster-man-taking-pictures-using-smartphone-wild-nature-winter-vacation-hiking_285396-2015.jpg" }
      ]}
      title="Trusted by Travelers"
      description="What our users are saying across the globe."
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={["TravelAir", "GlobalRail", "AsiaTickets", "EuroLogistics", "SkyLink", "OceanWays", "TransContinent"]}
      title="Global Partners"
      description="Working with industry-leading travel brands."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        { title: "Company", items: [{ label: "About Us", href: "#" }, { label: "Careers", href: "#" }] },
        { title: "Support", items: [{ label: "Help Center", href: "#" }, { label: "Contact", href: "#" }] },
        { title: "Legal", items: [{ label: "Privacy Policy", href: "#" }, { label: "Terms of Service", href: "#" }] }
      ]}
      logoText="EuroAsia Travel"
      copyrightText="© 2025 EuroAsia Travel. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
