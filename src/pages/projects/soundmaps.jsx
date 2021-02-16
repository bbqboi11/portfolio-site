import * as React from 'react';

import { Header } from '../../components/header';
import { Video } from '../../components/video';
import { ImageGallery } from '../../components/imageGallery';
import { TableOfContents } from '../../components/tableOfContents';
import { Carousel } from '../../components/carousel';

import Sketchnotes1 from '../../images/sketchnotes-01.png';
import Sketchnotes2 from '../../images/sketchnotes-02.png';
import Sketchnotes3 from '../../images/sketchnotes-03.png';
import Sketchnotes4 from '../../images/sketchnotes-04.png';
import Sketchnotes5 from '../../images/sketchnotes-05.png';
import Persona1 from '../../images/persona-01.png';
import Persona2 from '../../images/persona-02.png';
import Persona3 from '../../images/persona-03.png';
import Wireframe1 from '../../images/wireframe-01.png';
import Wireframe2 from '../../images/wireframe-02.png';
import Wireframe3 from '../../images/wireframe-03.png';
import Wireframe4 from '../../images/wireframe-04.png';
import Wireflow from '../../images/wireflow.png';
import Mural from '../../images/mural.png';
import SoundmapsIntro from '../../video/soundmaps_intro.mp4';
import SoundmapsV1Loop from '../../video/soundmaps_v1_loop.mp4';
import FinalDesigns1 from '../../video/continue_first_tooltip.mp4';
import FinalDesigns2 from '../../video/soundsearch_pin.mp4';
import FinalDesigns3 from '../../video/create_account.mp4';
import FinalDesigns4 from '../../video/pic_follow.mp4';
import FinalDesigns5 from '../../video/deleted_data.mp4';

import './soundmaps.scss';

export default () => {
  return (
    <main className="main">
      <Header />
      <TableOfContents elementName="h3" />
      <div className="content soundmaps divided">
        <h2>SoundMaps</h2>
        <div className="project-header">
          <div className="video-container video-tall">
            <Video src={SoundmapsIntro} style={{ height: '600px' }} loop autoPlay controls={false} />
          </div>
        </div>

        <section class="banner style1 orient-left content-align-left image-position-right fullscreen onload-image-fade-in onload-content-fade-right">
          <div class="content">
            <h1>Story</h1>
            <p class="major">A (modular, highly tweakable) responsive one-page template designed by <a href="https://html5up.net">HTML5 UP</a> and released for free under the <a href="https://html5up.net/license">Creative Commons</a>.</p>
            <ul class="actions stacked">
              <li><a href="#first" class="button big wide smooth-scroll-middle">Get Started</a></li>
            </ul>
          </div>
          <div class="image">
            <img src="images/banner.jpg" alt="" />
          </div>
        </section>

        <section className="column">
          <h3 id="overview">Overview</h3>
          <div className="column-1">
            <p>
              Design an app that modifies people’s behavior.
              </p>
            <ul>
              <li>Create a prototype that communicates the features of this app through motion and interaction.</li>
              <li>Illustrate three stages of the app (Monetization, First time user experience, Deleting data/ data management)</li>
              <li>explain how it aims to change the behavior towards that purpose and how it functions at each stage.</li>
            </ul>

            <h4>Timeline</h4>
            <p>October-December (8 Weeks)</p>
            <h4>Skills + Tools</h4>
            <p>Adobe XD, Adobe Premier, Mural, Sketchnote, Primary/ Secondary Research</p>
          </div>
          <div className="column-2">
            <h4 style={{ color: '#F09236' }}>SoundMaps First Iteration</h4>
            <div className="video-container">
              <Video url="https://player.vimeo.com/video/468745453" title="SoundMaps First Iteration" width="600px" height="340px" />
            </div>

            <h4 style={{ color: '#E87B69' }}>SoundMaps Second Iteration</h4>
            <div className="video-container">
              <Video url="https://player.vimeo.com/video/478636595" title="SoundMaps Second Iteration" width="600px" height="340px" />
            </div>
          </div>
        </section>





        <article>
          <h3 id="problem">Problem</h3>
          <p>
            What would happen if we combined the technology of music discovery apps and the power of location based tagging to create a new experience for people who love listening and finding new music?
          </p>
          <ul>
            <li>How can people be encouraged to adopt this brand new behavior of sound searching a song and tagging it with a location?</li>
            <li>What are the ethical ramifications of influencing this behavior and what methods are used?</li>
            <li>Who would use this app and when?</li>
          </ul>
        </article>

        <article>
          <h3 id="research">Research</h3>
          <div className="color-block wide">
            <p>
              To further validate the context of SoundMaps and Its purpose I went out and found some scientific studies that show feasibility with SoundMaps.
          </p>
            <p>
              People are capable of associating memories with music! According to a study done at UC Davis a certain part of your brain that handles memories and emotion also processes music. Combining sound, with memory, and emotion can lead to stronger more memorable memories. 1
          </p>
            <p>
              There is also a qualitative study that proved the fusion of social applications and music will increase the engagement from users with their own music as well as help establish stronger emotional connections with what they listen to. 2
          </p>
            <p>
              Taking into consideration the sound discovery apps already out there, I found that an app like shazam had 120million active users in 2016, and with 7 in 10 of their user base ranging from 16-24, I feel this is an appropriate demographic for SoundMaps as well.3
          </p>
            <ol>
              <li><a href="https://www.ucdavis.edu/news/study-finds-brain-hub-links-music-memory-and-emotion">https://www.ucdavis.edu/news/study-finds-brain-hub-links-music-memory-and-emotion</a></li>
              <li><a href="https://www.researchgate.net/publication/260349596_Quantitative_Study_of_Music_Listening_Behavior_in_a_Social_and_Affective_Context">https://www.researchgate.net/publication/260349596_Quantitative_Study_of_Music_Listening_Behavior_in_a_Social_and_Affective_Context</a></li>
              <li><a href="https://blog.prototypr.io/how-shazams-ux-has-changed-7edfde0f31b5">https://blog.prototypr.io/how-shazams-ux-has-changed-7edfde0f31b5</a></li>
            </ol>
          </div>

        </article>
        <article>
          <h3 id="process">Process</h3>
          <p>
            I began this project by trying to understand some background information around human behaviors and nudging.  I’ve included a few note-worthy sketchnotes, that provide the basis of my thinking throughout this project. My readings centered around the ethics of nudges and designing around behaviors as well as addressing some micro-interaction basics.
          </p>
          <h4>Sketchnotes</h4>
          <div className="color-block">
            <Carousel className="sketchnotes wide">
              <img src={Sketchnotes1} alt="Sketchnotes 1" />
              <img src={Sketchnotes2} alt="Sketchnotes 2" />
              <img src={Sketchnotes3} alt="Sketchnotes 3" />
              <img src={Sketchnotes4} alt="Sketchnotes 4" />
              <img src={Sketchnotes5} alt="Sketchnotes 5" />
            </Carousel>
          </div>

          <h4>Early Concepts</h4>
          <div className="color-block">
            <h5>SoundMaps through various stages:</h5>
            <p>
              In writing these ideas down I am planting the seed for what soundmaps will be, what it will stand for, and how it will come off to those who choose to download it.
          </p>
            <p>
              <strong>Discovery:</strong> Word of mouth, instagram ads, paper ads posted around cities/ stickers.
          </p>
            <p>
              <strong>Download:</strong> app stores
          </p>
            <p>
              <strong>FTUE:</strong> onboarding/ step-by-step guide to explain controls+features
          </p>
            <p>
              <strong>Light Use:</strong> Little data = less drops/ no search history
          </p>
            <p>
              <strong>Heavy Use:</strong> Lots of data = playlists, lots of pinned songs, points?
          </p>
            <p>
              <strong>Monetization:</strong> mini-ads, (paid app to clear ads?), B2B with Spotify
          </p>
            <p>
              <strong>Error State:</strong> Kind message wiith error, refresh button, “sorry for the inconvenience”
          </p>
            <p>
              <strong>Offboardng:</strong> “delete account” under settings, delete data, include message for what deleting means (user deletes account and any searches or saves are gone)
          </p>
            <p>
              I plan to use these stages as a starting point for designing my app.
          </p>
          </div>

          <h4>Personas</h4>
          <p>
            In order to concentrate my audience I focused on 3 key-personas. David, Alex, and Bill are all interested in music and like finding new songs and artists to listen to. David our lightest user has a focus need in sound searching songs and saving them to his playlsits. Alex, our medium-teir persona, loves sound searching and being social online and at clubs. Finally Bill our “influencer” level-persona needs interesting ways to be involved with music and his fans.
          </p>
          <ImageGallery className="personas wide">
            <img src={Persona1} alt="Persona 1" />
            <img src={Persona2} alt="Persona 2" />
            <img src={Persona3} alt="Persona 3" />
          </ImageGallery>
          <p>
            I felt these users allowed me to design aspects of my app that would cator to music enthusiets as well as address a social element to the SoundMaps experience.
          </p>

          <h4>Wireframes</h4>
          <p>
            These early wireframe sketches focused on First time user experience, Monetization, and use wiith lots of data. The latter was especially helpful so I could better invision how the app would be used. Seeing an idea for the possibilities of this app provided me enough mental space to pay close attention to potential behaviors I want to highlight or avoid when I get to prototyping higher fidelity wirerfames.
          </p>
          <ImageGallery direction="vertical" className="wireframes wide">
            <img src={Wireframe1} alt="Wireframe 1" />
            <img src={Wireframe2} alt="Wireframe 2" />
            <img src={Wireframe3} alt="Wireframe 3" />
            <img src={Wireframe4} alt="Wireframe 4" />
          </ImageGallery>

          <h4>Wireflow</h4>
          <p>
            Moving forward in the designing process my hand-sketched wireframes are translated into higher-fidelity digital wireframes and arranged in a wireflow so that I can identify how these screens will work together and the touchpoints + micro interactions to better clarify the functionality of the app.
          </p>
          <ImageGallery direction="vertical" className="wireflow wide">
            <img src={Wireflow} alt="Wireflow" />
          </ImageGallery>

          <h4>Microinteraction Prototype</h4>
          <div className="video-container">
            <Video src={SoundmapsV1Loop} title="Microinteraction Prototype" style={{ height: '600px' }} autoPlay />
          </div>
          <p>
            Once I had established a set of micro-interactions for SoundMaps I was able to rework the entire brand. I hadn’t really gotten to design SoundMaps fully at this point. I worked from various examples of sound discovery apps that were already in the market. Moving forward with this app the functionality of SoundMaps will remain the same while the graphic interface will receive a much needed update.
          </p>

        </article>
        <article>
          <h3 id="final-designs">Final Designs</h3>
          <div className="gradient-block wide">
            <div className="side-by-side">
              <div>
                <div className="color-block">
                  <p>
                    In terms of visuals, SoundMaps took a  turn for the better and established it’s own identity. I chose a new color that wasn’t being used by another sound searching app. The functionality is the same but now with tool-tips! So even new users can quickly learn how SoundMaps works.
                  </p>
                </div>
              </div>
              <div className="video-container video-tall">
                <Video src={FinalDesigns1} style={{ height: '600px' }} loop autoPlay controls={false} />
              </div>
            </div>
            <div className="side-by-side">
              <div className="video-container video-tall">
                <Video src={FinalDesigns2} style={{ height: '600px' }} loop autoPlay controls={false} />
              </div>
              <div>
                <div className="color-block">
                  <p>
                    This is how anyone using SoundMaps would sound search and pin a song. This is the most important feature for SoundMaps and must be easy to do over and over again. When prototyping I found it was most important to focus on the search+pin function rather than every small action that can be taken on this screen.
                  </p>
                </div>
              </div>
            </div>
            <div className="side-by-side">
              <div>
                <div className="color-block">
                  <p>
                    Joining the SoundMaps community becomes available right after your first sound search. This is free for everyone and it only brings more features to you. By joining people will be able to discover more music and acquire points to show progress and earn some bragging rights in the leadboards.
                  </p>
                </div>
              </div>
              <div className="video-container video-tall">
                <Video src={FinalDesigns3} style={{ height: '600px' }} loop autoPlay controls={false} />
              </div>
            </div>
            <div className="side-by-side">
              <div className="video-container video-tall">
                <Video src={FinalDesigns4} style={{ height: '600px' }} loop autoPlay controls={false} />
              </div>
              <div>
                <div className="color-block">
                  <p>
                    Part of what makes SoundMaps worth coming back to is the ability to connect with other music lovers like yourself. The community section allows you to see what music is being heard around the world and follow people who have a good selection of discoveries for you to check out! You can also see playlists people made and try them out yourself.
                  </p>
                </div>
              </div>
            </div>
            <div className="side-by-side">
              <div>
                <div className="color-block">
                  <p>
                    The ability to be in charge of your own data is crucial in this day and age. SoundMaps makes it easy for any user to terminate their account which deletes all of their saved data. Anyone who isn’t comfortable with sharing their data or is unsatisfied with SoundMaps can rest easy knowing they have full control of their presence on our app.
                  </p>
                </div>
              </div>
              <div className="video-container video-tall">
                <Video src={FinalDesigns5} style={{ height: '600px' }} loop autoPlay controls={false} />
              </div>
            </div>
          </div>

          <h4>User Testing</h4>
          <p>
            For this part of the project I was joined by two other designers, Lylyna Heng and Zoe He, to help me perform evaluative research.
          </p>
          <p>
            We met at minimum of 2-3 times per week for about 3 weeks synchronously over zoom and worked collaboratively using Mural and Google Drive.
          </p>
          <p>
            We recruited participants from 11/30-12/06/2020 based on a 1 on 1 screener test and scheduled interviews around the participants availability.
          </p>
          <p>
            <strong>Execution:</strong> 30 minute zoom meetings (remote interviews), Observation of user completing task to sound search a song and pin it to the map with follow up questions/ discussion.
          </p>
          <p>
            <strong>Goal:</strong> to learn how adult music lovers associate music with a time or place and what goals they have if they can participate in sound searching a song and tagging it with a location. To determine what opportunities and needs might exist for new music discovery apps so that we can use these findings to help us shape the direction we take in developing our product.
          </p>

          <h4>Findings</h4>
          <div className="side-by-side wide">
            <img src={Mural} alt="Mural" />
            <div className="text">
              <p>
                We conducted usability tests with five participants to identify any painpoints or confusing aspects of SoundMaps. We wanted to know the likelihood that someone would read our data-usage disclaimer, or wheather searching a song and pinning it fell through the cracks.
              </p>
              <p>
                <strong>Participants Can:</strong>
              </p>
              <ul>
                <li>Sound Search and tag a song.</li>
                <li>Understanding what they are doing by asking to explain the concept if they were to tell someone else about SoundMaps.</li>
                <li>Achieve high level of comfort in completing/ understanding the tasks during the study.</li>
              </ul>
            </div>
          </div>

        </article>
        <article>
          <h3 id="reflection">Reflection</h3>
          <p>
            Although I wanted to make sure I was clear and honest with the experience of SoundMaps I somewhat failed in the place I feel strongly about. Privacy is a huge concern for myself, and as time moves forward, many other people as well.
          </p>
          <p>
            My approach to privacy, during user-testing, may not have been received by the particpants of my study due to the fact they knew they were being observed using a music app and felt the need to focus soley on the functionality of the app rather than the experience for them as a whole. It is my responsibility as the fascilitator to make sure that I set up the study to fully answer my questions.
          </p>
          <p>
            Throughout this project I had control. I was in charge of every aspect which feels safe and comfortable but the opportunity to finish this off in a group allowed me to see the perspectives of other designers. I am now in a place where I look forward to more collaborative work in place of attemptnig to take control of everything.
          </p>
          <p>
            As far as the process of this project goes I am finally getting in the groove of leading my own design system. This project helped me better understand behaviors and how nudging is a great power that comes with a great responsibility.
          </p>
        </article>
      </div>
    </main>
  );
};
