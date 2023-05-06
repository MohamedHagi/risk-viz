"use client";

import { Inter } from 'next/font/google'
import Map from '../app/components/index'
import { DataProvider } from "./DataContext"
import useData from './DataContext'
import Menu from './components/Menu'
import Table from './components/Table/Table';
import Chart from './components/Chart';
import styles from './Home.module.css'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {




  return (
    <DataProvider>
    
      <div className={styles.container}>
        <Menu/>
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
