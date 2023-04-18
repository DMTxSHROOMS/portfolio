import React from 'react'
import { Link } from 'react-router-dom'
import './ContentStyles.css'
import '../assets/pod.jpg'
import Profile1 from '../assets/profile2.jpg'
import Profile2 from '../assets/profile1.jpg'

function Content() {
  return (
    <div>
      <div className='content'>
      

<div className='container'>
        <div className='left'>
        <h1>Welcome to My Portfolio Scouts!
        </h1>
        <p>
I am Divyesh Pawar, Web Developer and UI/UX professional with Sales Background Based in Toronto/Canada        </p>
<p>If you have a great project that needs some amazing skills than I am your guy</p>
<p>you can find about my professional summary and little bit of my personal life on this website</p>
<h2>Happy Scouting!!</h2> 
            </div>
        <div className='right'>
        <div className='img-container'>
                <div className='image-stack top'>
                    <img src={Profile1} className='img' alt='' />

                </div>
                <div className='image-stack bottom'>
                    <img src={Profile2} className='img' alt='' />
                </div>
            </div>
        </div>
        </div>
        <h1>propos de moi</h1>     
        <div class="about-container">
						<p>
							A dedicated, agile and passionate, Fullstack Developer and a Solutions Architect, with more than 5 years of hands-on experience in designing, developing, deploying and maintaining scalable enterprise applications.
						</p>
						
						<p>
							I run a small tech hub on the west coast of Toronto, from where I collaborate with clients remotely across the globe.
						</p>
						<p>
							I specialize in implementing complicated architectural patterns on cloud platforms such as Amazon Web Services, GCP/Firebase and Heroku.
						</p>
						<p>
							I work with Python, Git and Docker containers. All. Day. Long. Although I'm primarily using Python, I've established myself as a true polyglot, who follows Google's opinionated reference for building amazing web experiences.
						</p>
						<p>
							My appetite for exploring the evolving trends in the industry, has helped me to grow my toolbelt, which has a wide range of technologies including, but not limited to, Amazon Web Services, Elasticsearch, Tensorflow and Reactive frontend using Typescript, Lighthouse, Workbox.
						</p>									
						<p>
							I often contribute back to the community using various means. I train and mentor young engineers as well as post graduates in becoming industry ready. I've a growing reputation on GitHub and StackOverflow.
						</p>
						<p>
							Levelling up everyday with ☕ &amp; 🕒.	
						</p>	
					
						
					</div>  
        
        <div>
        </div>
        <div>

        </div>
        </div>
    </div>
  )
}

export default Content
