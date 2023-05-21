import Feed from '@components/Feed'
import { Analytics } from '@vercel/analytics/react';

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">Discover & Share
        <br className="max-md:hidden" />
        <span className="blue_gradient text-center"> AI-Powered Prompts</span></h1>
      <p className="desc text-center">PromptLab is an open-source AI Prompting tool for modern world to discover, create and share creative prompts.</p>

      <Feed />
      <Analytics/>
    </section>
  )
}

export default Home