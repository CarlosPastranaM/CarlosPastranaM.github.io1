import './index.scss'
import AnimatedLetters from '../AminatedLetters'
import Loader from 'react-loaders'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <p>
                    I'm still building my skills as a developer, learning new technologies and 
                    surpassing my limits day by day, I like to learn a little bit of everything, 
                    As I've always said, I never stop learning as a programmer.
                </p>
                <p>
                    I'm searching to improve my knowledge in Business Intelligence, Data 
                    Analysis with Pandas, Descriptive Statistics, Machine Learning, Neural Networks, etc. 
                    As I mentioned, I'm interested in Data's area and I think that's I'm going to focus on.
                </p>
                <p>
                    I'm in the last section of my degree (Licenciatura en Informática - UNAM), 
                    but I've never stopped learning, I'm still studying from videos, articles 
                    and schools (Udemy, Platzi). Equally, I'm still improving my English language skills 
                    (speaking, listening, reading, writing).
                    Programming is such a huge world. 🖥️
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>
                </div>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default About