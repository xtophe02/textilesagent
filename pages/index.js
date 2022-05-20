import Head from 'next/head'

import styles from '../styles/Home.module.css'

function getNumberOfDays(start, end) {
  const date1 = new Date(start);
  const date2 = new Date(end);

  // One day in milliseconds
  const oneDay = 1000 * 60 * 60 * 24;

  // Calculating the time difference between two dates
  const diffInTime = date2.getTime() - date1.getTime();

  // Calculating the no. of days between two dates
  const diffInDays = Math.round(diffInTime / oneDay);

  return diffInDays;
}

export default function Home() {
  return (
    <div className={styles.backgroundImage}>
      <Head>
        <title >Agent Textile</title>
        <meta name="description" content="Textile agent" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main} >
    
        <h1 className={styles.title}>
          Our website is under construction
        </h1>

        <p className={styles.description}>
          <span style={{color:'#F5FFFA'}}>We will be live in: {getNumberOfDays("2022-05-20", "2022-07-20")} days</span>
           
         
        </p>
<p style={{color:'#F5FFFA', fontStyle:'italic' }}>
  for further contact, please to send an email to <a href='mailto: sonia@textileagent.com' style={{fontWeight:'bold'}}>sonia@textileagent.com</a>
</p>
   
      </main>


    </div>
  )
}
