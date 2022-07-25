import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Layout from '../../components/Layout';

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <h1 className='font-chakra'>Home Page</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </Layout>
    </>
  );
};

export default Home;
