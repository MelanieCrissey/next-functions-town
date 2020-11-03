import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Functions Town</title>
        <link rel="icon" href="/favicon.ico" />
    <!-- Dashly BEGIN -->
<script type="text/javascript">
!function(){function t(t,e){return function(){window.dashlyasync.push(t,arguments)}}if("undefined"==typeof dashly){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="//cdn.dashly.app/api.min.js",document.getElementsByTagName("head")[0].appendChild(e),window.dashly={},window.dashlyasync=[],dashly.settings={};for(var n=["connect","track","identify","auth","oth","onReady","addCallback","removeCallback","trackMessageInteraction"],a=0;a<n.length;a++)dashly[n[a]]=t(n[a])}}(),dashly.connect("3292-532aa082fc243471565f69ce8a4");
</script>
<!-- Dashly END -->
      </Head>

      <main>
        <Header title="Functions Town" />
        <p className="description">
          A funky little demo site for Netlify Functions
        </p>
        <div>
          <a href="/.netlify/functions/move">
            Let's move
          </a>
        </div>
      </main>
      <Footer />

      <style jsx>{`
        .container {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-family: Menlo, Monaco, Lucida Console, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
            Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>

  )
}
