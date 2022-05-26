import React from 'react';
import Banner from '../../components/Banner/Banner';
import Review from '../../components/Review/Review';
import Summary from '../../components/Summary/Summary';
import Tools from '../../components/Tools/Tools';
import Tourer from '../../components/Tourer/Tourer';

const Home = () => {
    return (
        <>
           <Banner></Banner>
           <Tools></Tools>
           <Tourer></Tourer>
           <Summary></Summary>
           <Review></Review>
        </>
    );
};

export default Home;