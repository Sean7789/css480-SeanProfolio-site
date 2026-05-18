import { useState } from 'react'
import myPhoto from './assets/self-photo.jpg'
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

        <button onClick={() => setPage('home')}>
          Home
        </button>

        <button onClick={() => setPage('read')}>
          Things to Read
        </button>

      </nav>

      <div className="page">

        {page === 'home' && (
          <>
            <h1>Welcome to My Website!</h1>

            <p className="welcome-text">
              Hello! My name is Zhixuan Hu, and this is my React website for CSS 480.
            </p>

            <div className="about-section">

              <img
                src={myPhoto}
                className="profile-image"
                alt="Profile"
              />

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

              <button onClick={sortList}>
                Re-order List
              </button>

              <ul>
                {interests.map((item, index) => (
                  <li key={index}>
                    {item}
                  </li>
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

              <section
                className="reading-category"
                key={index}
              >

                <h2>{section.title}</h2>

                <p>{section.description}</p>

                <ul className="reading-list">

                  {section.links.map(([title, url], linkIndex) => (

                    <li key={linkIndex}>

                      <a
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                      >
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

      </div>
    </>
  )
}

export default App