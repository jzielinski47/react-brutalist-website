import { motion } from 'framer-motion';

import { CONTENT as content } from './assets/content';
import Panel from './components/Panel';
import Section from './components/Section';
import Header from './elements/Header';

const App = () => {
  return (
    <div className="app">
      <Header title={content.header.title} navigation={content.header.navigation} />
      <div className='container'>
        <motion.div animate={{ y: 0 }} initial={{ y: -200 }} transition={{ delay: 0.1 }} className='hero'>
          <h1>{content.hero.title}</h1>
          <p className='bodytext'>{content.hero.description}</p>
        </motion.div>
        <motion.div className='panels' animate={{ y: 0 }} initial={{ y: 200 }} transition={{ delay: 1 }} >
          {content.hero.panels.map((panel, i) => {
            return (
              <Panel key={i} title={panel.title} description={panel.description} image={panel.image} />
            )
          })}
        </motion.div>
        <hr />
        <div className='sections'>
          {content.sections.map((section, i) => {
            return (
              <Section key={i} title={section.title} description={section.description} image={section.image} index={i} />
            )
          })}
        </div>
        <hr />
        <div className='examples'>
          <h1>examples</h1>
          {content.examples.map((exm, i) => {
            return (
              <Section key={i} title={exm.title} description={exm.description} image={exm.image} index={i} />
            )
          })}
        </div>
      </div>
      <footer>
        <h2>{content.footer.content}</h2>
      </footer>
    </div>
  )
}

export default App
