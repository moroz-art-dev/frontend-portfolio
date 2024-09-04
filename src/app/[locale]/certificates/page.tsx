'use client';
import Expertise from '@components/sections/Certificates';
import withCertificates from '@containers/CertificatesContainer';
import {useMetaData} from '@hooks/useMetaData';

const CertificatesWithData = withCertificates(Expertise);

function CertificatesPage() {
  useMetaData('Certificates');
  return <CertificatesWithData />;
}

export default CertificatesPage;
