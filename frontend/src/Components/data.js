import profilePhoto from '../assets/photos/person.jpg'

const navBar = { 
    sections: [
        { name: "Features", link: "#features" },
        { name: "Why Choose Us", link: "#why-choose-us" },
        { name: "Pricing", link: "#pricing" },
        { name: "FAQ", link: "#faq" }
    ] 
};

const features = {
    fileInput: {
        children: "Drop your file here",
        button: {
            iconPath: "",
            children: "Upload File"
        }
    },
    button: {
        iconPath: "",
        children: "Generate with AI"
    }
};

const clientLogos = ["/src/assets/logos/absa.svg",
    "/src/assets/logos/b2brocket.svg",
    "/src/assets/logos/Howard Uni.svg",
    "/src/assets/logos/IVIRMA.svg",
    "/src/assets/logos/pharm bill.svg",
    "/src/assets/logos/us-san-diego.svg"];

const userFeedbacks = [{
    id: 1,
    profilePhoto: profilePhoto,
    children: "Create contracts, agreements & forms in seconds using advanced AI technology",
    rating: 5
},
{
    id: 2,
    profilePhoto: profilePhoto,
    children: "Create contracts, agreements & forms in seconds using advanced AI technology",
    rating: 5
},
{
    id: 3,
    profilePhoto: profilePhoto,
    children: "Create contracts, agreements & forms in seconds using advanced AI technology",
    rating: 5
},
{
    id: 4,
    profilePhoto: profilePhoto,
    children: "Create contracts, agreements & forms in seconds using advanced AI technology",
    rating: 5
},
{
    id: 5,
    profilePhoto: profilePhoto,
    children: "Create contracts, agreements & forms in seconds using advanced AI technology",
    rating: 5
},
{
    id: 6,
    profilePhoto: profilePhoto,
    children: "Create contracts, agreements & forms in seconds using advanced AI technology",
    rating: 5
}];

const faq = [{
    q: "Are DocuTech signatures legally binding?",
    a: "Yep! DocuTech signatures are totally legit and legally binding, just like signing with a pen—except digital and way cooler. As long as they follow the right security rules, courts accept them, so no worries there. Plus, they’re encrypted and tracked, so it's safer than losing a paper contract in your junk drawer!"
},
{
    q: "Are DocuTech signatures legally binding?",
    a: "Yep! DocuTech signatures are totally legit and legally binding, just like signing with a pen—except digital and way cooler. As long as they follow the right security rules, courts accept them, so no worries there. Plus, they’re encrypted and tracked, so it's safer than losing a paper contract in your junk drawer!"
},
{
    q: "Are DocuTech signatures legally binding?",
    a: "Yep! DocuTech signatures are totally legit and legally binding, just like signing with a pen—except digital and way cooler. As long as they follow the right security rules, courts accept them, so no worries there. Plus, they’re encrypted and tracked, so it's safer than losing a paper contract in your junk drawer!"
},
{
    q: "Are DocuTech signatures legally binding?",
    a: "Yep! DocuTech signatures are totally legit and legally binding, just like signing with a pen—except digital and way cooler. As long as they follow the right security rules, courts accept them, so no worries there. Plus, they’re encrypted and tracked, so it's safer than losing a paper contract in your junk drawer!"
},
{
    q: "Are DocuTech signatures legally binding?",
    a: "Yep! DocuTech signatures are totally legit and legally binding, just like signing with a pen—except digital and way cooler. As long as they follow the right security rules, courts accept them, so no worries there. Plus, they’re encrypted and tracked, so it's safer than losing a paper contract in your junk drawer!"
}];

export default {features, navBar, faq,clientLogos, userFeedbacks}

