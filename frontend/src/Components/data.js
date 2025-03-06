import profilePhoto from "../assets/photos/person.jpg";
import UsdLogo from "../assets/logos/us-san-diego.svg";
import IvirmaLogo from "../assets/logos/IVIRMA.svg";
import HowardLogo from "../assets/logos/Howard Uni.svg";
import PharmLogo from "../assets/logos/pharm bill.svg";
import AbsaLogo from "../assets/logos/absa.svg";
import B2bRocketLogo from "../assets/logos/b2brocket.svg";
import DiscordIcon from "../assets/icons/discord white.svg";
import EnvelopeIcon from "../assets/icons/envelope.svg";
import FacebookIcon from "../assets/icons/facebook.svg";
import LinkedinIcon from "../assets/icons/linkedin.svg";
import MessageIcon from "../assets/icons/message.svg";
import WhatsappIcon from "../assets/icons/whatsapp.svg";

const socialIcons = [
  { name: "WhatsApp", icon: WhatsappIcon, url: "https://wa.me/message" },
  { name: "Facebook", icon: FacebookIcon, url: "https://facebook.com" },
  { name: "LinkedIn", icon: LinkedinIcon, url: "https://linkedin.com" },
  { name: "Discord", icon: DiscordIcon, url: "https://discord.com" },
  { name: "Email", icon: EnvelopeIcon, url: "mailto:contact@docutech.com" },
  { name: "Message", icon: MessageIcon, url: "https://m.me" },
];

const sections = [
  { name: "Features", link: "#features" },
  { name: "Why Choose Us", link: "#why-choose-us" },
  { name: "Pricing", link: "#pricing" },
  { name: "FAQ", link: "#faq" },
];

const features = {
  fileInput: {
    children: "Drop your file here",
    button: {
      iconPath: "",
      children: "Upload File",
    },
  },
  button: {
    iconPath: "",
    children: "Generate with AI",
  },
};

const clientLogos = [
  UsdLogo,
  IvirmaLogo,
  HowardLogo,
  PharmLogo,
  AbsaLogo,
  B2bRocketLogo,
];

const userFeedbacks = [
  {
    id: 1,
    profilePhoto: profilePhoto,
    children:
      "Create contracts, agreements & forms in seconds using advanced AI technology",
    rating: 5,
  },
  {
    id: 2,
    profilePhoto: profilePhoto,
    children:
      "Create contracts, agreements & forms in seconds using advanced AI technology",
    rating: 5,
  },
  {
    id: 3,
    profilePhoto: profilePhoto,
    children:
      "Create contracts, agreements & forms in seconds using advanced AI technology",
    rating: 5,
  },
  {
    id: 4,
    profilePhoto: profilePhoto,
    children:
      "Create contracts, agreements & forms in seconds using advanced AI technology",
    rating: 5,
  },
  {
    id: 5,
    profilePhoto: profilePhoto,
    children:
      "Create contracts, agreements & forms in seconds using advanced AI technology",
    rating: 5,
  },
  {
    id: 6,
    profilePhoto: profilePhoto,
    children:
      "Create contracts, agreements & forms in seconds using advanced AI technology",
    rating: 5,
  },
];

const faq = [
  {
    q: "Are DocuTech signatures legally binding?",
    a: "Yep! DocuTech signatures are totally legit and legally binding, just like signing with a pen—except digital and way cooler. As long as they follow the right security rules, courts accept them, so no worries there. Plus, they’re encrypted and tracked, so it's safer than losing a paper contract in your junk drawer!",
  },
  {
    q: "Are DocuTech signatures legally binding?",
    a: "Yep! DocuTech signatures are totally legit and legally binding, just like signing with a pen—except digital and way cooler. As long as they follow the right security rules, courts accept them, so no worries there. Plus, they’re encrypted and tracked, so it's safer than losing a paper contract in your junk drawer!",
  },
  {
    q: "Are DocuTech signatures legally binding?",
    a: "Yep! DocuTech signatures are totally legit and legally binding, just like signing with a pen—except digital and way cooler. As long as they follow the right security rules, courts accept them, so no worries there. Plus, they’re encrypted and tracked, so it's safer than losing a paper contract in your junk drawer!",
  },
  {
    q: "Are DocuTech signatures legally binding?",
    a: "Yep! DocuTech signatures are totally legit and legally binding, just like signing with a pen—except digital and way cooler. As long as they follow the right security rules, courts accept them, so no worries there. Plus, they’re encrypted and tracked, so it's safer than losing a paper contract in your junk drawer!",
  },
  {
    q: "Are DocuTech signatures legally binding?",
    a: "Yep! DocuTech signatures are totally legit and legally binding, just like signing with a pen—except digital and way cooler. As long as they follow the right security rules, courts accept them, so no worries there. Plus, they’re encrypted and tracked, so it's safer than losing a paper contract in your junk drawer!",
  },
];

const whyDocutech = {
  trusted: {
    title: "Trusted by Thousands",
    content:
      "Over 64,000 businesses and individuals rely on DocuTech. Our users save time and streamline workflows with AI-powered document generation.",
  },
  soc2: {
    title: "SOC-2 Certified",
    content:
      "DocuTech meets SOC-2 standards, ensuring the highest level of security for your documents. Your data remains confidential and protected at all times.",
  },
  gdpr: {
    title: "GDPR & HIPAA Compliant",
    content:
      "We adhere to GDPR & HIPAA regulations, keeping sensitive information safe and compliant with global standards.",
  },
  encryption: {
    title: "End-to-End Encryption",
    content:
      "All documents are encrypted with AES-256 encryption, ensuring secure transmission and storage. Your privacy is our priority.",
  },
};

const plans = {
  currency: "USD",
  monthly: [
    {
      name: "Free",
      price: "0",
      features: ["5 documents a month", "Activity timeline"],
    },
    {
      name: "Premium",
      price: "10",
      features: [
        "Unlimited documents",
        "Unlimited signees",
        "Activity timeline",
        "Certificate of completion",
      ],
    },
    {
      name: "Teams",
      price: "8 per user",
      minTotal: "24",
      features: [
        "Everything from Premium",
        "Team management",
        "Transferable contracts",
      ],
    },
  ],
  annual: [
    {
      name: "Free",
      price: "0",
      features: ["5 documents a month", "Activity timeline"],
    },
    {
      name: "Premium",
      price: "100",
      features: [
        "Unlimited documents",
        "Unlimited signees",
        "Activity timeline",
        "Certificate of completion",
      ],
    },
    {
      name: "Teams",
      price: "80 per user",
      minTotal: "240",
      features: [
        "Everything from Premium",
        "Team management",
        "Transferable contracts",
      ],
    },
  ],
};

export default {
  features,
  sections,
  faq,
  clientLogos,
  userFeedbacks,
  socialIcons,
  whyDocutech,
  plans,
};
