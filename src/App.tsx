

import { CONTENT as content } from './assets/content';
import Panel from './components/Panel';
import Section from './components/Section';
import Header from './elements/Header';

const App = () => {
  return (
    <div className="app">
      <Header title={content.header.title} navigation={content.header.navigation} />
      <div className='container'>
        <div className='hero'>
          <h1>{content.hero.title}</h1>
          <p className='bodytext'>{content.hero.description}</p>
        </div>
        <div className='panels'>
          {content.hero.panels.map((panel, i) => {
            return (
              <Panel key={i} title={panel.title} description={panel.description} image={panel.image} />
            )
          })}
        </div>
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

        </div>
      </div>
      <footer></footer>
    </div>
  )
}

export default App
