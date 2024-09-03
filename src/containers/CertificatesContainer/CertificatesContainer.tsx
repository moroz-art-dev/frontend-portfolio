import React from 'react';

import Loader from '@components/common/Loader';
import {useApiData} from '@hooks/useApiData';

import {CertificateApiResponse} from '@/types/certificate';

export const withCertificates = <P extends CertificateApiResponse>(
  WrappedComponent: React.ComponentType<P>
) => {
  const WithCertificates: React.FC<
    Omit<P, keyof CertificateApiResponse>
  > = props => {
    const {data, loading, error} =
      useApiData<CertificateApiResponse>('/api/certificates');

    if (loading) return <Loader text='Loading certificates...' />;
    if (error) return <div>Error: {error}</div>;
    if (!data || data.list.length === 0)
      return <div>No certificates available</div>;

    return (
      <WrappedComponent {...(props as P)} list={data.list} title={data.title} />
    );
  };

  return WithCertificates;
};

export default withCertificates;
