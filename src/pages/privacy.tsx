import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";

import useSound from "use-sound";

export default function Privacy() {
  const sound2Loc = "/sounds/tinggg.mp3";
  const [play2] = useSound(
    sound2Loc,
    { volume: 0.75 }
  );
  const sound2Click = () => {
    play2();
  };
  return (
    <Layout>
      <div
        className="bg-white dark:bg-neutral-900 w-full px-4 pt-32 pb-16"
        id="404"
      >
        <h2 className="text-4xl font-judul font-bold text-center text-neutral-900 dark:text-white">Privacy Policy</h2>

        <p className="pt-6 pb-16 text-base max-w-2xl text-center m-auto text-dark-now dark:text-white-now">
          Last updated on September 4, 2023.
        </p>
        <p className="pt-0 pb-16 text-base max-w-4xl text-left m-auto text-dark-now dark:text-white-now">
          OVERVIEW<br />
          <br />
          This website is operated by <span className="text-green-now dark:text-yellow-now font-bold">BANANOW</span> <span className="text-yellow-now dark:text-green-now font-bold">FAMILY</span>. Throughout the site, the terms “we”, “us” and “our” refer to <span className="text-green-now dark:text-yellow-now font-bold">BANANOW</span> <span className="text-yellow-now dark:text-green-now font-bold">FAMILY</span>, also referred to as <span className="text-green-now dark:text-yellow-now font-bold">BANANOW</span>.<span className="text-yellow-now dark:text-green-now font-bold">LAND</span> and <span className="text-green-now dark:text-yellow-now font-bold">BANANOW</span>. <span className="text-yellow-now dark:text-green-now font-bold">BANANOW</span> <span className="text-green-now dark:text-yellow-now font-bold">FAMILY</span> offers this website, including all information, tools, and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies, and notices stated here.<br />
          <br />
          By visiting our site, you engage in our “Service” and agree to be bound by this Privacy Policy.<br />
          <br />
          Please read this Privacy Policy carefully before accessing or using our website. If you do not agree with this policy, then do not use this website.<br />
          <br />
          You can review the most current version of this Privacy Policy at any time on this page. We reserve the right to update, change, or replace any part of this Privacy Policy by posting updates and/or changes to our website. It is your responsibility to check this page periodically for changes. Your continued use of or access to the website following the posting of any changes constitutes acceptance of those changes.<br />
          <br />
          PRIVACY POLICY<br />
          <br />
          <span className="text-yellow-now dark:text-green-now font-bold">BANANOW</span> promotes NFTs, through our website as well as through various third-party websites and platforms. We have adopted this Privacy Policy to guide you through the collection, use, retention, and disclosure of Personally Identifiable Information (“Personal Data”, as further described below) that you may provide while using <span className="text-green-now dark:text-yellow-now font-bold">BANANOW</span>.<span className="text-yellow-now dark:text-green-now font-bold">LAND</span> websites and services in connection with these platforms (collectively referred to as “Services”).<br />
          <br />
          <span className="text-green-now dark:text-yellow-now font-bold">BANANOW</span> encourages you to read this Privacy Policy, as well as our Terms and Conditions of Use, in order to understand how we collect and process Personal Data in the course of providing the Services and your interaction with the Services.<br />
          <br />
          By using the Services, you consent to the collection, use, retention, and disclosure of your Personal Data for processing as described in, and subject to the limitations set out in this Privacy Statement.<br />
          <br />
          Note to Residents of the European Union:<br />
          In order to comply with the requirements of the European General Data Protection Regulation (GDPR) for our European users, this Privacy Statement outlines the legal basis on which we process your Personal Data and provides other information required by the GDPR.<br />
          <br />
          PURPOSE<br />
          <br />
          Protecting your privacy is important to us. Personal Data is any information that would identify a person directly, or indirectly in combination with data from other sources. For example, a full name, home or <span className="text-yellow-now dark:text-green-now font-bold">WORK</span> address, phone number, national identification number (SSN, SIN, etc.), email address, banking details, IP address, biometric data, usage data, or any information that may individually identify a person.<br />
          <br />
          <span className="text-green-now dark:text-yellow-now font-bold">BANANOW</span> may collect Personal Data including without limitation your name, email address, IP address, and device identifiers and/or geolocation information, in the course of its Services, and may use or disclose that Personal Data as described with this Privacy Policy.<br />
          <br />
          We may also create de-identified or anonymized data from Personal Data by excluding data components (such as your name, email address, etc.) that make the data able to personally identify you, through obfuscation, or through other means. In addition, we may collect and use aggregated, anonymous information to provide data about the Services to advertisers, potential business partners, and other unaffiliated entities. As this information does not identify a person and is therefore not Personal Data, <span className="text-yellow-now dark:text-green-now font-bold">BANANOW</span> when using such aggregated, anonymized, and/or de-identified data is not subject to this Privacy Statement.<br />
          <br />
          SECTION 1 - WHAT DO WE DO WITH YOUR INFORMATION?<br />
          <br />
          When you use our website, we may collect the personal information that you voluntarily give us such as your name, and email address. We may also automatically receive your computer’s internet protocol (IP) address in order to provide us with information that helps us <span className="text-green-now dark:text-yellow-now font-bold">LEARN</span> about your browser and operating system. Your consent is implied to collect and use your Personal Data to facilitate that use or complete that transaction initiated by you only. Email marketing (if applicable): If you have joined our mailing list, or if you email us, we may also send you emails about our new products, and other updates. You can opt out of our email list by selecting such a feature on our email.<br />
          <br />
          SECTION 2 – CONSENT<br />
          <br />
          How do you get my consent?<br />
          If we ask for your personal information for a reason, like for marketing purposes, we will either ask you directly for your expressed consent or provide you with an opportunity to say no.<br />
          <br />
          How do I withdraw my consent?<br />
          If after you opt-in, you change your mind, you may withdraw your consent for us to contact you, for the continued collection, use, or disclosure of your information, at any time, by contacting our Privacy Compliance Officer (See contact at the end of this page).<br />
          <br />
          SECTION 3 – DISCLOSURE<br />
          <br />
          We may disclose your personal information to government authorities if we are required by law to do so or if you violate our Terms and Conditions of Use.<br />
          <br />
          SECTION 4 - THIRD-PARTY SERVICE<br />
          <br />
          In general, the third-party providers used by us will only collect, use, and disclose your information to the extent necessary to allow them to perform the services they provide to us.<br />
          <br />
          However, certain third-party service providers, such as payment gateways and other payment transaction processors, have their own privacy policies with respect to the information we are required to provide to them for your purchase-related transactions.<br />
          <br />
          For these providers, we recommend that you read their privacy policies so you can understand the manner in which your personal information will be handled by these providers.<br />
          <br />
          In particular, remember that certain providers may be located in or have facilities that are located in a different jurisdiction than either you or us. So if you elect to proceed with a transaction that involves the services of a third-party service provider, then your information may become subject to the laws of the jurisdiction(s) in which that service provider or its facilities are located.<br />
          <br />
          As an example, if you are located in Canada and your transaction is processed by a payment gateway located in the United States, then your personal information used in completing that transaction may be subject to disclosure under United States legislation, including the Patriot Act.<br />
          <br />
          Once you leave our store’s website or are redirected to a third-party website or application, you are no longer governed by this Privacy Policy or our website’s Terms and Conditions of Use. The following is a list of Data Processors engaged by <span className="text-yellow-now dark:text-green-now font-bold">BANANOW</span> who may receive Personal Data:<br />
          <br />
          STRAIGHT-LINE.ORG<br />
          ENDHONESA.COM<br />
          Vercel.Com<br />
          DigitalOcean.Com<br />
          Discord.Com<br />
          Twitter.Com<br />
          Instagram.Com<br />
          YouTube.Com<br />
          MetaMask.IO<br />
          EtherScan.IO<br />
          BaseScan.Org<br />
          TZKT.IO<br />
          PolygonScan.Com<br />
          OpenSea.IO<br />
          OBJKT.Com<br />
          Foundation.App<br />
          thirdweb.Com<br />
          Ethereum blockchain<br />
          Base Blockchain<br />
          Tezos blockchain<br />
          Polygon blockchain<br />
          GitBook.Com<br />
          GitHub.Com<br />
          SpinupWP.App<br />
          WordPress.Org<br />
          Google.Com<br />
          <br />
          External links:<br />
          When you click on links and/or hyperlinked buttons on our store, they may direct you away from our site. We are not responsible for the privacy practices of other sites and encourage you to read their privacy statements.<br />
          <br />
          SECTION 5 – SECURITY<br />
          <br />
          To protect your personal information, we take reasonable precautions and follow industry best practices to make sure it is not inappropriately lost, misused, accessed, disclosed, altered, or destroyed.<br />
          <br />
          SECTION 6 – COOKIES<br />
          <br />
          We may use a number of cookies, and when/if we do, you can choose if you want to opt out of cookies or not.<br />
          <br />
          SECTION 7 - TRANSFER OF YOUR PERSONAL DATA TO OTHER COUNTRIES<br />
          <br />
          The data that <span className="text-green-now dark:text-yellow-now font-bold">BANANOW</span> processes, as well as data processed by associated services and providers, may be stored in servers located in the USA, CANADA, Europe, and/or elsewhere. It may be stored in multiple locations. However, we ensure that regardless of the place where it is stored, your data is stored in a way that is consistent with the standards of protection required under applicable law.<br />
          <br />
          Where Personal Data is transferred from the European Economic Area to a country that has not received an adequacy decision by the European Commission, <span className="text-yellow-now dark:text-green-now font-bold">BANANOW</span> relies on appropriate safeguards, such as for example the European Commission-approved Standard Contractual Clauses and EU-U.S. Privacy Shield Frameworks, to transfer the Personal Data.<br />
          <br />
          By using our Services and submitting your Personal Data, you agree to the transfer, storage, and/or processing of your Personal Data in the locations contemplated above. Where and as required, we will seek your explicit consent as outlined in this Privacy Statement.<br />
          <br />
          SECTION 8 - CHANGES TO THIS PRIVACY POLICY<br />
          <br />
          We reserve the right to modify this privacy policy at any time, so please review it frequently. Changes and clarifications will take effect immediately upon their posting on the website. If we make material changes to this policy, we will notify you here that it has been updated, so that you are aware of what information we collect, how we use it, and under what circumstances, if any, we use and/or disclose it.<br />
          <br />
          If our website or company is acquired or merged with another company, your information may be transferred to the new owners so that we may continue to sell products to you.<br />
          <br />
          We reserve the right to modify this privacy policy at any time, so please review it frequently.<br />
          <br />
          SECTION 9 – RIGHTS CONCERNING PERSONAL DATA<br />
          <br />
          <span className="text-green-now dark:text-yellow-now font-bold">BANANOW</span> is committed to ensuring you retain full access to and control of your Personal Data. To that end, we endeavor to respect your right to be informed regarding the collection, use, and disclosure of Personal Data, and your right to correction and access to it, via this Privacy Statement.<br />
          <br />
          If you would like to access, correct, remove, request a copy of, withdraw consent to the collection of your Personal Data, or are looking for any additional information on how your Personal Data may be collected, used, or disclosed by <span className="text-yellow-now dark:text-green-now font-bold">BANANOW</span>, please contact our Privacy Compliance Officer (See contact at the end of this page). Subject to certain exceptions and limitations that may be prescribed by applicable law, you will be provided with reasonable access to your Personal Data and will be entitled to have it amended or corrected as appropriate.<br />
          <br />
          In certain circumstances, you may have the right to have your Personal Data, or certain components of your Personal Data, erased by <span className="text-green-now dark:text-yellow-now font-bold">BANANOW</span>, to have your Personal Data moved, copied, or transmitted from our systems to other systems, or to object to or restrict certain processing of your Personal Data by us. In the event that you wish to inquire about, or seek to exercise any of these rights (as they may be applicable), please contact our Privacy Compliance Officer at: EMBASSY@<span className="text-yellow-now dark:text-green-now font-bold">BANANOW</span>.<span className="text-green-now dark:text-yellow-now font-bold">LAND</span>
        </p>
      </div>
    </Layout>
  );
}
