import '@styles/globals.css';

import Navbar from '@components/Navbar';
import Provider from '@components/Provider';
import Footer from '@components/Footer';

export const metadata = {
  title: 'PromptLab',
  description: 'Discover & Share AI Prompts ',
  author: 'Ammar',
}
const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <Provider>
          <div className='main'>
            <div className='gradient'></div>
          </div>
          <main className='app'>
            <Navbar />
            {children}
            <Footer/>
          </main>
        </Provider>
      </body>
    </html>
  )
}

export default RootLayout