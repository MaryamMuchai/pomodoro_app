import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import nav from "../components/nav";

export default function index() {
  return (
    <div className="bg-gray-800 min-h-screen font-inter">
      <div className="max-w-2xl min-h-screen mx-auto">

     <nav />  
     <timer />      

    </div>
    </div>

  );
}
