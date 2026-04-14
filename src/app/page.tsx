"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FeatureCardTwentyThree from '@/components/sections/feature/FeatureCardTwentyThree';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroSplitTestimonial from '@/components/sections/hero/HeroSplitTestimonial';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import PricingCardFive from '@/components/sections/pricing/PricingCardFive';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
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
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Destinations",
          id: "destinations",
        },
        {
          name: "Pricing",
          id: "pricing",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="EuroAsia Travel"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitTestimonial
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      imagePosition="right"
      title="Your Journey Across Continents"
      description="Seamlessly book travel tickets across Europe and Asia with our reliable, fast, and secure platform. Your next adventure starts here."
      testimonials={[
        {
          name: "Elena Rodriguez",
          handle: "@elena_travel",
          testimonial: "The easiest way to book train tickets across Europe.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/skater-girl-posing_1321-1116.jpg",
        },
        {
          name: "Kenji Tanaka",
          handle: "@kenji_explorer",
          testimonial: "Fantastic coverage for my Asia trip.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/high-spirited-male-passenger-with-trolley-suitcase-getting-off-moving-staircase-airport_259150-58718.jpg",
        },
        {
          name: "Sarah Miller",
          handle: "@sarah_wanderlust",
          testimonial: "Reliable and efficient. I use this for all my international travel needs.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/cropped-image-lovely-cheerful-european-woman-has-broad-tender-smile-long-straight-hair-wears-red-hat_273609-26923.jpg",
        },
        {
          name: "David Thompson",
          handle: "@dave_ventures",
          testimonial: "The best platform for managing travel itineraries across two continents.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/cheerful-women-with-lollipops-near-road_23-2147829715.jpg",
        },
        {
          name: "Chloe Smith",
          handle: "@chloe_goes",
          testimonial: "Great support team and very easy checkout process.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/woman-with-camera-looking-distance_23-2147835496.jpg",
        },
      ]}
      buttons={[
        {
          text: "Book Now",
          href: "#pricing",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/3d-rendering-dark-earth-space_23-2151051365.jpg"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/adorable-woman-straw-hat-wears-blouse-make-selfie_273609-2354.jpg",
          alt: "Traveler 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/shy-charming-woman-with-curly-hair-wearing-denim-shirt-listening-music_291650-819.jpg",
          alt: "Traveler 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/smiley-woman-with-backpack_23-2148518190.jpg",
          alt: "Traveler 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-happy-woman-seaside_23-2148962798.jpg",
          alt: "Traveler 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-successful-businesswoman-sunglasses-catching-car-business-centre_176420-5670.jpg",
          alt: "Traveler 5",
        },
      ]}
      marqueeItems={[
        {
          type: "text",
          text: "Instant Booking",
        },
        {
          type: "text-icon",
          text: "Global Coverage",
          icon: Globe,
        },
        {
          type: "text",
          text: "24/7 Support",
        },
        {
          type: "text",
          text: "Secure Payments",
        },
        {
          type: "text-icon",
          text: "Verified Routes",
          icon: CheckCircle,
        },
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyThree
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          id: "1",
          title: "Instant Booking",
          tags: [
            "fast",
            "digital",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/woman-camping-looking-map-top-view_23-2148785863.jpg",
        },
        {
          id: "2",
          title: "Global Coverage",
          tags: [
            "europe",
            "asia",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/logistics-means-transport-together-with-technological-futuristic-holograms_23-2151662944.jpg",
        },
        {
          id: "3",
          title: "24/7 Support",
          tags: [
            "help",
            "reliable",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/woman-blowing-kiss-wechat-icon_53876-49344.jpg",
        },
      ]}
      title="Why Choose EuroAsia Travel?"
      description="We simplify cross-continental travel by providing integrated booking options."
    />
  </div>

  <div id="destinations" data-section="destinations">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      products={[
        {
          id: "d1",
          brand: "Route A",
          name: "Paris to Tokyo",
          price: "$899",
          rating: 5,
          reviewCount: "1.2k",
          imageSrc: "http://img.b2bpic.net/free-photo/blank-diary-personal-accessories-coffee-cup-world-map_23-2147856128.jpg",
        },
        {
          id: "d2",
          brand: "Route B",
          name: "Berlin to Seoul",
          price: "$750",
          rating: 5,
          reviewCount: "890",
          imageSrc: "http://img.b2bpic.net/free-photo/traveller-ready-take-train_23-2148258754.jpg",
        },
        {
          id: "d3",
          brand: "Route C",
          name: "London to Shanghai",
          price: "$950",
          rating: 4,
          reviewCount: "2.1k",
          imageSrc: "http://img.b2bpic.net/free-photo/modern-airport-with-seats_1203-1981.jpg",
        },
        {
          id: "d4",
          brand: "Route D",
          name: "Rome to Singapore",
          price: "$699",
          rating: 5,
          reviewCount: "450",
          imageSrc: "http://img.b2bpic.net/free-photo/long-corridor_1127-2115.jpg",
        },
        {
          id: "d5",
          brand: "Route E",
          name: "Vienna to Bangkok",
          price: "$599",
          rating: 5,
          reviewCount: "320",
          imageSrc: "http://img.b2bpic.net/free-photo/tourist-taking-photos-nature-landscape-using-his-smartphone_346278-394.jpg",
        },
        {
          id: "d6",
          brand: "Route F",
          name: "Madrid to Beijing",
          price: "$820",
          rating: 4,
          reviewCount: "670",
          imageSrc: "http://img.b2bpic.net/free-photo/city-bus-autumn-forest-road-vehicle-motion_169016-69890.jpg",
        },
      ]}
      title="Explore Top Routes"
      description="Discover popular routes connecting cities across Europe and Asia."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardFive
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      plans={[
        {
          id: "basic",
          tag: "Essential",
          price: "$99",
          period: "/trip",
          description: "Perfect for solo travelers.",
          button: {
            text: "Book Now",
          },
          featuresTitle: "Included",
          features: [
            "Standard support",
            "Ticket insurance",
            "Mobile access",
          ],
        },
        {
          id: "pro",
          tag: "Explorer",
          price: "$299",
          period: "/trip",
          description: "Best for frequent explorers.",
          button: {
            text: "Book Now",
          },
          featuresTitle: "Included",
          features: [
            "Priority support",
            "Flexible booking",
            "Lounge access",
          ],
        },
        {
          id: "premium",
          tag: "Luxury",
          price: "$599",
          period: "/trip",
          description: "Ultimate travel experience.",
          button: {
            text: "Book Now",
          },
          featuresTitle: "Included",
          features: [
            "Concierge support",
            "Full refunds",
            "Unlimited perks",
          ],
        },
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
        {
          id: "t1",
          name: "Elena Rodriguez",
          handle: "@elena_travel",
          testimonial: "Absolutely amazing experience booking my trip.",
          imageSrc: "http://img.b2bpic.net/free-photo/pretty-glad-traveler-clicks-selfie-photo-makes-new-pictures-uses-cell-phone-application_273609-26947.jpg",
        },
        {
          id: "t2",
          name: "Kenji Tanaka",
          handle: "@kenji_explorer",
          testimonial: "The best booking platform I've used so far.",
          imageSrc: "http://img.b2bpic.net/free-photo/businessman-smiling-airport-terminal_107420-85119.jpg",
        },
        {
          id: "t3",
          name: "Sarah Miller",
          handle: "@sarah_wanderlust",
          testimonial: "Very satisfied with the customer service.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-hipster-man-taking-pictures-using-smartphone-wild-nature-winter-vacation-hiking_285396-2015.jpg",
        },
        {
          id: "t4",
          name: "David Thompson",
          handle: "@dave_ventures",
          testimonial: "Excellent service and very intuitive.",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-woman-looking-man-landscape_107420-9733.jpg",
        },
        {
          id: "t5",
          name: "Chloe Smith",
          handle: "@chloe_goes",
          testimonial: "Highly efficient and reliable.",
          imageSrc: "http://img.b2bpic.net/free-photo/charming-traveller-with-map_23-2147813962.jpg",
        },
      ]}
      title="Trusted by Travelers"
      description="What our users are saying across the globe."
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "TravelAir",
        "GlobalRail",
        "AsiaTickets",
        "EuroLogistics",
        "SkyLink",
        "OceanWays",
        "TransContinent",
      ]}
      title="Global Partners"
      description="Working with industry-leading travel brands."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#",
            },
            {
              label: "Careers",
              href: "#",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "Help Center",
              href: "#",
            },
            {
              label: "Contact",
              href: "#",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
      logoText="EuroAsia Travel"
      copyrightText="© 2025 EuroAsia Travel. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
