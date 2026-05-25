import { useState } from 'react'
import myPhoto from './assets/self-photo.jpg'
import championsImage from './assets/lol-champions.jpg'
import runeterraMap from './assets/runeterra-map.jpg'
import igSkins from './assets/ig-world-skins.jpg'
import lolIcon from './assets/lol-icon.png'
import './App.css'

function App() {

  const [page, setPage] = useState('home')

  const [interests, setInterests] = useState([
    'Pure Mathematics',
    'Game Design',
    'Play LOL',
    'Watch NBA',
    'Tutoring Math'
  ])

  const [ascending, setAscending] = useState(true)

  const sortList = () => {
    const sorted = [...interests].sort((a, b) =>
      ascending ? b.localeCompare(a) : a.localeCompare(b)
    )

    setInterests(sorted)
    setAscending(!ascending)
  }

  const readingSections = [
    {
      title: 'Accessibility and Web Experiences',
      description:
        'I am interested in learning how to make my website easier to use for everyone, including people who use keyboards, screen readers, or other accessibility tools.',
      links: [
        ['WebAIM Keyboard Accessibility', 'https://webaim.org/techniques/keyboard/'],
        ['W3C Keyboard Shortcuts', 'https://www.w3schools.com/tags/ref_keyboardshortcuts.asp'],
        ['MDN Accessibility Guide', 'https://developer.mozilla.org/en-US/docs/Web/Accessibility'],
        ['Nielsen Norman Group UX Articles', 'https://www.nngroup.com/articles/']
      ]
    },
    {
      title: 'Sports Interests',
      description:
        'I enjoy following and learning about sports such as basketball, badminton, and table tennis because they are exciting and require both skill and strategy.',
      links: [
        ['NBA Official Website', 'https://www.nba.com/'],
        ['BWF Badminton', 'https://bwfbadminton.com/'],
        ['World Table Tennis', 'https://worldtabletennis.com/']
      ]
    },
    {
      title: 'Mathematics Interests',
      description:
        'I am interested in mathematics because I have experience as a grader and tutor, especially in calculus, and I enjoy solving complex modeling problems.',
      links: [
        ['Khan Academy Calculus', 'https://www.khanacademy.org/math/calculus-1'],
        ['MIT OpenCourseWare Mathematics', 'https://ocw.mit.edu/search/?d=Mathematics'],
        ['Desmos Graphing Calculator', 'https://www.desmos.com/calculator']
      ]
    }
  ]

  return (
    <>
      <nav className="navbar">
        <button onClick={() => setPage('home')}>Home</button>
        <button onClick={() => setPage('read')}>Things to Read</button>
        <button onClick={() => setPage('league')}>League of Legends</button>
      </nav>

      <div className={page === 'league' ? 'league-page' : 'page'}>

        {page === 'home' && (
          <>
            <h1>Welcome to My Website!</h1>

            <p className="welcome-text">
              Hello! My name is Zhixuan Hu, and this is my React website for CSS 480.
            </p>

            <div className="about-section">
              <img src={myPhoto} className="profile-image" alt="Profile" />

              <div className="about-text">
                <h2>Who I Am</h2>
                <p>
                  I am a student at the University of Washington Bothell
                  majoring in Computer Science & Software Engineering and
                  Mathematics.
                </p>
                <p>
                  I enjoy building user-friendly applications, solving
                  mathematics problems, and helping students through tutoring
                  and teaching assistant work.
                </p>
              </div>
            </div>

            <div className="interests-section">
              <h2>My Interests</h2>
              <button onClick={sortList}>Re-order List</button>
              <ul>
                {interests.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <footer className="keyboard-footer">
              <p>
                Keyboard Access:
                Press <strong>Tab</strong> to move forward,
                <strong> Shift + Tab</strong> to move backward,
                and <strong>Enter</strong> to activate buttons or open links.
              </p>
              <p>
                I focused on making navigation clear, visible,
                and consistent for users who rely on keyboard navigation.
              </p>
            </footer>
          </>
        )}

        {page === 'read' && (
          <div className="read-section">
            <h1>Things to Read</h1>
            <p className="welcome-text">
              These links are separated into three areas I am interested in:
              web accessibility, sports, and mathematics.
            </p>

            {readingSections.map((section, index) => (
              <section className="reading-category" key={index}>
                <h2>{section.title}</h2>
                <p>{section.description}</p>
                <ul className="reading-list">
                  {section.links.map(([title, url], linkIndex) => (
                    <li key={linkIndex}>
                      <a href={url} target="_blank" rel="noreferrer">
                        {title}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            ))}

            <footer className="keyboard-footer">
              <p>
                Keyboard Access:
                Press <strong>Tab</strong> to move forward,
                <strong> Shift + Tab</strong> to move backward,
                and <strong>Enter</strong> to activate buttons or open links.
              </p>
              <p>
                I focused on making navigation clear, visible,
                and consistent for users who rely on keyboard navigation.
              </p>
            </footer>
          </div>
        )}

        {page === 'league' && (
          <main className="league-content">
            <section className="league-hero">
              <img
                src={lolIcon}
                alt="League of Legends icon"
                className="league-title-icon"
              />

              <p className="league-kicker">PC MOBA GAME</p>

              <h1>League of Legends</h1>

              <p className="league-hero-text">
                League of Legends, also called LOL, is a multiplayer online battle arena (MOBA) genre video game developed by Riot Games.
                Players choose champions, work with teammates, fight for objectives,
                and try to destroy the enemy Nexus.
              </p>

              <a
                className="league-main-link"
                href="https://wiki.leagueoflegends.com/en-us/"
                target="_blank"
                rel="noreferrer"
              >
                Visit the League of Legends Wiki
              </a>
            </section>

            <section className="league-card featured-card">
              <div>
                <h2>Why I Am Interested in League of Legends</h2>
                <p>
                  I started playing League of Legends from the beginning of high school.
                  Before that, I was already a MOBA fan on mobile, so I wanted to try a
                  similar competitive experience on my laptop.
                </p>
                <p>
                  I enjoy playing with my friends because every match has different forms
                  of interaction. We can invade the enemy jungle, gank lanes, fight in team
                  fights, or test our skill in a solo fight. Compared with mobile MOBA games,
                  LOL feels deeper and more exciting to me because the various champion mechanics are more detailed and interested.
                </p>
              </div>
            </section>

            <section className="league-card image-right-card">
              <div>
                <h2>The Background: Runeterra</h2>
                <p>
                  League of Legends takes place in Runeterra, a fantasy world filled with
                  different regions, cultures, conflicts, and champions. Each region has its
                  own identity, such as Demacia, Noxus, Ionia, Freljord, Shurima, Piltover,
                  Zaun, Bilgewater, Targon, Ixtal, and the Shadow Isles.
                </p>
                <p>
                  The world background makes the game feel bigger than only one match.
                  Champions have their own stories, so players can
                  learn about the game through both gameplay and lore.
                </p>
                <a href="https://map.leagueoflegends.com/en_US" target="_blank" rel="noreferrer">
                  Explore the official Runeterra map
                </a>
              </div>
              <img src={runeterraMap} alt="Map of Runeterra from League of Legends" />
            </section>

            <section className="league-card image-left-card">
              <img src={championsImage} alt="Many playable League of Legends champions" />
              <div>
                <h2>Playable Champions</h2>
                <p>
                  One reason League of Legends is interesting is the huge champion roster.
                  There are currently about 172 playable champions, and each champion has
                  different skills, roles, designs, and playstyles. SUPER SUPER HUGE!
                </p>
                <p>
                  This variety lets players find a character that fits them. Some players
                  like assassins, some like tanks, some like mages, and some like supporting
                  teammates. This makes every match feel alive and cooperable.
                </p>
                <a href="https://universe.leagueoflegends.com/en_US/champions/" target="_blank" rel="noreferrer">
                  Browse League champions
                </a>
              </div>
            </section>

            <section className="league-card">
              <h2>League of Legends Community</h2>
              <p>
                The League community is also a big part of why the game stays popular.
                Players share recent update news, champion guides, patch discussions, esports reactions,
                gameplay clips, and etc. There is the link below, please check it out if you are a newbie or interesting about this game.
              </p>
              <a href="https://www.leagueoflegends.com/en-us/news/community/" target="_blank" rel="noreferrer">
                Read community news
              </a>
            </section>

            <section className="league-card image-right-card esports-card">
              <div>
                <h2>LOL Esports and IG</h2>
                <p>
                  League of Legends esports is one of my favorite parts of the game. My
                  favorite esports team is IG. In 2018, IG won the World Championship when
                  many people did not expect them to win. That moment was crazy because IG
                  became the first LPL team to win Worlds.
                </p>
                <p>
                  Their victory made the 2018 World Championship unforgettable for many LPL
                  fans, and the IG World Champion skins became a memory of that year.
                </p>
                <a href="https://youtu.be/SdidA-9GvgE?si=A-l64y_8OFHWXx8p" target="_blank" rel="noreferrer">
                  Watch FNC vs IG Final Highlights
                </a>
              </div>
              <img src={igSkins} alt="IG World Championship skins in League of Legends" />
            </section>

            <section className="league-card aram-card">
              <h2>My Favorite Gameplay: ARAM</h2>
              <p>
                My favorite game mode is ARAM. I like it because all players fight on one
                lane, so the action starts quickly. You can throw skills at enemies, dodge
                attacks, and look for chances to win team fights.
              </p>
              <p>
                In ARAM, it feels like you either kill the enemy or you die trying. You
                cannot retreat to the fountain to buy items whenever you want, so every
                fight feels more intense and direct.
              </p>
              <a href="https://wiki.leagueoflegends.com/en-us/ARAM" target="_blank" rel="noreferrer">
                Learn more about ARAM
              </a>
            </section>
          </main>
        )}
      </div>
    </>
  )
}

export default App