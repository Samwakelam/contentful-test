import { GetServerSidePropsContext } from 'next';
import { Entry } from 'contentful';
import { useState } from 'react';

import { WebApp, WebAppProps } from '@sam/library';
import { RegionCode, Regions, Widget } from '@sam/types';

import { getEntry, getLocales } from '../../lib';
import { parseEntry, renderWidgets } from '../../lib/parsers/parse-widgets';

type IndexProps = {
  entry: Entry<any>;
  regions: string[];
  defaultLocale: string | undefined;
};

const Index = ({ entry, regions, defaultLocale }: IndexProps) => {
  const widget: Widget = parseEntry(entry);
  const [selectedRegion, setSelectedRegion] = useState(defaultLocale);

  const webApp: Omit<WebAppProps, 'children'> = {
    regions: regions.map((region) => Regions[region as RegionCode]),
    dispatches: { selectedRegion: (x) => setSelectedRegion(x) },
  };

  return (
    <WebApp {...webApp}>
      <>
        {renderWidgets(
          widget,
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
  const entry = await getEntry('1wWZD3Yq061T5pnBNnzECU', {
    locale: '*',
    content_type: 'samTestModel',
  });

  const locales = await getLocales();
  const regions = locales.items.map((locale) => locale.code);
  const defaultLocale = locales.items.find((locale) => locale.default)?.code;

  return {
    props: {
      entry,
      regions,
      defaultLocale,
    },
  };
};
