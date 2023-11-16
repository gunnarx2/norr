import { GetServerSideProps } from 'next';

export default () => null;

export const getServerSideProps: GetServerSideProps = async () => ({
  redirect: {
    permanent: true,
    destination: '/get-started/overview',
  },
});
