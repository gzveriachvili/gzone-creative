import React from 'react';
import './legal.scss';
import { Heading, Flex, Box } from '@chakra-ui/react';

function TermsOfService() {
  return (
    <div className='privacy-policy'>
      <Flex my='30px' flexDirection={'column'} align={'center'}>
        <Heading mt='50px'>Website Terms and Conditions of Use</Heading>
      </Flex>
      <Box as='div' className='privacy-policy-box' px='150px' mb='100px'>
        <p>
          1. Terms By accessing this Website, accessible from
          https://www.gzonecreative.com, you are agreeing to be bound by these
          Website Terms and Conditions of Use and agree that you are responsible
          for the agreement with any applicable local laws. If you disagree with
          any of these terms, you are prohibited from accessing this site. The
          materials contained in this Website are protected by copyright and
          trade mark law.
        </p>

        <p>
          2. Use License Permission is granted to temporarily download one copy
          of the materials on GZONE Creative's Website for personal,
          non-commercial transitory viewing only. This is the grant of a
          license, not a transfer of title, and under this license you may not:
        </p>

        <p>
          modify or copy the materials; use the materials for any commercial
          purpose or for any public display; attempt to reverse engineer any
          software contained on GZONE Creative's Website; remove any copyright
          or other proprietary notations from the materials; or transferring the
          materials to another person or &quot;mirror&quot; the materials on any
          other server. This will let GZONE Creative to terminate upon
          violations of any of these restrictions. Upon termination, your
          viewing right will also be terminated and you should destroy any
          downloaded materials in your possession whether it is printed or
          electronic format. These Terms of Service has been created with the
          help of the Terms Of Service Generator.
        </p>

        <p>
          3. Disclaimer All the materials on GZONE Creative&rsquo;s Website are
          provided &quot;as is&quot;. GZONE Creative makes no warranties, may it
          be expressed or implied, therefore negates all other warranties.
          Furthermore, GZONE Creative does not make any representations
          concerning the accuracy or reliability of the use of the materials on
          its Website or otherwise relating to such materials or any sites
          linked to this Website.
        </p>

        <p>
          4. Limitations GZONE Creative or its suppliers will not be hold
          accountable for any damages that will arise with the use or inability
          to use the materials on GZONE Creative&rsquo;s Website, even if GZONE
          Creative or an authorize representative of this Website has been
          notified, orally or written, of the possibility of such damage. Some
          jurisdiction does not allow limitations on implied warranties or
          limitations of liability for incidental damages, these limitations may
          not apply to you.
        </p>

        <p>
          5. Revisions and Errata The materials appearing on GZONE
          Creative&rsquo;s Website may include technical, typographical, or
          photographic errors. GZONE Creative will not promise that any of the
          materials in this Website are accurate, complete, or current. GZONE
          Creative may change the materials contained on its Website at any time
          without notice. GZONE Creative does not make any commitment to update
          the materials.
        </p>

        <p>
          6. Links GZONE Creative has not reviewed all of the sites linked to
          its Website and is not responsible for the contents of any such linked
          site. The presence of any link does not imply endorsement by GZONE
          Creative of the site. The use of any linked website is at the
          user&rsquo;s own risk.
        </p>

        <p>
          7. Site Terms of Use Modifications GZONE Creative may revise these
          Terms of Use for its Website at any time without prior notice. By
          using this Website, you are agreeing to be bound by the current
          version of these Terms and Conditions of Use.
        </p>

        <p>8. Your Privacy Please read our Privacy Policy.</p>

        <p>
          9. Governing Law Any claim related to GZONE Creative's Website shall
          be governed by the laws of dk without regards to its conflict of law
          provisions.
        </p>
      </Box>
    </div>
  );
}

export default TermsOfService;
