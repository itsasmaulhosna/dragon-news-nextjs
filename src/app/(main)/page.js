import { redirect } from 'next/navigation';
const dafault_category_id = '01';
const Home = async () => {
  redirect(`/category/${dafault_category_id}`);
};
export default Home;
