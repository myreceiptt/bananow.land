import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>MyReceipt: Initialization Page!</title>
        <link rel="icon" href="/1.47.png" />
        <link rel="apple-touch-icon" href="/1.47.png" />
        <link rel="shortcut icon" href="/1.47.png" />
        <meta
          name="description"
          content="The init page initializes and controls processes. Its primary role is to start processes based on records read from the MyReceipt files. MyReceipt files usually requests that the init command run the getty command for each line on which process can log in."
        />
        
      </Head>

      <main>
        <h1 className={styles.title}>
          <a href="https://www.straight-line.org" target="_blank">
            MyReceipt
          </a>{" "}
          <code>init</code> Page!
        </h1>

        <p className={styles.description}>
          Get started by editing <code>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a
            href="https://www.straight-line.org/"
            className={styles.card}
            target="_blank"
          >
            <h3>MyReceipt Home &rarr;</h3>
            <p>A home is all MyReceipt wanted to be, even a straight line.</p>
          </a>

          <a
            href="https://deeplinks.straight-line.org/"
            className={styles.card}
            target="_blank"
          >
            <h3>The Deep Links &rarr;</h3>
            <p>Does not facilitate the access to or use of the links.</p>
          </a>

          <a
            href="https://iqraa.straight-line.org/"
            className={styles.card}
            target="_blank"
          >
            <h3>The KING's NFTs &rarr;</h3>
            <p>Find all the information about The KING's NFTs project!</p>
          </a>

          <a
            href="https://wp.straight-line.org/"
            className={styles.card}
            target="_blank"
          >
            <h3>Working Progress &rarr;</h3>
            <p>
              It’s a working progress, it's not a work in progress.</p>
          </a>

          <a
            href="https://endhonesa.com/"
            className={styles.card}
            target="_blank"
          >
            <h3>Online Store &rarr;</h3>
            <p>Trade according to the resulting revenue and formed value.</p>
          </a>

          <a
            href="https://skateshop.id/"
            className={styles.card}
            target="_blank"
          >
            <h3>Skateboards Shop &rarr;</h3>
            <p>Will bring you all the best skateboarding goods.</p>
          </a>

          <a
            href="https://init.straight-line.org/"
            className={styles.card}
            target="_blank"
          >
            <h3>Initialization Page &rarr;</h3>
            <p>The init page initializes and controls processes.</p>
          </a>

          <a
            href="https://prompt.straight-line.org/"
            className={styles.card}
            target="_blank"
          >
            <h3>Console Prompts &rarr;</h3>
            <p>A window in which the text-mode programs are active.</p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://www.straight-line.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/1.47.svg" alt="Prof. NOTA v.1.47" className={styles.logo} />
          {" "}MyReceipt Rest in Proxy (R.I.P.) - 1983/2023{" "}
          <img src="/1.47.svg" alt="Prof. NOTA v.1.47" className={styles.logo} />
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
          margin-right: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Fira Code, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: Fira Code, monospace;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
