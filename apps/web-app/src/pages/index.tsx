import { GetServerSidePropsContext } from 'next';
import { useState } from 'react';

import { WebApp, WebAppProps, renderWidgets } from '@sam/library';
import { RegionCode, Regions } from '@sam/types';

import { getEntries, getLocales } from '../../lib';

type IndexProps = {
  widgets: any[];
  regions: string[];
  defaultLocale: string | undefined;
};

const Index = ({ widgets, regions, defaultLocale }: IndexProps) => {
  const [selectedRegion, setSelectedRegion] = useState(defaultLocale);

  const webApp: Omit<WebAppProps, 'children'> = {
    regions: regions.map((region) => Regions[region as RegionCode]),
    dispatches: { selectedRegion: (x) => setSelectedRegion(x) },
  };

  return (
    <WebApp {...webApp}>
      <>
        {renderWidgets(
          widgets,
          selectedRegion as RegionCode,
          defaultLocale as RegionCode
        )}
      </>
    </WebApp>
  );
};

export default Index;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
): Promise<{ props: IndexProps }> => {
  const entries = await getEntries({
    locale: '*',
    content_type: 'samTestModel',
  });

  const widgets = [...entries.items];

  const locales = await getLocales();
  const regions = locales.items.map((locale) => locale.code);
  const defaultLocale = locales.items.find((locale) => locale.default)?.code;

  return {
    props: {
      widgets,
      regions,
      defaultLocale,
    },
  };
};
