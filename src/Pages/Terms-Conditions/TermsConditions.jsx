import { div } from 'framer-motion/client';
import { useEffect } from 'react';

const TermsConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='w-full bg-black font-[Host_Grotesk] text-white backdrop-blur-xl'>
    <div className="max-w-6xl  mx-auto px-8 py-8">
      <div className="mb-6 text-sm  md:pt-20 pt-30  text-start">
        <h1 className="text-[5vw]  select-none mb-8 font-extrabold tracking-wide font-[Host_Grotesk] text-center">
            Terms and Conditions
        </h1>
        Last updated May 5, 2025
      </div>

      <div className="bg-black rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">AGREEMENT TO OUR LEGAL TERMS</h2>
        <p className="mb-4">
          We are Pigopi ("Company," "we," "us," "our"), a company registered in India at 0, Near Water Tank, Badaun Road, Bareilly, U.P. (243001), Bareilly, Uttar Pradesh 243001.
        </p>
        <p className="mb-4">
          We operate the mobile application Pigopi (the "App"), as well as any other related products and services that refer or link to these legal terms (the "Legal Terms") (collectively, the "Services").
        </p>
        <p className="mb-4 font-medium">
          This Is A Food Subscription App Where You Get A Daily Meal Under The Subscription, Which Meal You Can Change According To Your Convenience Until The Day Before.
        </p>
        <p className="mb-4">
          You can contact us by phone at +917060113861, email at info@Pigopi.co.in, or by mail to 0, Near Water Tank, Badaun Road, Bareilly, U.P. (243001), Bareilly, Uttar Pradesh 243001, India.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">TABLE OF CONTENTS</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {[
            "OUR SERVICES",
            "INTELLECTUAL PROPERTY RIGHTS",
            "USER REPRESENTATIONS",
            "USER REGISTRATION",
            "PRODUCTS",
            "PURCHASES AND PAYMENT",
            "SUBSCRIPTIONS",
            "RETURN POLICY",
            "PROHIBITED ACTIVITIES",
            "USER GENERATED CONTRIBUTIONS",
            "CONTRIBUTION LICENSE",
            "GUIDELINES FOR REVIEWS",
            "MOBILE APPLICATION LICENSE",
            "SERVICES MANAGEMENT",
            "PRIVACY POLICY",
            "TERM AND TERMINATION",
            "MODIFICATIONS AND INTERRUPTIONS",
            "GOVERNING LAW",
            "DISPUTE RESOLUTION",
            "CORRECTIONS",
            "DISCLAIMER",
            "LIMITATIONS OF LIABILITY",
            "INDEMNIFICATION",
            "USER DATA",
            "ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES",
            "MISCELLANEOUS",
            "CONTACT US"
          ].map((item, index) => (
            <li key={index} className="hover:text-white transition-colors">
              <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="block py-1">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* OUR SERVICES */}
      <div id="our-services" className="mb-8 bg-black rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-white">1. OUR SERVICES</h2>
        <p>
          The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Services from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.
        </p>
      </div>

      {/* INTELLECTUAL PROPERTY RIGHTS */}
      <div id="intellectual-property-rights" className="mb-8 bg-black rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-white">2. INTELLECTUAL PROPERTY RIGHTS</h2>
        <h3 className="font-medium mb-2">Our intellectual property</h3>
        <p className="mb-4">
          We are the owner or the licensee of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services (collectively, the "Content"), as well as the trademarks, service marks, and logos contained therein (the "Marks").
        </p>
        <p className="mb-4">
          Our Content and Marks are protected by copyright and trademark laws (and various other intellectual property rights and unfair competition laws) and treaties in the United States and around the world.
        </p>
        <p className="mb-4">
          The Content and Marks are provided in or through the Services "AS IS" for your personal, non-commercial use only.
        </p>

        <h3 className="font-medium mb-2 mt-4">Your use of our Services</h3>
        <p className="mb-4">
          Subject to your compliance with these Legal Terms, including the "PROHIBITED ACTIVITIES" section below, we grant you a non-exclusive, non-transferable, revocable license to:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">access the Services; and</li>
          <li className="mb-2">download or print a copy of any portion of the Content to which you have properly gained access.</li>
        </ul>
        <p className="mb-4">solely for your personal, non-commercial use.</p>
        <p className="mb-4">
          Except as set out in this section or elsewhere in our Legal Terms, no part of the Services and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.
        </p>
        <p className="mb-4">
          If you wish to make any use of the Services, Content, or Marks other than as set out in this section or elsewhere in our Legal Terms, please address your request to: info@Pigopi.co.in. If we ever grant you the permission to post, reproduce, or publicly display any part of our Services or Content, you must identify us as the owners or licensors of the Services, Content, or Marks and ensure that any copyright or proprietary notice appears or is visible on posting, reproducing, or displaying our Content.
        </p>
        <p className="mb-4">
          We reserve all rights not expressly granted to you in and to the Services, Content, and Marks.
        </p>
        <p className="mb-4">
          Any breach of these Intellectual Property Rights will constitute a material breach of our Legal Terms and your right to use our Services will terminate immediately.
        </p>

        <h3 className="font-medium mb-2 mt-4">Your submissions</h3>
        <p className="mb-4">
          Please review this section and the "PROHIBITED ACTIVITIES" section carefully prior to using our Services to understand the (a) rights you give us and (b) obligations you have when you post or upload any content through the Services.
        </p>
        <p className="mb-4">
          Submissions: By directly sending us any question, comment, suggestion, idea, feedback, or other information about the Services ("Submissions"), you agree to assign to us all intellectual property rights in such Submission. You agree that we shall own this Submission and be entitled to its unrestricted use and dissemination for any lawful purpose, commercial or otherwise, without acknowledgment or compensation to you.
        </p>
        <p className="mb-4">
          You are responsible for what you post or upload: By sending us Submissions through any part of the Services you:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">confirm that you have read and agree with our "PROHIBITED ACTIVITIES" and will not post, send, publish, upload, or transmit through the Services any Submission that is illegal, harassing, hateful, harmful, defamatory, obscene, bullying, abusive, discriminatory, threatening to any person or group, sexually explicit, false, inaccurate, deceitful, or misleading;</li>
          <li className="mb-2">to the extent permissible by applicable law, waive any and all moral rights to any such Submission;</li>
          <li className="mb-2">warrant that any such Submission are original to you or that you have the necessary rights and licenses to submit such Submissions and that you have full authority to grant us the above-mentioned rights in relation to your Submissions; and</li>
          <li className="mb-2">warrant and represent that your Submissions do not constitute confidential information.</li>
        </ul>
        <p className="mb-4">
          You are solely responsible for your Submissions and you expressly agree to reimburse us for any and all losses that we may suffer because of your breach of (a) this section, (b) any third party's intellectual property rights, or (c) applicable law.
        </p>
      </div>

      {/* USER REPRESENTATIONS */}
      <div id="user-representations" className="mb-8 bg-black rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-white">3. USER REPRESENTATIONS</h2>
        <p className="mb-4">
          By using the Services, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Legal Terms; (4) you are not under the age of 13; (5) you are not a minor in the jurisdiction in which you reside, or if a minor, you have received parental permission to use the Services; (6) you will not access the Services through automated or non-human means, whether through a bot, script or otherwise; (7) you will not use the Services for any illegal or unauthorized purpose; and (8) your use of the Services will not violate any applicable law or regulation.
        </p>
        <p className="mb-4">
          If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Services (or any portion thereof).
        </p>
      </div>

      {/* USER REGISTRATION */}
      <div id="user-registration" className="mb-8 bg-black rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-white">4. USER REGISTRATION</h2>
        <p className="mb-4">
          You may be required to register to use the Services. You agree to keep your password confidential and will be responsible for all use of your account and password. We reserve the right to remove, reclaim, or change a username you select if we determine, in our sole discretion, that such username is inappropriate, obscene, or otherwise objectionable.
        </p>
      </div>

      {/* PRODUCTS */}
      <div id="products" className="mb-8 bg-black rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-white">5. PRODUCTS</h2>
        <p className="mb-4">
          We make every effort to display as accurately as possible the colors, features, specifications, and details of the products available on the Services. However, we do not guarantee that the colors, features, specifications, and details of the products will be accurate, complete, reliable, current, or free of other errors, and your electronic display may not accurately reflect the actual colors and details of the products. All products are subject to availability, and we cannot guarantee that items will be in stock. We reserve the right to discontinue any products at any time for any reason. Prices for all products are subject to change.
        </p>
      </div>

      {/* PURCHASES AND PAYMENT */}
      <div id="purchases-and-payment" className="mb-8 bg-black rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-white">6. PURCHASES AND PAYMENT</h2>
        <p className="mb-4">
          We accept the following forms of payment:
        </p>
        <p className="mb-4">
          You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Services. You further agree to promptly update account and payment information, including email address, payment method, and payment card expiration date, so that we can complete your transactions and contact you as needed. Sales tax will be added to the price of purchases as deemed required by us. We may change prices at any time. All payments shall be in INR.
        </p>
        <p className="mb-4">
          You agree to pay all charges at the prices then in effect for your purchases and any applicable shipping fees, and you authorize us to charge your chosen payment provider for any such amounts upon placing your order. We reserve the right to correct any errors or mistakes in pricing, even if we have already requested or received payment.
        </p>
        <p className="mb-4">
          We reserve the right to refuse any order placed through the Services. We may, in our sole discretion, limit or cancel quantities purchased per person, per household, or per order. These restrictions may include orders placed by or under the same customer account, the same payment method, and/or orders that use the same billing or shipping address. We reserve the right to limit or prohibit orders that, in our sole judgment, appear to be placed by dealers, resellers, or distributors.
        </p>
      </div>

      {/* SUBSCRIPTIONS */}
      <div id="subscriptions" className="mb-8 bg-black rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-white">7. SUBSCRIPTIONS</h2>
        <h3 className="font-medium mb-2">Billing and Renewal</h3>
        <p className="mb-4">
          Your subscription will continue and automatically renew unless canceled. You consent to our charging your payment method on a recurring basis without requiring your prior approval for each recurring charge, until such time as you cancel the applicable order. The length of your billing cycle will depend on the type of subscription plan you choose when you subscribed to the Services.
        </p>

        <h3 className="font-medium mb-2 mt-4">Free Trial</h3>
        <p className="mb-4">
          We offer a 2-day free trial to new users who register with the Services. The account will not be charged and the subscription will be suspended until upgraded to a paid version at the end of the free trial.
        </p>

        <h3 className="font-medium mb-2 mt-4">Cancellation</h3>
        <p className="mb-4">
          You can cancel your subscription at any time by logging into your account. Your cancellation will take effect at the end of the current paid term. If you have any questions or are unsatisfied with our Services, please email us at info@Pigopi.co.in.
        </p>

        <h3 className="font-medium mb-2 mt-4">Fee Changes</h3>
        <p className="mb-4">
          We may, from time to time, make changes to the subscription fee and will communicate any price changes to you in accordance with applicable law.
        </p>
      </div>

      {/* RETURN POLICY */}
      <div id="return-policy" className="mb-8 bg-black rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-white">8. RETURN POLICY</h2>
        <p className="mb-4">
          All sales are final and no refund will be issued.
        </p>
      </div>

      {/* PROHIBITED ACTIVITIES */}
      <div id="prohibited-activities" className="mb-8 bg-black rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-white">9. PROHIBITED ACTIVITIES</h2>
        <p className="mb-4">
          You may not access or use the Services for any purpose other than that for which we make the Services available. The Services may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
        </p>
        <p className="mb-4">
          As a user of the Services, you agree not to:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">Systematically retrieve data or other content from the Services to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
          <li className="mb-2">Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.</li>
          <li className="mb-2">Circumvent, disable, or otherwise interfere with security-related features of the Services, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Services and/or the Content contained therein.</li>
          <li className="mb-2">Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Services.</li>
          <li className="mb-2">Use any information obtained from the Services in order to harass, abuse, or harm another person.</li>
          <li className="mb-2">Make improper use of our support services or submit false reports of abuse or misconduct.</li>
          <li className="mb-2">Use the Services in a manner inconsistent with any applicable laws or regulations.</li>
          <li className="mb-2">Engage in unauthorized framing of or linking to the Services.</li>
          <li className="mb-2">Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any party's uninterrupted use and enjoyment of the Services or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Services.</li>
          <li className="mb-2">Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.</li>
          <li className="mb-2">Delete the copyright or other proprietary rights notice from any Content.</li>
          <li className="mb-2">Attempt to impersonate another user or person or use the username of another user.</li>
          <li className="mb-2">Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism, including without limitation, clear graphics interchange formats ("gifs"), 1×1 pixels, web bugs, cookies, or other similar devices (sometimes referred to as "spyware" or "passive collection mechanisms" or "pcms").</li>
          <li className="mb-2">Interfere with, disrupt, or create an undue burden on the Services or the networks or services connected to the Services.</li>
          <li className="mb-2">Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Services to you.</li>
          <li className="mb-2">Attempt to bypass any measures of the Services designed to prevent or restrict access to the Services, or any portion of the Services.</li>
          <li className="mb-2">Copy or adapt the Services' software, including but not limited to Flash, PHP, HTML, JavaScript, or other code.</li>
          <li className="mb-2">Except as permitted by applicable law, decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Services.</li>
          <li className="mb-2">Except as may be the result of standard search engine or Internet browser usage, use, launch, develop, or distribute any automated system, including without limitation, any spider, robot, cheat utility, scraper, or offline reader that accesses the Services, or use or launch any unauthorized script or other software.</li>
          <li className="mb-2">Use a buying agent or purchasing agent to make purchases on the Services.</li>
          <li className="mb-2">Make any unauthorized use of the Services, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses.</li>
          <li className="mb-2">Use the Services as part of any effort to compete with us or otherwise use the Services and/or the Content for any revenue-generating endeavor or commercial enterprise.</li>
        </ul>
      </div>

      {/* USER GENERATED CONTRIBUTIONS */}
      <div id="user-generated-contributions" className="mb-8 bg-black rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-white">10. USER GENERATED CONTRIBUTIONS</h2>
        <p className="mb-4">
          The Services does not offer users to submit or post content. We may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Services, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively, "Contributions"). Contributions may be viewable by other users of the Services and through third-party websites. As such, any Contributions you transmit may be treated in accordance with the Services' Privacy Policy. When you create or make available any Contributions, you thereby represent and warrant that:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">The creation, distribution, transmission, public display, or performance, and the accessing, downloading, or copying of your Contributions do not and will not infringe the proprietary rights, including but not limited to the copyright, patent, trademark, trade secret, or moral rights of any third party.</li>
          <li className="mb-2">You are the creator and owner of or have the necessary licenses, rights, consents, releases, and permissions to use and to authorize us, the Services, and other users of the Services to use your Contributions in any manner contemplated by the Services and these Legal Terms.</li>
          <li className="mb-2">You have the written consent, release, and/or permission of each and every identifiable individual person in your Contributions to use the name or likeness of each and every such identifiable individual person to enable inclusion and use of your Contributions in any manner contemplated by the Services and these Legal Terms.</li>
          <li className="mb-2">Your Contributions are not false, inaccurate, or misleading.</li>
          <li className="mb-2">Your Contributions are not unsolicited or unauthorized advertising, promotional materials, pyramid schemes, chain letters, spam, mass mailings, or other forms of solicitation.</li>
          <li className="mb-2">Your Contributions are not obscene, lewd, lascivious, filthy, violent, harassing, libelous, slanderous, or otherwise objectionable (as determined by us).</li>
          <li className="mb-2">Your Contributions do not ridicule, mock, disparage, intimidate, or abuse anyone.</li>
          <li className="mb-2">Your Contributions are not used to harass or threaten (in the legal sense of those terms) any other person and to promote violence against a specific person or class of people.</li>
          <li className="mb-2">Your Contributions do not violate any applicable law, regulation, or rule.</li>
          <li className="mb-2">Your Contributions do not violate the privacy or publicity rights of any third party.</li>
          <li className="mb-2">Your Contributions do not violate any applicable law concerning child pornography, or otherwise intended to protect the health or well-being of minors.</li>
          <li className="mb-2">Your Contributions do not include any offensive comments that are connected to race, national origin, gender, sexual preference, or physical handicap.</li>
          <li className="mb-2">Your Contributions do not otherwise violate, or link to material that violates, any provision of these Legal Terms, or any applicable law or regulation.</li>
        </ul>
        <p className="mb-4">
          Any use of the Services in violation of the foregoing violates these Legal Terms and may result in, among other things, termination or suspension of your rights to use the Services.
        </p>
      </div>

      {/* CONTRIBUTION LICENSE */}
      <div id="contribution-license" className="mb-8 bg-black rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-white">11. CONTRIBUTION LICENSE</h2>
        <p className="mb-4">
          You and Services agree that we may access, store, process, and use any information and personal data that you provide following the terms of the Privacy Policy and your choices (including settings).
        </p>
        <p className="mb-4">
          By submitting suggestions or other feedback regarding the Services, you agree that we can use and share such feedback for any purpose without compensation to you.
        </p>
        <p className="mb-4">
          We do not assert any ownership over your Contributions. You retain full ownership of all of your Contributions and any intellectual property rights or other proprietary rights associated with your Contributions. We are not liable for any statements or representations in your Contributions provided by you in any area on the Services. You are solely responsible for your Contributions to the Services and you expressly agree to exonerate us from any and all responsibility and to refrain from any legal action against us regarding your Contributions.
        </p>
      </div>

      {/* GUIDELINES FOR REVIEWS */}
      <div id="guidelines-for-reviews" className="mb-8 bg-black rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-white">12. GUIDELINES FOR REVIEWS</h2>
        <p className="mb-4">
          We may provide you areas on the Services to leave reviews or ratings. When posting a review, you must comply with the following criteria: (1) you should have firsthand experience with the person/entity being reviewed; (2) your reviews should not contain offensive profanity, or abusive, racist, offensive, or hateful language; (3) your reviews should not contain discriminatory references based on religion, race, gender, national origin, age, marital status, sexual orientation, or disability; (4) your reviews should not contain references to illegal activity; (5) you should not be affiliated with competitors if posting negative reviews; (6) you should not make any conclusions as to the legality of conduct; (7) you may not post any false or misleading statements; and (8) you may not organize a campaign encouraging others to post reviews, whether positive or negative.
        </p>
        <p className="mb-4">
          We may accept, reject, or remove reviews in our sole discretion. We have absolutely no obligation to screen reviews or to delete reviews, even if anyone considers reviews objectionable or inaccurate. Reviews are not endorsed by us, and do not necessarily represent our opinions or the views of any of our affiliates or partners. We do not assume liability for any review or for any claims, liabilities, or losses resulting from any review. By posting a review, you hereby grant to us a perpetual, non-exclusive, worldwide, royalty-free, fully paid, assignable, and sublicensable right and license to reproduce, modify, translate, transmit by any means, display, perform, and/or distribute all content relating to review.
        </p>
      </div>

      {/* MOBILE APPLICATION LICENSE */}
      <div id="mobile-application-license" className="mb-8 bg-black rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-white">13. MOBILE APPLICATION LICENSE</h2>
        <h3 className="font-medium mb-2">Use License</h3>
        <p className="mb-4">
          If you access the Services via the App, then we grant you a revocable, non-exclusive, non-transferable, limited right to install and use the App on wireless electronic devices owned or controlled by you, and to access and use the App on such devices strictly in accordance with the terms and conditions of this mobile application license contained in these Legal Terms. You shall not: (1) except as permitted by applicable law, decompile, reverse engineer, disassemble, attempt to derive the source code of, or decrypt the App; (2) make any modification, adaptation, improvement, enhancement, translation, or derivative work from the App; (3) violate any applicable laws, rules, or regulations in connection with your access or use of the App; (4) remove, alter, or obscure any proprietary notice (including any notice of copyright or trademark) posted by us or the licensors of the App; (5) use the App for any revenue-generating endeavor, commercial enterprise, or other purpose for which it is not designed or intended; (6) make the App available over a network or other environment permitting access or use by multiple devices or users at the same time; (7) use the App for creating a product, service, or software that is, directly or indirectly, competitive with or in any way a substitute for the App; (8) use the App to send automated queries to any website or to send any unsolicited commercial email; or (9) use any proprietary information or any of our interfaces or our other intellectual property in the design, development, manufacture, licensing, or distribution of any applications, accessories, or devices for use with the App.
        </p>

        <h3 className="font-medium mb-2 mt-4">Apple and Android Devices</h3>
        <p className="mb-4">
          The following terms apply when you use the App obtained from either the Apple Store or Google Play (each an "App Distributor") to access the Services: (1) the license granted to you for our App is limited to a non-transferable license to use the application on a device that utilizes the Apple iOS or Android operating systems, as applicable, and in accordance with the usage rules set forth in the applicable App Distributor's terms of service; (2) we are responsible for providing any maintenance and support services with respect to the App as specified in the terms and conditions of this mobile application license contained in these Legal Terms or as otherwise required under applicable law, and you acknowledge that each App Distributor has no obligation whatsoever to furnish any maintenance and support services with respect to the App; (3) in the event of any failure of the App to conform to any applicable warranty, you may notify the applicable App Distributor, and the App Distributor, in accordance with its terms and policies, may refund the purchase price, if any, paid for the App, and to the maximum extent permitted by applicable law, the App Distributor will have no other warranty obligation whatsoever with respect to the App; (4) you represent and warrant that (i) you are not located in a country that is subject to a US government embargo, or that has been designated by the US government as a "terrorist supporting" country and (ii) you are not listed on any US government list of prohibited or restricted parties; (5) you must comply with applicable third-party terms of agreement when using the App, e.g., if you have a VoIP application, then you must not be in violation of their wireless data service agreement when using the App; and (6) you acknowledge and agree that the App Distributors are third-party beneficiaries of the terms and conditions in this mobile application license contained in these Legal Terms, and that each App Distributor will have the right (and will be deemed to have accepted the right) to enforce the terms and conditions in this mobile application license contained in these Legal Terms against you as a third-party beneficiary thereof.
        </p>
      </div>

      {/* SERVICES MANAGEMENT */}
      <div id="services-management" className="mb-8 bg-black rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-white">14. SERVICES MANAGEMENT</h2>
        <p className="mb-4">
          We reserve the right, but not the obligation, to: (1) monitor the Services for violations of these Legal Terms; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Legal Terms, including without limitation, reporting such user to law enforcement authorities; (3) in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof; (4) in our sole discretion and without limitation, notice, or liability, to remove from the Services or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems; and (5) otherwise manage the Services in a manner designed to protect our rights and property and to facilitate the proper functioning of the Services.
        </p>
      </div>

      {/* PRIVACY POLICY */}
      <div id="privacy-policy" className="mb-8 bg-black rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-white">15. PRIVACY POLICY</h2>
        <p className="mb-4">
          We care about data privacy and security. Please review our Privacy Policy: <a href="http://www.Pigopi.app/privacy-policy" className="text-white hover:underline">http://www.Pigopi.app/privacy-policy</a>. By using the Services, you agree to be bound by our Privacy Policy, which is incorporated into these Legal Terms. Please be advised the Services are hosted in India. If you access the Services from any other region of the world with laws or other requirements governing personal data collection, use, or disclosure that differ from applicable laws in India, then through your continued use of the Services, you are transferring your data to India, and you expressly consent to have your data transferred to and processed in India.
        </p>
      </div>

      {/* TERM AND TERMINATION */}
      <div id="term-and-termination" className="mb-8 bg-black rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-white">16. TERM AND TERMINATION</h2>
        <p className="mb-4">
          These Legal Terms shall remain in full force and effect while you use the Services. WITHOUT LIMITING ANY OTHER PROVISION OF THESE LEGAL TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE LEGAL TERMS OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE SERVICES OR DELETE YOUR ACCOUNT AND ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.
        </p>
        <p className="mb-4">
          If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party, even if you may be acting on behalf of the third party. In addition to terminating or suspending your account, we reserve the right to take appropriate legal action, including without limitation pursuing civil, criminal, and injunctive redress.
        </p>
      </div>
      <div id="modifications-and-interruptions" className="mb-8 bg-black rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-white">17. MODIFICATIONS AND INTERRUPTIONS</h2>
        <p className="mb-4">
          We reserve the right to change, modify, or remove the contents of the Services at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Services. We also reserve the right to modify or discontinue all or part of the Services without notice at any time. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Services.
        </p>
        <p className="mb-4">
          We cannot guarantee the Services will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Services, resulting in interruptions, delays, or errors. We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Services at any time or for any reason without notice to you. You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Services during any downtime or discontinuance of the Services. Nothing in these Legal Terms will be construed to obligate us to maintain and support the Services or to supply any corrections, updates, or releases in connection therewith.
        </p>
      </div>

      {/* GOVERNING LAW */}
      <div id="governing-law" className="mb-8 bg-black rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-white">18. GOVERNING LAW</h2>
        <p className="mb-4">
          These Legal Terms shall be governed by and defined following the laws of India. Pigopi and yourself irrevocably consent that the courts of India shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these Legal Terms.
        </p>
      </div>

      {/* DISPUTE RESOLUTION */}
      <div id="dispute-resolution" className="mb-8 bg-black rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-white">19. DISPUTE RESOLUTION</h2>
        <h3 className="font-medium mb-2">Binding Arbitration</h3>
        <p className="mb-4">
          Any dispute arising out of or in connection with these Legal Terms, including any question regarding its existence, validity, or termination, shall be referred to and finally resolved by the International Commercial Arbitration Court under the European Arbitration Chamber (Belgium, Brussels, Avenue Louise, 146) according to the Rules of this ICAC, which, as a result of referring to it, is considered as the part of this clause. The number of arbitrators shall be three (3). The seat, or legal place, or arbitration shall be Bareilly, India. The language of the proceedings shall be English, Hindi. The governing law of these Legal Terms shall be substantive law of India.
        </p>

        <h3 className="font-medium mb-2 mt-4">Restrictions</h3>
        <p className="mb-4">
          The Parties agree that any arbitration shall be limited to the Dispute between the Parties individually. To the full extent permitted by law, (a) no arbitration shall be joined with any other proceeding; (b) there is no right or authority for any Dispute to be arbitrated on a class-action basis or to utilize class action procedures; and (c) there is no right or authority for any Dispute to be brought in a purported representative capacity on behalf of the general public or any other persons.
        </p>

        <h3 className="font-medium mb-2 mt-4">Exceptions to Arbitration</h3>
        <p className="mb-4">
          The Parties agree that the following Disputes are not subject to the above provisions concerning binding arbitration: (a) any Disputes seeking to enforce or protect, or concerning the validity of, any of the intellectual property rights of a Party; (b) any Dispute related to, or arising from, allegations of theft, piracy, invasion of privacy, or unauthorized use; and (c) any claim for injunctive relief. If this provision is found to be illegal or unenforceable, then neither Party will elect to arbitrate any Dispute falling within that portion of this provision found to be illegal or unenforceable and such Dispute shall be decided by a court of competent jurisdiction within the courts listed for jurisdiction above, and the Parties agree to submit to the personal jurisdiction of that court.
        </p>
      </div>

      {/* CORRECTIONS */}
      <div id="corrections" className="mb-8 bg-black rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-white">20. CORRECTIONS</h2>
        <p className="mb-4">
          There may be information on the Services that contains typographical errors, inaccuracies, or omissions, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Services at any time, without prior notice.
        </p>
      </div>

      {/* DISCLAIMER */}
      <div id="disclaimer" className="mb-8 bg-black rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-white">21. DISCLAIMER</h2>
        <p className="mb-4">
          THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SERVICES' CONTENT OR THE CONTENT OF ANY WEBSITES OR MOBILE APPLICATIONS LINKED TO THE SERVICES AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE SERVICES, (3) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SERVICES, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE SERVICES BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SERVICES. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SERVICES, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE CAUTION WHERE APPROPRIATE.
        </p>
      </div>

      {/* LIMITATIONS OF LIABILITY */}
      <div id="limitations-of-liability" className="mb-8 bg-black rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-white">22. LIMITATIONS OF LIABILITY</h2>
        <p className="mb-4">
          IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
        </p>
      </div>

      {/* INDEMNIFICATION */}
      <div id="indemnification" className="mb-8 bg-black rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-white">23. INDEMNIFICATION</h2>
        <p className="mb-4">
          You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys' fees and expenses, made by any third party due to or arising out of: (1) use of the Services; (2) breach of these Legal Terms; (3) any breach of your representations and warranties set forth in these Legal Terms; (4) your violation of the rights of a third party, including but not limited to intellectual property rights; or (5) any overt harmful act toward any other user of the Services with whom you connected via the Services. Notwithstanding the foregoing, we reserve the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify us, and you agree to cooperate, at your expense, with our defense of such claims. We will use reasonable efforts to notify you of any such claim, action, or proceeding which is subject to this indemnification upon becoming aware of it.
        </p>
      </div>

      {/* USER DATA */}
      <div id="user-data" className="mb-8 bg-black rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-white">24. USER DATA</h2>
        <p className="mb-4">
          We will maintain certain data that you transmit to the Services for the purpose of managing the performance of the Services, as well as data relating to your use of the Services. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Services. You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any such loss or corruption of such data.
        </p>
      </div>

      {/* ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES */}
      <div id="electronic-communications" className="mb-8 bg-black rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-white">25. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</h2>
        <p className="mb-4">
          Visiting the Services, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications we provide to you electronically, via email and on the Services, satisfy any legal requirement that such communication be in writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SERVICES. You hereby waive any rights or requirements under any statutes, regulations, rules, ordinances, or other laws in any jurisdiction which require an original signature or delivery or retention of non-electronic records, or to payments or the granting of credits by any means other than electronic means.
        </p>
      </div>

      {/* MISCELLANEOUS */}
      <div id="miscellaneous" className="mb-8 bg-black rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-white">26. MISCELLANEOUS</h2>
        <p className="mb-4">
          These Legal Terms and any policies or operating rules posted by us on the Services or in respect to the Services constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any right or provision of these Legal Terms shall not operate as a waiver of such right or provision. These Legal Terms operate to the fullest extent permissible by law. We may assign any or all of our rights and obligations to others at any time. We shall not be responsible or liable for any loss, damage, delay, or failure to act caused by any cause beyond our reasonable control. If any provision or part of a provision of these Legal Terms is determined to be unlawful, void, or unenforceable, that provision or part of the provision is deemed severable from these Legal Terms and does not affect the validity and enforceability of any remaining provisions. There is no joint venture, partnership, employment or agency relationship created between you and us as a result of these Legal Terms or use of the Services. You agree that these Legal Terms will not be construed against us by virtue of having drafted them. You hereby waive any and all defenses you may have based on the electronic form of these Legal Terms and the lack of signing by the parties hereto to execute these Legal Terms.
        </p>
      </div>

      {/* Add more sections following the same pattern */}

      {/* CONTACT US */}
      <div id="contact-us" className="mb-8 bg-black rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-white">27.CONTACT US</h2>
        <p className="mb-4">
          In order to resolve a complaint regarding the Services or to receive further information regarding use of the Services, please contact us at:
        </p>
        <address className="not-italic">
          <p className="mb-1">Pigopi</p>
          <p className="mb-1">0, Near Water Tank, Badaun Road, Bareilly, U.P. (243001)</p>
          <p className="mb-1">Bareilly, Uttar Pradesh 243001</p>
          <p className="mb-1">India</p>
          <p>Email: info@pigopi.co.in</p>
        </address>
      </div>

    </div>
    </div>
  );
};

export default TermsConditions;