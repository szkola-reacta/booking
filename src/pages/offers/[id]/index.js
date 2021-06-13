import { useRouter } from 'next/router';

function Offer() {
  const router = useRouter();
  // console.log(router);
  const { id } = router.query;
  return (
    <div>
      <h1>Offer!</h1>
      <p>Offer id: {id}</p>
    </div>
  );
}

export default Offer;