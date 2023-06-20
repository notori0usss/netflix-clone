import { NextPageContext } from 'next';
import { getSession } from 'next-auth/react';
import useCurrentUser from '../hooks/useCurrentUser';
import { useRouter } from 'next/router';
import Image from 'next/image';
export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}
const Profiles = () => {
  const router = useRouter();
  const { data: user } = useCurrentUser();
  return (
    <div className="w-full h-full flex flex-col text-white justify-center items-center gap-8">
      <h2 className="text-5xl font-semibold">Who is watching?</h2>
      <div
        role="button"
        onClick={() => router.push('/')}
        className="flex flex-col gap-2 justify-center items-center group cursor-pointer"
      >
        <div className="w-40 h-40 relative">
          <Image
            fill
            className="object-cover group-hover:border-white border-2 border-black duration-200"
            src="/images/default-red.png"
            alt=""
          />
        </div>
        <p className="text-gray-300 group-hover:text-white">{user?.name}</p>
      </div>
    </div>
  );
};
export default Profiles;
