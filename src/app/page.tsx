"use client";
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Map from '../app/components/index'
import { csv } from 'd3';
import {useEffect, useState} from 'react';
import { DataProvider } from "./DataContext"
import Table from './components/Table/Table';
import Chart from './components/Chart';
import styles from './Home.module.css'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <DataProvider>
      <div className={styles.container}>
    <div className={styles.mapcontainer}>
    <Map/>
    </div>
     <div>
       <Table/>
       <Chart/>
     </div>
    </div>
    </DataProvider>
  )
}
