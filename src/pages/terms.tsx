import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";

import useSound from "use-sound";

export default function Terms() {
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
        <h2 className="text-4xl font-judul font-bold text-center text-neutral-900 dark:text-white">Terms and Conditions of Use</h2>

        <p className="pt-6 pb-16 text-base max-w-2xl text-center m-auto text-dark-now dark:text-white-now">
          Last updated on September 4, 2023.
        </p>
        <p className="pt-0 pb-16 text-base max-w-4xl text-left m-auto text-dark-now dark:text-white-now">
          OVERVIEW<br />
          <br />
          This website is operated by <span className="text-green-now dark:text-yellow-now font-bold">BANANOW</span> <span className="text-yellow-now dark:text-green-now font-bold">FAMILY</span>. Throughout the site, the terms "we", "us" and "our" refer to <span className="text-green-now dark:text-yellow-now font-bold">BANANOW</span> <span className="text-yellow-now dark:text-green-now font-bold">FAMILY</span>, also referred to as <span className="text-green-now dark:text-yellow-now font-bold">BANANOW</span>.<span className="text-yellow-now dark:text-green-now font-bold">LAND</span> and <span className="text-green-now dark:text-yellow-now font-bold">BANANOW</span>. <span className="text-yellow-now dark:text-green-now font-bold">BANANOW</span> <span className="text-green-now dark:text-yellow-now font-bold">FAMILY</span> offers this website, including all information, tools, and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies, and notices stated here.<br />
          <br />
          By visiting our site and/or purchasing something from us, you engage in our "Service" and agree to be bound by the following terms and conditions of use ("Terms of Service", "Terms of Use", "Terms"), including those additional terms and conditions and policies referenced herein and/or available by hyperlink. These Terms and Conditions of Use apply to all users of the site, including without limitation users who are browsers, vendors, and/or customers.<br />
          <br />
          By visiting the websites of our products’ merchants, in particular OpenSea.IO, you also agree to be bound by their terms and conditions of use.<br />
          <br />
          Please read these Terms carefully before accessing or using our website, or buying any of our products. By accessing or using any part of the site, you agree to be bound by these Terms. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services. If these Terms are considered an offer, acceptance is expressly limited to these Terms.<br />
          <br />
          Any new features or tools that are added to the current site shall also be subject to the Terms. You can review the most current version of the Terms at any time on this page. We reserve the right to update, change, or replace any part of these Terms by posting updates and/or changes to our website. It is your responsibility to check this page periodically for changes. Your continued use of or access to the website following the posting of any changes constitutes acceptance of those changes. Our website is hosted on STRAIGHT-LINE.ORG.<br />
          <br />
          SECTION 1 - ONLINE TERMS<br />
          <br />
          By agreeing to these Terms, you represent that you are at least the age of majority in your state or province of residence. You may not use our products and/or services for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws).<br />
          <br />
          The headings used in this agreement are included for convenience only and will not limit or otherwise affect these Terms.<br />
          <br />
          SECTION 2 - GENERAL CONDITIONS<br />
          <br />
          You must not transmit any worms or viruses or any code of a destructive nature. A breach or violation of any of the Terms will result in an immediate termination of our Services to you.<br />
          <br />
          You agree not to reproduce, duplicate, copy, sell, resell, or exploit any portion of the Service, use of the Service, or access to the Service or any contact on the website through which the service is provided, without express written permission by us.<br />
          <br />
          SECTION 3 - ACCURACY, COMPLETENESS AND TIMELINESS OF INFORMATION<br />
          <br />
          We are not responsible if the information made available on this site is not accurate, complete, or current. The material on this site is provided for general information only and should not be relied upon or used as the sole basis for making decisions without consulting primary, more accurate, more complete, or more timely sources of information. Any reliance on the material on this site is at your own risk.<br />
          <br />
          We reserve the right to modify the contents of this site at any time, but we have no obligation to update any information on our site. You agree that it is your responsibility to monitor changes to our site.<br />
          <br />
          SECTION 4 - MODIFICATIONS TO THE INFORMATION, SERVICE AND PRICES<br />
          <br />
          Information, services, and prices are subject to change without notice. We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time.<br />
          <br />
          We shall not be liable to you or to any third party for any modification, price change, suspension, or discontinuance of the Service.<br />
          <br />
          Prices for our products on merchant websites to which our links point, such as prices on OpenSea.IO, may be subject to changes. Please note that we bear no responsibility for any of our products offered on OpenSea.IO or other merchant sites when such offers originate from third parties (secondary market).<br />
          <br />
          SECTION 5 - PRODUCTS OR SERVICES (if applicable)<br />
          <br />
          Certain products or services may be available exclusively online through the website.<br />
          <br />
          We have made every effort to display as accurately as possible the colors and images of our products that appear on our website. We cannot guarantee that your computer monitor's display of any color will be accurate. We do not warrant that the quality of any products, services, information, or other material purchased or obtained by you will meet your expectations, or that any errors in the Service will be corrected.<br />
          <br />
          In particular, we currently offer the possibility to search or preview our products on our website. Please note we reserve ourselves the right to discontinue such service and functionality, as well as any other service that we provide.<br />
          <br />
          We also may run a Discord server, for information, promotion, and/or members discussions. Please note that we reserve ourselves the right to reject or ban any member that infringes on our rules. Ownership of any of our products does not confer the owner any right of access to such Discord server, and we may block or ban the access of anyone we see fit, for any reason, and without any warning or notice. We may also terminate such server at any time at our entire discretion and without prior notice.<br />
          <br />
          Characteristics of the products, such as traits, tiers, and/or grades, as well as their respective rarities and probabilistic repartitions, at token issue, file artwork reveal, or later, and/or overall, may change or be changed according to circumstances and at our entire discretion.<br />
          <br />
          We may at times offer the service of integrating one of our products, such as an artwork, to an original NFT that you own in your crypto wallet. When selecting the NFT to integrate, please ensure that you own all copyrights and licenses in relation to this original NFT, including for such purpose. You warrant that you will not resell or transfer such merged NFT to a third party without also transferring the original NFT to the same third party unless your license for use and copyright allows you to do so. The use of such service and the resulting product, as well as its trade or transfers, are done under your own and sole responsibility and liability.<br />
          <br />
          You accept that there are no explicit or implicit obligations for <span className="text-yellow-now dark:text-green-now font-bold">BANANOW</span> to undertake activities or <span className="text-green-now dark:text-yellow-now font-bold">WORK</span> during your period of control of the NFT artworks, and in particular:<br />
          <br />
          There is no obligation for <span className="text-yellow-now dark:text-green-now font-bold">BANANOW</span> to provide or maintain any service.<br />
          There is no obligation for <span className="text-green-now dark:text-yellow-now font-bold">BANANOW</span> to provide any <span className="text-yellow-now dark:text-green-now font-bold">WORK</span>.<br />
          There is no obligation for <span className="text-green-now dark:text-yellow-now font-bold">BANANOW</span> to change the form or functionality of that artwork.<br />
          There is no obligation for <span className="text-yellow-now dark:text-green-now font-bold">BANANOW</span> to support or maintain any value of the NFT and associated artworks.<br />
          There is no obligation for <span className="text-green-now dark:text-yellow-now font-bold">BANANOW</span> to produce any marketing effort to promote the NFTs, the artworks, the brand name, or anything related to the NFT that you bought from us.<br />
          <br />
          As a result, you agree that you do not have any expectation of <span className="text-yellow-now dark:text-green-now font-bold">WORK</span>  to be produced by <span className="text-green-now dark:text-yellow-now font-bold">BANANOW</span> in connection to the NFTs that you bought from us.<br />
          <br />
          SECTION 6 – CRYPTO ITEMS<br />
          <br />
          You accept and acknowledge:<br />
          <br />
          1. When purchasing one of our NFTs from us (means any blockchain-tracked, non-fungible token that we have produced and that we offer through a merchant website), you acquire a non-exclusive, worldwide, royalty-free, license to use, copy, display the related artwork associated with the NFT, for you own personal, non-commercial use. However, you do not own the underlying copyright in the content the NFT is associated with, nor any copyright related to the component images and graphics, technology, or process used in the making of the artwork or of the NFT. Furthermore, you are getting the NFT and license “as is”. You can use the artwork when you are on a marketplace that allows the purchase and sale of your token, as long as the marketplace cryptographically verifies that you are the owner. You can also use your artwork to commercialize your own merchandise, provided that you do not earn more than US$100,000 in revenue each year from doing so. However, you cannot modify the artwork, use the artwork to sell or promote third-party products, or use the artwork in connection with images of hatred, violence, or any other inappropriate behavior. You cannot try to trademark the artwork, or otherwise acquire intellectual property rights in it.<br />
          <br />
          2. The License granted in above Section 6-1 only applies to the extent that you continue to own the relevant NFT. If at any time you trade, donate, give away, transfer, or otherwise dispose of your NFT for any reason, the license granted in Section 6-1 will immediately expire and without notice, and you will have no further right in or to the artwork of this NFT.<br />
          <br />
          3. The prices of crypto items are extremely volatile, and the prices of other digital items can adversely affect the prices of the NFTs. We cannot guarantee that any purchaser of the crypto item will not lose money. In particular, a number of factors may affect the prices of NFTs, including (but not limited to), buyers’ interest, market fluctuation, technological changes, regulatory environment.<br />
          <br />
          4. We do not represent that our NFTs may constitute a valuable purchase, or that their value may increase with time. Please do not buy any of our products with any expectation of profit. When purchasing any of our NFTs, you accept and confirm that you have no expectation of profit. The NFTs that you buy from us are not investment contracts, and we disclaim any claim associated with any speculation you or other users may engage in connection to these NFTs. You are fully aware that the value of the NFTs may drop to zero, and that they may become unsellable by lack of demand for them. As a result, you are fully aware that you may lose the entirety of the value spent, as well as gas costs, transfer costs, and other purchasing costs.<br />
          <br />
          5. You are solely responsible if any taxes apply to your crypto items and transactions. We are not responsible for determining the taxes that may apply to you.<br />
          <br />
          6. We do not store or send your crypto items. Any transfer of crypto items occurs within the supporting blockchain.<br />
          <br />
          7. There are risks associated with using an Internet-based currency, including but not limited to, the risk of hardware, software, and Internet connections, the risk of malicious software introduction, and the risk that third parties may obtain unauthorized access to information sorted within your wallet. You accept and acknowledge that <span className="text-yellow-now dark:text-green-now font-bold">BANANOW</span> will not be responsible for any communication failures, disruptions, errors, distortions, or delays that you may experience when using our services or products, however caused.<br />
          <br />
          8. The regulatory regime governing NFTs and cryptocurrencies is uncertain, and new regulations or policies may adversely affect the services and products that we provide.<br />
          <br />
          9. There are risks associated with purchasing user-generated content, including but not limited to, the risk of purchasing mislabelled assets, assets that are vulnerable to metadata decay, assets on smart contracts with bugs, and assets that may become non-transferable. Assets that you purchase may become inaccessible on our website or merchants’ websites. Under no circumstances shall the inability to view your assets serve as grounds for a claim against us.<br />
          <br />
          10. Please note that we reserve ourselves the right to amend our offers, as described on this website, our Discord server, our whitepaper or our green print, and/or other places where we advertise our products, including, but limited to, the number of products on offer, the roadmap and calendars, and/or prices.<br />
          <br />
          11. You are also aware that there are fraud risks in buying NFTs, and you need to exercise great caution when accessing our links and websites. In particular, we are not responsible for any losses that you may suffer resulting from you responding to third parties impersonating us or our websites, or from parties offering copies of our artworks. In particular, we are not responsible for any third party contacting you with a direct message on our Discord server, for any third-party link in any channel of our Discord server, or for any third-party link on any messaging or social media platform or service, and for any losses that you may suffer as a result of you answering their solicitation.<br />
          <br />
          SECTION 7 - THIRD-PARTY LINKS<br />
          <br />
          Certain content, products, and services available via our Service may include materials from third parties.<br />
          <br />
          Third-party links on this site may direct you to third-party websites that are not affiliated with us. We are not responsible for examining or evaluating the content or accuracy and we do not warrant and will not have any liability or responsibility for any third-party materials or websites, or for any other materials, products, or services of third parties.<br />
          <br />
          We are not liable for any harm or damages related to the purchase or use of goods, services, resources, content, or any other transactions made in connection with any third-party websites. Please review carefully the third-party's policies and practices and make sure you understand them before you engage in any transaction. Complaints, claims, concerns, or questions regarding third-party products should be directed to the third party.<br />
          <br />
          SECTION 8 - PERSONAL INFORMATION<br />
          <br />
          Your submission of personal information through the store is governed by our Privacy Policy. To view our Privacy Policy, please visit the Privacy section of our website.<br />
          <br />
          SECTION 9 - ERRORS, INACCURACIES AND OMISSIONS<br />
          <br />
          Occasionally there may be information on our site or in the Service that contains typographical errors, inaccuracies, or omissions that may relate to product descriptions, pricing, promotions, offers, or availability. We reserve the right to correct any errors, inaccuracies, or omissions, and to change or update information or cancel any information in the Service or on any related website that is inaccurate at any time without prior notice (including after you have purchased one of our NFTs).<br />
          <br />
          We undertake no obligation to update, amend, or clarify information in the Service or on any related website, including without limitation, pricing information, except as required by law. No specified update or refresh date applied in the Service or on any related website should be taken to indicate that all information in the Service or on any related website has been modified or updated.<br />
          <br />
          SECTION 10 - PROHIBITED USES<br />
          <br />
          In addition to other prohibitions as set forth in the Terms of Service, you are prohibited from using the site or its content: (a) for any unlawful purpose; (b) to solicit others to perform or participate in any unlawful acts; (c) to violate any international, federal, provincial or state regulations, rules, laws, or local ordinances; (d) to infringe upon or violate our intellectual property rights or the intellectual property rights of others; (e) to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability; (f) to submit false or misleading information; (g) to upload or transmit viruses or any other type of malicious code that will or may be used in any way that will affect the functionality or operation of the Service or of any related website, other websites, or the Internet; (h) to collect or track the personal information of others; (i) to spam, phish, pharm, pretext, spider, crawl, or scrape; (j) for any obscene or immoral purpose; or (k) to interfere with or circumvent the security features of the Service or any related website, other websites, or the Internet. We reserve the right to terminate your use of the Service or any related website for violating any of the prohibited uses.<br />
          <br />
          SECTION 11 - DISCLAIMER OF WARRANTIES; LIMITATION OF LIABILITY<br />
          <br />
          We do not guarantee, represent, or warrant that your use of our service will be uninterrupted, timely, secure, or error-free.<br />
          <br />
          We do not warrant that the results that may be obtained from the use of the service will be accurate or reliable.<br />
          <br />
          You agree that from time to time we may remove the service for indefinite periods of time or cancel the service at any time, without notice to you. You expressly agree that your use of, or inability to use, the service is at your sole risk. The service and all products and services delivered to you through the service are (except as expressly stated by us) provided 'as is' and 'as available' for your use, without any representation, warranties, or conditions of any kind, either express or implied, including all implied warranties or conditions of merchantability, merchantable quality, fitness for a particular purpose, durability, title, and non-infringement.<br />
          <br />
          In no case shall <span className="text-green-now dark:text-yellow-now font-bold">BANANOW</span>, our directors, officers, employees, affiliates, agents, contractors, interns, shareholders, suppliers, service providers, or licensees be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind, including, without limitation, lost profits, lost revenue, lost savings, loss of data, replacement costs, or any similar damages, whether based in contract, tort (including negligence), strict liability or otherwise, arising from your use of any of the service or any products procured using the service or from us, or for any other claim related in any way to your use of the service or any product, including, but not limited to any errors or omissions in any content, or any loss or damage of any kind incurred as a result of the use of the service or any content (or product) posted, transmitted, or otherwise made available via the service, even if advised of their possibility. Because some countries, states, or jurisdictions do not allow the exclusion or the limitation of liability for consequential or incidental damages, in such states or jurisdictions, our liability shall be limited to the maximum extent permitted by law.<br />
          <br />
          SECTION 12 – INDEMNIFICATION<br />
          <br />
          You agree to indemnify, defend and hold harmless <span className="text-yellow-now dark:text-green-now font-bold">BANANOW</span> and our parent, subsidiaries, affiliates, partners, officers, directors, shareholders, agents, contractors, licensees, service providers, subcontractors, suppliers, interns, and employees, harmless from any claim or demand, including reasonable attorneys’ fees, made by any third-party due to or arising out of your breach of these Terms or the documents they incorporate by reference or your violation of any law or the rights of a third-party.<br />
          <br />
          SECTION 13 – SEVERABILITY<br />
          <br />
          In the event that any provision of these Terms is determined to be unlawful, void, or unenforceable, such provision shall nonetheless be enforceable to the fullest extent permitted by applicable law, and the unenforceable portion shall be deemed to be severed from these Terms, such determination shall not affect the validity and enforceability of any other remaining provisions.<br />
          <br />
          SECTION 14 - ENTIRE AGREEMENT<br />
          <br />
          The failure of us to exercise or enforce any right or provision of these Terms shall not constitute a waiver of such right or provision. These Terms and any policies or operating rules posted by us on this site or in respect to The Service constitute the entire agreement and understanding between you and us and govern your use of the Service, superseding any prior or contemporaneous agreements, communications, and proposals, whether oral or written, between you and us (including, but not limited to, any prior versions of the Terms). Any ambiguities in the interpretation of these Terms shall not be construed against the drafting party.<br />
          <br />
          SECTION 15 - GOVERNING LAW & DISPUTES<br />
          <br />
          These Terms and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of REPUBLIC ENDHONESA.<br />
          <br />
          Waiver:<br />
          <br />
          The parties (you and us) hereby waive their rights to go to court and have a trial in front of a judge or a jury. In addition, all claims must be arbitrated or litigated on an individual basis and not on a class basis, and claims of more than one customer cannot be arbitrated or litigated jointly or consolidated with those of any other customer or user.<br />
          <br />
          Claims settlement:<br />
          <br />
          In case of any dispute, all parties should try to resolve their differences in connection with the Terms of use or any product or service provided by us, through informal discussion and negotiation, or through the REPUBLIC ENDHONESA small claims tribunal.<br />
          <br />
          You hereby waive your rights, constitutional, statutory, and otherwise, to go to court and have a trial in front of a judge or a jury. In addition, all claims must be arbitrated or litigated on an individual basis and not on a class basis, and claims of more than one customer cannot be arbitrated or litigated jointly or consolidated with those of any other customer or user.<br />
          <br />
          All claims and disputes that cannot be settled informally or through the REPUBLIC ENDHONESA small claims tribunal shall be resolved by binding arbitration, as described below. This arbitration agreement applies to you and <span className="text-green-now dark:text-yellow-now font-bold">BANANOW</span>, its directors, officers, employees, affiliates, agents, contractors, interns, shareholders, suppliers, service providers, licensees, successors, or assigns. Before either party seeks arbitration, the party must send a Notice of Dispute describing the nature and basis of the claim or dispute and the requested relief. A Notice of Dispute to <span className="text-yellow-now dark:text-green-now font-bold">BANANOW</span> should be sent by registered mail to our address in Reality at <a id="flamboyanb13" href="#flamboyanb13" title="Road to IDR7.474.747.474,- Debt!!!!">Jl. Flamboyan Blok B No. 13, RT02/RW08, Cilandak Baru, Kec. Cilandak, Jakarta Selatan, DKI Jakarta 12430</a> - ENDHONESA. If the claim is unresolved within 30 days, either party may begin an arbitration proceeding. Any dispute, controversy, difference, or claim arising out of or relating to this contract, including the existence, validity, interpretation, performance, breach, or termination thereof or any dispute regarding non-contractual obligations arising out of or relating to it shall be referred to and finally resolved by arbitration administered by the BANI Arbitration Center (https://baniarbitration.org/) under the BANI Administered Arbitration Rules in force when the Notice of Arbitration is submitted. The law of this arbitration clause shall be the REPUBLIC ENDHONESA law. The seat of arbitration shall be ENDHONESA. The number of arbitrators shall be three. The arbitration proceedings shall be conducted in English. The decisions of the BANI Arbitration Center shall be binding on each party and final, and all aspects of the arbitration proceeding, including but not limited to the award of the arbitrator, shall be strictly confidential. In any case, any claim against us shall not exceed the amount you paid us for the services and products in the past six months preceding your claim, and within the maximum amount corresponding to the maximum quantity of NFTs you may buy from us as shown on our website.<br />
          <br />
          Small claims tribunal:<br />
          <br />
          Notwithstanding the foregoing, either you or <span className="text-green-now dark:text-yellow-now font-bold">BANANOW</span> may bring an individual action in the small claims tribunal of REPUBLIC ENDHONESA.<br />
          <br />
          SECTION 16 - CHANGES TO TERMS AND CONDITIONS OF USE<br />
          <br />
          You can review the most current version of the Terms and Conditions of Use at any time on this page.<br />
          <br />
          We reserve the right, at our sole discretion, to update, change, or replace any part of these Terms by posting updates and changes to our website. It is your responsibility to check our website periodically for changes. Your continued use of or access to our website or the Service following the posting of any changes to these Terms constitutes acceptance of those changes.<br />
          <br />
          SECTION 17 - CONTACT INFORMATION<br />
          <br />
          Questions about the Terms should be sent to us at: EMBASSY@<span className="text-yellow-now dark:text-green-now font-bold">BANANOW</span>.<span className="text-green-now dark:text-yellow-now font-bold">LAND</span>
        </p>
      </div>
    </Layout>
  );
}
