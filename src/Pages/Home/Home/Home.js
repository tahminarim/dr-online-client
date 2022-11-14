import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import Treatments from '../Treatments/Treatments';

const Home = () => {
    return (
        <div className='mx-14'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <Treatments></Treatments>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            
        </div>
    );
};

export default Home;