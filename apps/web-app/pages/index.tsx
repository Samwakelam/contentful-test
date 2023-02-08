import { GetServerSidePropsContext } from 'next';
import {
  getContentModel,
  getContentType,
  getEntries,
  getEntry,
  getLocales,
} from '../lib';

type IndexProps = {
  title: string;
  test: any;
  entry: any;
  locales: any;
  localisedEntry: any;
};

const Index = ({ title, test, entry, locales, localisedEntry }: IndexProps) => {
  console.log('entry: ', entry);
  console.log('test: ', test);
  console.log('locales: ', locales);
  console.log('localisedEntry: ', localisedEntry);

  return (
    <div>
      <h1>here at: {title}</h1>
      <p>{entry.fields.description}</p>
    </div>
  );
};

export default Index;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
): Promise<{ props: IndexProps }> => {
  const entry = await getEntry('1wWZD3Yq061T5pnBNnzECU');
  const locales = await getLocales();
  const localisedEntry = await getEntries({
    locale: 'en-GB',
    content_type: 'samTestModel',
  });

  return {
    props: {
      title: 'Web - app',
      test: process.env.TEST,
      entry,
      locales,
      localisedEntry,
    },
  };
};
