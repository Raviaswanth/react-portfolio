import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
//import { GoogleApis } from 'googleapis/build/src/googleapis'
import { useRef } from 'react'
//var Buffer = require('buffer/').Buffer
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import Ravi_Aswanth_Resume from '../../assets/files/Ravi_Aswanth_Resume.pdf'
import './index.scss'
//<script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()
    emailjs.init('Pd8rCAzRTFoZ9TOsn');

    // function initMap() {
    //     // The location of Uluru
    //     const uluru = { lat: -25.344, lng: 131.031 };
    //     // The map, centered at Uluru
    //     const map = new GoogleApis.maps.Map(document.getElementById("map"), {
    //         zoom: 4,
    //         center: uluru,
    //     });
    //     // The marker, positioned at Uluru
    //     const marker = new GoogleApis.maps.Marker({
    //         position: uluru,
    //         map: map,
    //     });
    // }

    // window.initMap = initMap;

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    //     const sendEmail = (e) => {
    //         // document.getElementById('form')
    //         //    .addEventListener('submit', function (event) {
    //         e.preventDefault()



    //         const serviceID = 'service_bujra2p';
    //         const templateID = 'template_wji06ve';

    //         emailjs.sendForm(serviceID, templateID, this)
    //             .then(
    //                 () => {
    //                     alert('Message successfully sent!')
    //                     window.location.reload(false)
    //                 },
    //                 () => {
    //                     alert('Failed to send the message, please try again')
    //                 }
    //             )
    //     }
    // //);
    //   //  }
    const btn = document.getElementById('send');
    const sendEmail = (e) => {
        e.preventDefault()
        btn.value = 'Sending...';

        const serviceID = 'service_bujra2p';
        const templateID = 'template_wji06ve';

        emailjs.sendForm(serviceID, templateID, form.current)
            .then(
                () => {
                    // alert('Message successfully sent!')
                    btn.value = 'Mail Delivered';
                    window.location.reload(false)
                },
                () => {
                    btn.value = 'Re-Send Mail';
                    alert('Failed to send the message, please try again')
                }
            )
    }

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I am interested in Full Stack Developer opportunities - especially ambitious or
                        large projects. However, if you have other request or question,
                        don't hesitate to contact me using below form either.
                    </p>
                    <div className="contact-form">
                        <form id="smail" ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input placeholder="Name" type="text" name="from_name" id="from_name" required />
                                </li>
                                <li className="half">
                                    <input
                                        placeholder="Email"
                                        type="email"
                                        name="reply_to"
                                        required
                                        id="reply_to"
                                    />
                                </li>
                                <li>
                                    <input
                                        placeholder="Company Name"
                                        type="text"
                                        name="company_name"
                                        required
                                    />
                                </li>
                                <li>
                                    <input
                                        placeholder="Subject"
                                        type="text"
                                        name="subject"
                                        required
                                    />
                                </li>
                                <li>
                                    <textarea
                                        placeholder="Message"
                                        name="message"
                                        required
                                    ></textarea>
                                </li>
                                <li>
                                    <input id="send" type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className="info-map">
                    Ravi Aswanth,
                    <br />
                    Victoria,Melbourne.
                    <br />
                    <span>Email Id: r.raviaswanth@gmail.com</span>
                    <br />
                    <span>Contact No : (+61) 0413361996</span>
                   <a href={Ravi_Aswanth_Resume} download ><input  type="button" className="flat-button" value="Download Resume" ></input></a> 
                </div>
                {/* <div className="map-wrap">
                    <div id="map"></div>
                     <MapContainer center={[44.96366, 19.61045]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[44.96366, 19.61045]}>
                            <Popup>Raviaswanth lives here, come over for a cup of coffee :)</Popup>
                        </Marker>
                    </MapContainer> 
                </div> */}
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Contact