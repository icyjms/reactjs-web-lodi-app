// import { ArrowBackIcon } from '@chakra-ui/icons';
import { Box, Container, Heading, Text } from '@chakra-ui/react';
// import { useHistory } from 'react-router-dom';
import Section from 'components/Section';
import { ArrowUpIcon } from '@chakra-ui/icons';
import { goToTop } from 'utils/helpers';

function TermsAndConditions() {
  // let history = useHistory();

  return (
    <Section>
      <Container maxW="12xl" p={[4, 8, 16]}>
        <Box textAlign="justify">
          {/*  <ArrowBackIcon
            w={10}
            h={10}
            cursor="pointer"
            onClick={() => {
              history.goBack();
            }}
          /> */}
          <Heading
            my={[2, 4, 16]}
            lineHeight={1.1}
            fontWeight={500}
            fontSize={{ base: '4xl', sm: '3xl', lg: '7xl' }}
          >
            <Text
              as="span"
              color="dark.100"
              style={{ textTransform: 'uppercase' }}
            >
              Terms and Conditions
            </Text>
          </Heading>

          <p>Last updated:&nbsp;25 August 2021</p>
          <p>&nbsp;</p>
          <p>
            1.&nbsp;<strong>Introduction</strong>
          </p>
          <p>
            Welcome to&nbsp;
            <strong>Logistikus Express Philippines, Inc.</strong>
            &nbsp;(&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;,
            &ldquo;us&rdquo;)!
          </p>
          <p>
            These Terms of Service (&ldquo;Terms&rdquo;, &ldquo;Terms of
            Service&rdquo;) govern your use of our website located at&nbsp;
            <strong>lodi.com.ph</strong>&nbsp;(together or individually
            &ldquo;Service&rdquo;) operated by&nbsp;
            <strong>Company</strong>.
          </p>
          <p>
            Our Privacy Policy also governs your use of our Service and explains
            how we collect, safeguard and disclose information that results from
            your use of our web pages.
          </p>
          <p>&nbsp;</p>
          <p>
            Your agreement with us includes these Terms and our Privacy Policy
            (&ldquo;Agreements&rdquo;). You acknowledge that you have read and
            understood Agreements, and agree to be bound of them.
          </p>
          <p>&nbsp;</p>
          <p>
            If you do not agree with (or cannot comply with) Agreements, then
            you may not use the Service, but please let us know by emailing
            at&nbsp;<strong>support@lodi.com.ph</strong>&nbsp;so we can try to
            find a solution. These Terms apply to all visitors, users and others
            who wish to access or use Service.
          </p>
          <p>&nbsp;</p>
          <p>
            2.&nbsp;<strong>Communications</strong>
          </p>
          <p>
            By using our Service, you agree to subscribe to newsletters,
            marketing or promotional materials and other information we may
            send. However, you may opt out of receiving any, or all, of these
            communications from us by following the unsubscribe link or by
            emailing at&nbsp;support@lodi.com.ph.
          </p>
          <p>&nbsp;</p>
          <p>
            3. Service&nbsp;<strong>Purchases</strong>
          </p>
          <p>
            If you wish to purchase any product or service made available
            through Service (&ldquo;Purchase&rdquo;), you may be asked to supply
            certain information relevant to your Purchase including but not
            limited to, your credit or debit card number, the expiration date of
            your card, your billing address, and your shipping information.
          </p>
          <p>&nbsp;</p>
          <p>
            You represent and warrant that: (i) you have the legal right to use
            any card(s) or other payment method(s) in connection with any
            Purchase; and that (ii) the information you supply to us is true,
            correct and complete.
          </p>
          <p>
            We may employ the use of third party services for the purpose of
            facilitating payment and the completion of Purchases. By submitting
            your information, you grant us the right to provide the information
            to these third parties subject to our Privacy Policy.
          </p>
          <p>&nbsp;</p>
          <p>
            We reserve the right to refuse or cancel your order at any time for
            reasons including but not limited to: product or service
            availability, errors in the description or price of the product or
            service, error in your order or other reasons.
          </p>
          <p>&nbsp;</p>
          <p>
            We reserve the right to refuse or cancel your order if fraud or an
            unauthorized or illegal transaction is suspected.
          </p>
          <p>&nbsp;</p>
          <p>
            4. <strong>Return to Sender (“RTS”)</strong>
          </p>
          <p>
            We will collect from you, the Return Fee for delivery through
            Service. Return fee may arise if consignee or recipient identified
            by you is not present at the delivery location at the time booked
            for delivery. We will likewise return the items for delivery to you
            at your pick-up location upon confirmation of payment of Return Fee.
          </p>
          <p>&nbsp;</p>
          <p>
            5. <strong>Hassle Fee</strong>
          </p>
          <p>
            We will collect from you Hassle Fee if you booked delivery through
            Service and subsequently cancel the same booking if:
          </p>
          <p>&nbsp;</p>
          <p>
            5.1. Our courier has accepted the assignment and has already
            travelled five (5) kilometers from his point of origin OR
          </p>
          <p>
            5.2. Our courier has accepted the assignment and five (5) minutes
            has already lapsed.
          </p>
          <p>&nbsp;</p>
          <p>
            6.&nbsp;<strong>Contests, Sweepstakes and Promotions</strong>
          </p>
          <p>
            Any contests, sweepstakes or other promotions (collectively,
            &ldquo;Promotions&rdquo;) made available through Service may be
            governed by rules that are separate from these Terms of Service. If
            you participate in any Promotions, please review the applicable
            rules as well as our Privacy Policy. If the rules for a Promotion
            conflict with these Terms of Service, Promotion rules will apply.
          </p>
          <p>&nbsp;</p>
          <p>
            7.&nbsp;<strong>Content</strong>
          </p>
          <p>
            Content found on or through this Service are the property
            of&nbsp;Logistikus Express, Incorporated&nbsp;or used with
            permission. You may not distribute, modify, transmit, reuse,
            download, repost, copy, or use said Content, whether in whole or in
            part, for commercial purposes or for personal gain, without express
            advance written permission from us.
          </p>
          <p>&nbsp;</p>
          <p>
            8.&nbsp;<strong>Prohibited Uses</strong>
          </p>
          <p>
            You may use Service only for lawful purposes and in accordance with
            Terms. You agree not to use Service:
          </p>
          <p>
            8.1. In any way that violates any applicable national or
            international law or regulation.
          </p>
          <p>
            8.2. For the purpose of exploiting, harming, or attempting to
            exploit or harm minors in any way by exposing them to inappropriate
            content or otherwise.
          </p>
          <p>
            8.3. To transmit, or procure the sending of, any advertising or
            promotional material, including any &ldquo;junk mail&rdquo;,
            &ldquo;chain letter,&rdquo; &ldquo;spam,&rdquo; or any other similar
            solicitation.
          </p>
          <p>
            8.4. To impersonate or attempt to impersonate Company, a Company
            employee, another user, or any other person or entity.
          </p>
          <p>
            8.5. In any way that infringes upon the rights of others, or in any
            way is illegal, threatening, fraudulent, or harmful, or in
            connection with any unlawful, illegal, fraudulent, or harmful
            purpose or activity.
          </p>
          <p>
            8.6. To engage in any other conduct that restricts or inhibits
            anyone&rsquo;s use or enjoyment of Service, or which, as determined
            by us, may harm or offend Company or users of Service or expose them
            to liability.
          </p>
          <p>&nbsp;</p>
          <p>Additionally, you agree not to:</p>
          <p>&nbsp;</p>
          <p>
            a. Use Service in any manner that could disable, overburden, damage,
            or impair Service or interfere with any other party&rsquo;s use of
            Service, including their ability to engage in real time activities
            through Service.
          </p>
          <p>
            b. Use any robot, spider, or other automatic device, process, or
            means to access Service for any purpose, including monitoring or
            copying any of the material on Service.
          </p>
          <p>
            c. Use any manual process to monitor or copy any of the material on
            Service or for any other unauthorized purpose without our prior
            written consent.
          </p>
          <p>
            d. Use any device, software, or routine that interferes with the
            proper working of Service.
          </p>
          <p>
            e. Introduce any viruses, trojan horses, worms, logic bombs, or
            other material which is malicious or technologically harmful.
          </p>
          <p>
            f. Attempt to gain unauthorized access to, interfere with, damage,
            or disrupt any parts of Service, the server on which Service is
            stored, or any server, computer, or database connected to Service.
          </p>
          <p>
            g. Attack Service via a denial-of-service attack or a distributed
            denial-of-service attack.
          </p>
          <p>h. Take any action that may damage or falsify Company rating.</p>
          <p>
            i. Otherwise attempt to interfere with the proper working of
            Service.
          </p>
          <p>&nbsp;</p>
          <p>
            9.&nbsp;<strong>Analytics</strong>
          </p>
          <p>
            We may use third-party Service Providers to monitor and analyze the
            use of our Service.
          </p>
          <p>&nbsp;</p>
          <p>
            10.&nbsp;<strong>No Use By Minors</strong>
          </p>
          <p>
            Service is intended only for access and use by individuals at least
            eighteen (18) years old. By accessing or using Service, you warrant
            and represent that you are at least eighteen (18) years of age and
            with the full authority, right, and capacity to enter into this
            agreement and abide by all of the terms and conditions of Terms. If
            you are not at least eighteen (18) years old, you are prohibited
            from both the access and usage of Service.
          </p>
          <p>&nbsp;</p>
          <p>
            11.&nbsp;<strong>Accounts</strong>
          </p>
          <p>
            When you create an account with us, you guarantee that you are above
            the age of 18, and that the information you provide us is accurate,
            complete, and current at all times. Inaccurate, incomplete, or
            obsolete information may result in the immediate termination of your
            account on Service.
          </p>
          <p>&nbsp;</p>
          <p>
            You are responsible for maintaining the confidentiality of your
            account and password, including but not limited to the restriction
            of access to your computer and/or account. You agree to accept
            responsibility for any and all activities or actions that occur
            under your account and/or password, whether your password is with
            our Service or a third-party service. You must notify us immediately
            upon becoming aware of any breach of security or unauthorized use of
            your account.
          </p>
          <p>&nbsp;</p>
          <p>
            You may not use as a username the name of another person or entity
            or that is not lawfully available for use, a name or trademark that
            is subject to any rights of another person or entity other than you,
            without appropriate authorization. You may not use as a username any
            name that is offensive, vulgar or obscene.
          </p>
          <p>&nbsp;</p>
          <p>
            We reserve the right to refuse service, terminate accounts, remove
            or edit content, or cancel orders in our sole discretion.
          </p>
          <p>&nbsp;</p>
          <p>
            12.&nbsp;<strong>Intellectual Property</strong>
          </p>
          <p>
            Service and its original content (excluding Content provided by
            users), features and functionality are and will remain the exclusive
            property ofCompanyand its licensors. Service is protected by
            Intellectual Property Code and other laws ofthe Philippines. Our
            intellectual property rights may not be used in connection with any
            product or service without the prior written consent ofCompany.
          </p>
          <p>&nbsp;</p>
          <p>
            13.&nbsp;<strong>Copyright Policy</strong>
          </p>
          <p>
            We respect the intellectual property rights of others. It is our
            policy to respond to any claim that Content posted on Service
            infringes on the copyright or other intellectual property rights of
            any person or entity (&ldquo;Infringement&rdquo;).
          </p>
          <p>&nbsp;</p>
          <p>
            If you are a copyright owner, or authorized on behalf of one, and
            you believe that the copyrighted work has been copied in a way that
            constitutes copyright infringement, please submit your claim via
            email tosupport@lodi.com.ph, with the subject line: “Copyright
            Infringement” and include in your claim a detailed description of
            the alleged Infringement.
          </p>
          <p>
            You may be held accountable for damages (including costs and
            attorneys&rsquo; fees) for misrepresentation or bad-faith claims on
            the infringement of any Content found on and/or through Service on
            your copyright.
          </p>
          <p>&nbsp;</p>
          <p>
            14.&nbsp;
            <strong>Error Reporting and Feedback</strong>
          </p>
          <p>
            You may provide us either directly atsupport@lodi.com.phor via third
            party sites and tools with information and feedback concerning
            errors, suggestions for improvements, ideas, problems, complaints,
            and other matters related to our Service (“Feedback”). You
            acknowledge and agree that: (i) you shall not retain, acquire or
            assert any intellectual property right or other right, title or
            interest in or to the Feedback; (ii) Company may have development
            ideas similar to the Feedback; (iii) Feedback does not contain
            confidential information or proprietary information from you or any
            third party; and (iv) Company is not under any obligation of
            confidentiality with respect to the Feedback. In the event the
            transfer of the ownership to the Feedback is not possible due to
            applicable mandatory laws, you grant Company and its affiliates an
            exclusive, transferable, irrevocable, free-of-charge,
            sub-licensable, unlimited and perpetual right to use (including
            copy, modify, create derivative works, publish, distribute and
            commercialize) Feedback in any manner and for any purpose.
          </p>
          <p>&nbsp;</p>
          <p>
            15.&nbsp;<strong>Links To Other Web Sites</strong>
          </p>
          <p>
            Our Service may contain links to third party web sites or services
            that are not owned or controlled byCompany.
          </p>
          <p>
            Companyhas no control over, and assumes no responsibility for the
            content, privacy policies, or practices of any third party web sites
            or services. We do not warrant the offerings of any of these
            entities/individuals or their websites.
          </p>
          <p>&nbsp;</p>
          <p>
            YOU ACKNOWLEDGE AND AGREE THAT COMPANY SHALL NOT BE RESPONSIBLE OR
            LIABLE, DIRECTLY OR INDIRECTLY, FOR ANY DAMAGE OR LOSS CAUSED OR
            ALLEGED TO BE CAUSED BY OR IN CONNECTION WITH USE OF OR RELIANCE ON
            ANY SUCH CONTENT, GOODS OR SERVICES AVAILABLE ON OR THROUGH ANY SUCH
            THIRD PARTY WEB SITES OR SERVICES.
          </p>
          <p>
            WE STRONGLY ADVISE YOU TO READ THE TERMS OF SERVICE AND PRIVACY
            POLICIES OF ANY THIRD PARTY WEB SITES OR SERVICES THAT YOU VISIT.
          </p>
          <p>&nbsp;</p>
          <p>
            16.&nbsp;<strong>Disclaimer Of Warranty</strong>
          </p>
          <p>
            THESE SERVICES ARE PROVIDED BY COMPANY ON AN “AS IS” AND “AS
            AVAILABLE” BASIS. COMPANY MAKES NO REPRESENTATIONS OR WARRANTIES OF
            ANY KIND, EXPRESS OR IMPLIED, AS TO THE OPERATION OF THEIR SERVICES,
            OR THE INFORMATION, CONTENT OR MATERIALS INCLUDED THEREIN. YOU
            EXPRESSLY AGREE THAT YOUR USE OF THESE SERVICES, THEIR CONTENT, AND
            ANY SERVICES OR ITEMS OBTAINED FROM US IS AT YOUR SOLE RISK.
          </p>
          <p>&nbsp;</p>
          <p>
            NEITHER COMPANY NOR ANY PERSON ASSOCIATED WITH COMPANY MAKES ANY
            WARRANTY OR REPRESENTATION WITH RESPECT TO THE COMPLETENESS,
            SECURITY, RELIABILITY, QUALITY, ACCURACY, OR AVAILABILITY OF THE
            SERVICES. WITHOUT LIMITING THE FOREGOING, NEITHER COMPANY NOR ANYONE
            ASSOCIATED WITH COMPANY REPRESENTS OR WARRANTS THAT THE SERVICES,
            THEIR CONTENT, OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE
            SERVICES WILL BE ACCURATE, RELIABLE, ERROR-FREE, OR UNINTERRUPTED,
            THAT DEFECTS WILL BE CORRECTED, THAT THE SERVICES OR THE SERVER THAT
            MAKES IT AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS
            OR THAT THE SERVICES OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE
            SERVICES WILL OTHERWISE MEET YOUR NEEDS OR EXPECTATIONS.
          </p>
          <p>&nbsp;</p>
          <p>
            COMPANY HEREBY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS
            OR IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING BUT NOT LIMITED TO
            ANY WARRANTIES OF MERCHANTABILITY, NON-INFRINGEMENT, AND FITNESS FOR
            PARTICULAR PURPOSE.
          </p>
          <p>&nbsp;</p>
          <p>
            THE FOREGOING DOES NOT AFFECT ANY WARRANTIES WHICH CANNOT BE
            EXCLUDED OR LIMITED UNDER APPLICABLE LAW.
          </p>
          <p>&nbsp;</p>
          <p>
            17.&nbsp;<strong>Limitation Of Liability</strong>
          </p>
          <p>
            EXCEPT AS PROHIBITED BY LAW, YOU WILL HOLD US AND OUR OFFICERS,
            DIRECTORS, EMPLOYEES, AND AGENTS HARMLESS FOR ANY INDIRECT,
            PUNITIVE, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGE, HOWEVER IT
            ARISES (INCLUDING ATTORNEYS’ FEES AND ALL RELATED COSTS AND EXPENSES
            OF LITIGATION AND ARBITRATION, OR AT TRIAL OR ON APPEAL, IF ANY,
            WHETHER OR NOT LITIGATION OR ARBITRATION IS INSTITUTED), WHETHER IN
            AN ACTION OF CONTRACT, NEGLIGENCE, OR OTHER TORTIOUS ACTION, OR
            ARISING OUT OF OR IN CONNECTION WITH THIS AGREEMENT, INCLUDING
            WITHOUT LIMITATION ANY CLAIM FOR PERSONAL INJURY OR PROPERTY DAMAGE,
            ARISING FROM THIS AGREEMENT AND ANY VIOLATION BY YOU OF ANY FEDERAL,
            STATE, OR LOCAL LAWS, STATUTES, RULES, OR REGULATIONS, EVEN IF
            COMPANY HAS BEEN PREVIOUSLY ADVISED OF THE POSSIBILITY OF SUCH
            DAMAGE. EXCEPT AS PROHIBITED BY LAW, IF THERE IS LIABILITY FOUND ON
            THE PART OF COMPANY, IT WILL BE LIMITED TO THE AMOUNT PAID FOR THE
            PRODUCTS AND/OR SERVICES, AND UNDER NO CIRCUMSTANCES WILL THERE BE
            CONSEQUENTIAL OR PUNITIVE DAMAGES.
          </p>
          <p>&nbsp;</p>
          <p>
            18.&nbsp;<strong>Termination</strong>
          </p>
          <p>
            We may terminate or suspend your account and bar access to Service
            immediately, without prior notice or liability, under our sole
            discretion, for any reason whatsoever and without limitation,
            including but not limited to a breach of Terms.
          </p>
          <p>&nbsp;</p>
          <p>
            If you wish to terminate your account, you may simply discontinue
            using Service.
          </p>
          <p>&nbsp;</p>
          <p>
            All provisions of Terms which by their nature should survive
            termination shall survive termination, including, without
            limitation, ownership provisions, warranty disclaimers, indemnity
            and limitations of liability.
          </p>
          <p>&nbsp;</p>
          <p>
            19.&nbsp;<strong>Governing Law</strong>
          </p>
          <p>
            These Terms shall be governed and construed in accordance with the
            laws ofPhilippines.
          </p>
          <p>
            Our failure to enforce any right or provision of these Terms will
            not be considered a waiver of those rights. If any provision of
            these Terms is held to be invalid or unenforceable by a court, the
            remaining provisions of these Terms will remain in effect. These
            Terms constitute the entire agreement between us regarding our
            Service and supersede and replace any prior agreements we might have
            had between us regarding Service.
          </p>
          <p>&nbsp;</p>
          <p>
            20.&nbsp;<strong>Changes To Service</strong>
          </p>
          <p>
            ServiceWe reserve the right to withdraw or amend our Service, and
            any service or material we provide via Service, in our sole
            discretion without notice. We will not be liable if for any reason
            all or any part of Service is unavailable at any time or for any
            period. From time to time, we may restrict access to some parts of
            Service, or the entire Service, to users, including registered
            users.
          </p>
          <p>&nbsp;</p>
          <p>
            21.&nbsp;<strong>Amendments To Terms</strong>
          </p>
          <p>
            We may amend Terms at any time by posting the amended terms on this
            site. It is your responsibility to review these Terms periodically.
          </p>
          <p>
            Your continued use of the Platform following the posting of revised
            Terms means that you accept and agree to the changes. You are
            expected to check this page frequently so you are aware of any
            changes, as they are binding on you.
          </p>
          <p>&nbsp;</p>
          <p>
            By continuing to access or use our Service after any revisions
            become effective, you agree to be bound by the revised terms. If you
            do not agree to the new terms, you are no longer authorized to use
            Service.
          </p>
          <p>&nbsp;</p>
          <p>
            22.&nbsp;<strong>Waiver And Severability</strong>
          </p>
          <p>
            No waiver by Company of any term or condition set forth in Terms
            shall be deemed a further or continuing waiver of such term or
            condition or a waiver of any other term or condition, and any
            failure of Company to assert a right or provision under Terms shall
            not constitute a waiver of such right or provision.
          </p>
          <p>&nbsp;</p>
          <p>
            If any provision of Terms is held by a court or other tribunal of
            competent jurisdiction to be invalid, illegal or unenforceable for
            any reason, such provision shall be eliminated or limited to the
            minimum extent such that the remaining provisions of Terms will
            continue in full force and effect.
          </p>
          <p>&nbsp;</p>
          <p>
            23.&nbsp;<strong>Acknowledgement</strong>
          </p>
          <p>
            BY USING SERVICE OR OTHER SERVICES PROVIDED BY US, YOU ACKNOWLEDGE
            THAT YOU HAVE READ THESE TERMS OF SERVICE AND AGREE TO BE BOUND BY
            THEM.
          </p>
          <p>&nbsp;</p>
          <p>
            24.&nbsp;<strong>Contact Us</strong>
          </p>
          <p>
            Please send your feedback, comments, requests for technical support
            by email:&nbsp;<strong>support@lodi.com.ph</strong>.
          </p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
        </Box>
        <button onClick={() => goToTop()} id="goto-top" title="Go to top">
          <ArrowUpIcon />
        </button>
      </Container>
    </Section>
  );
}

export default TermsAndConditions;
