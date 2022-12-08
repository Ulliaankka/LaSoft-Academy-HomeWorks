import React from 'react';
import './about-page.css';
import mapIcon from './map.svg';
import mobileIcon from './mobile.svg';
import twitterIcon from './twitter.svg';
import instagramIcon from './instagram.svg';
import facebookIcon from './facebook.svg';
import addressIcon from './address.svg';

const AboutPage = () => {
    return (
        <main className='about-page-wrap'>

            <div className='about-text'>
                <h1>Who we are?</h1>
                <div className='about-text-section'>
                    <p className='general-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra nulla ornare lacus, accumsan purus sem donec. Vitae ornare sit rhoncus vitae id neque. Non vitae et, pellentesque lacus. Nunc, eu sollicitudin massa senectus eu diam pharetra. Sit nisl quisque eget arcu cursus scelerisque. Aliquam et urna tellus blandit sit nulla nec. Ultricies sapien sit lorem aliquet. Phasellus enim feugiat sed parturient elementum varius ut in vel. Neque egestas magna sed orci, consequat. Sit magnis nunc consequat id proin tortor egestas arcu ac. At faucibus leo et, nisi, sollicitudin. Malesuada sagittis massa, viverra tempor etiam hendrerit eget amet. Odio magna ultrices diam, facilisis. Habitant diam eros molestie pretium.</p><br/>
                    <p className='general-text'>Viverra parturient eu tincidunt sem. Aliquet ultrices volutpat orci tristique. Sit eleifend donec bibendum sed fermentum. Amet, sagittis, libero, at nullam vestibulum. Fusce et sit maecenas urna orci felis sodales. Dignissim aliquam at id duis gravida. Nunc sit arcu lectus lorem libero vel vitae adipiscing amet. In cras sed tristique nisl, amet accumsan urna quis. Condimentum laoreet a convallis sit pellentesque laoreet at fringilla. Porttitor ut mi nec cras. Nunc, sit non ipsum aliquam enim. Blandit dictum nunc duis ac faucibus neque feugiat vitae. Quis ac malesuada pulvinar ac cras mollis dictum ullamcorper pretium. Pellentesque ac nunc, eu fermentum erat nunc vel natoque volutpat.</p><br/>
                    <p className='general-text'>Et ac a leo et rhoncus montes, enim viverra. Nulla aliquam ut massa, praesent viverra integer massa justo. Vitae pellentesque quis sit neque. Facilisis aliquam dolor habitant commodo ultricies. Lacus pellentesque ultricies viverra curabitur at fermentum tincidunt aliquet. Mi congue sed turpis ligula egestas odio tincidunt libero vitae. Amet pellentesque aliquam quam viverra proin urna vitae egestas turpis. Enim, dictum nisl, dictum sed velit. Aliquam dignissim orci auctor ipsum ac ultrices at. Et, nisl, egestas id eget. Nisl diam et scelerisque at consectetur.</p>
                </div>
            </div>

            <div className='about-contact'>
                <img src={mapIcon} className='icon-map' alt='Icon of map' />

                <div className='social-information '>
                    <div className='address-information'>
                        <img src={addressIcon} className='icon-about' alt="Icon of address" /> 
                        <span className='general-text'>2464 Royal Ln. Mesa, New Jersey 45463</span>
                    </div>
                    <div className='phone-information'>
                        <img src={mobileIcon} className='icon-about' alt="Icon of photo" /> 
                        <span className='general-text'>(208) 555-0112</span>
                    </div>
                    <div className='social-media-information'>
                        <img src={facebookIcon} className='icon-about' alt="Facebook logotype" />
                        <img src={instagramIcon} className='icon-about' alt="Instagram logotype" /> 
                        <img src={twitterIcon} className='icon-about' alt="Twitter logotype" />  
                    </div>
                </div>

            </div>

        </main>
    );
};

export default AboutPage;