const projects = {
  applydigital: [
    {
      name: "Project Chamberlain",
      description:
        "This was a web app for an enterprise client in the UK that specializes in creating miniature figurines that can be painted and use to play in a dedicated board game  (Cannot reveal client’s name). The purpose of the web app was for users to track these board games being played, take score and have a community page to show the results of other games and who is playing. This was my first project with E2X (before Apply Digital acquisition) where I was tasked with various duties, i.e: 1. Create Serverless functions (E.g. for a profanity/IP filter). 2. Create numerous ReactJS components, writing unit tests and creating Storybook stories to view and interact with each component.",
      status: false,
    },
    {
      name: "Project Lazarus",
      description:
        "An eCommerce website for the same client as Project Chamberlain, to completely recreate their website (www.warhammer.com), for users to purchase their products on a global scale. The business requirements was extremely complex, which required careful planning and very strict development standards. We used Contentful for the CMS, Commercetools as the commerce platform, NextJS as the overall framework and a custom ReactJS UI library that is imported from NPM. There was of course a lot of other tools and services we used, but as a Senior Front End Developer, this was where most of my responsibilities remained. My responsibilities ranged from: 1. Creating various UI Components using TailwindCSS, making sure everything is fully unit tested using React Testing Library, as we were strict to maintain a coverage of nothing lower than 96%. For each component, a Storybook story had to be created which was deployed to Chromatic. 2. Using the created UI Components in the NextJS website, enrichers are used to map the content/product data coming in from Contentful or Commercetools and pass it into the UI components. 3. Making sure Cypress tests are created for each Acceptance Criteria of a ticket 4. Making sure that all the code is according to a professional standard, e.g. that specific linting rules apply, making sure no comments are used without ticket numbers, no use of console logging and all functionality is well tested and documented. This project had a team size of around 20 - 30 people , which included 4 QA developers, 7 Back End and 8 Front End developers, the rest being Business Analysts, Project Managers and Project Owners.",
      status: false,
    },
  ],
  lemverify: [
    {
      name: "Templator Project",
      description:
        "[CODE PRIVATE] Project where an image loads in from S3, then allowing the user to create ROIs on that image, and export/upload the coordinates of those ROIs [Secondary active project]",
      status: false,
    },
    {
      name: "Identity Capture Web App",
      description:
        "[CODE PRIVATE] Web app where end-users need to prove their identity by firstly, upload an identity document of their choosing (i.e. passport, ID or Driving Licence), secondly, record and upload a short video of themselves and providing an address.",
      status: false,
    },
    {
      name: "WebRTC Recorder",
      description:
        "[CODE PRIVATE] Building own in-house video recorder using WebRTC technology and PubNub events, instead of third-party WebRTC providers, such as Vonage (Tokbox) and Twilio. [Primary active Project]",
      status: false,
    },
    {
      name: "Client Insights Project",
      description:
        "[CODE PRIVATE] Project of an insights dashboard for clients integrated into their current Client Dashboard.",
      status: false,
    },
  ],
  biz2click: [
    {
      name: "Business Connexion",
      id: 1,
      image: "/images/bcx.png",
      url: "https://www.bcx.co.za/",
      status: true,
    },
    {
      name: "The Alarm Guy",
      id: 2,
      image: "/images/alarm.png",
      url: "https://www.thealarmguy.co.za/",
      status: true,
    },
    {
      name: "HiDesign MEA", // Invalid
      id: 3,
      image: "/images/mea.png",
      url: "https://hidesign-mea.com/",
      status: false,
    },
    {
      name: "HiDesign Asia", // Invalid
      id: 4,
      image: "/images/asia.png",
      url: "https://hidesign-asia.com/",
      status: false,
    },
    {
      name: "HiDesign Europe",
      id: 5,
      image: "/images/europe.png",
      url: "https://www.hidesigneurope.com/",
      status: true,
    },
    {
      name: "HiDesign Americas", // Invalid
      id: 6,
      image: "/images/americas.png",
      url: "https://www.hidesign-americas.com/",
      status: false,
    },
    {
      name: "Cape Construction Expo", //  Invalid
      id: 7,
      image: "/images/capeConstruction.png",
      url: "https://www.capeconstructionexpo.com/",
      status: false,
    },
    {
      name: "KZN Construction",
      id: 8,
      image: "/images/kznConstruction.png",
      url: "https://www.kznconstructionexpo.com/",
      status: true,
    },
    {
      name: "Kristen Lalieu", // Invalid
      id: 9,
      image: "/images/kristen.png",
      url: "https://kristenlalieu.com/",
      status: false,
    },
    {
      name: "MSI", // Invalid
      id: 10,
      image: "/images/msi.png",
      url: "https://safconsult.africaforce.com/",
      status: false,
    },
    {
      name: "Briisk",
      id: 11,
      image: "/images/briisk.png",
      url: "http://www.briisk.io/",
      status: true,
    },
    {
      name: "Bentley Associates",
      id: 12,
      image: "/images/bentleyAs.png",
      url: "https://bentleyassociates.co.uk/",
      status: true,
    },
  ],
};

export default projects;
