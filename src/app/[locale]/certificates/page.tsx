'use client';

import Expertise from '@components/sections/Certificates';
import withCertificates from '@containers/CertificatesContainer';

const CertificatesWithData = withCertificates(Expertise);

function CertificatesPage() {
  return <CertificatesWithData />;
}

export default CertificatesPage;
