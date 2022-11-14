import React from 'react';
import img from '../../../assets/images/treatment.png';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const Treatments = () => {
    return (
        <div className="card card-side gap-5 bg-base-100 shadow-xl mb-14 mt-14 ">
            <figure><img src={img} alt="" className='ml-6 rounded-3xl mb-10' /></figure>
            <div className="textsize ">
                <h2 className="text-4xl m-5 font-bold">Exceptional Dental Care, on Your Terms</h2>
                <p className='text-xl m-5 mr-10 py-9'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making 
                it look like readable English. Many desktop publishing packages and web page.</p>
               
               <button className="m-5"><PrimaryButton >Get Started </PrimaryButton>
            </button>
                
            </div>
        </div>
    );
};

export default Treatments;