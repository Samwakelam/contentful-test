import { GetServerSidePropsContext } from 'next';

type IndexProps = {
  title: string;
  test: any;
};

const Index = ({ title, test }: IndexProps) => {
  console.log('test: ', test);

  return (
    <div>
      <h1>here at: {title}</h1>
    </div>
  );
};

export default Index;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
): Promise<{ props: IndexProps }> => {
  return {
    props: {
      title: 'Web - app',
      test: process.env.TEST,
    },
  };
};
