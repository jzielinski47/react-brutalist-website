

import { CONTENT as content } from './assets/content';
import Panel from './components/Panel';

const App = () => {
  return (
    <div className="app">
      <header>
        <h2>{content.header.title}</h2>
        <nav>
          {content.header.navigation.map((nav: { title: string }, i: number) => (
            <li key={i}>
              <h2>{nav.title}</h2>
            </li>
          ))}
        </nav>
      </header>
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
