"use client";
import React, { useState } from "react";

const page = () => {
    const [showSoftDev, setShowSoftDev] = useState(false);
    const [showUIUX, setShowUIUX] = useState(false);
    const [showDatSci, setShowDatSci] = useState(false);
    const [showProdMan, setShowProdMan] = useState(false);
    const [showDicky, setShowDicky] = useState(false);
    const [showSharon, setShowSharon] = useState(false);
    const [showFilbert, setShowFilbert] = useState(false);
    const [showTimur, setShowTimur] = useState(false);
    const [showKenneth, setShowKenneth] = useState(false);
    const [showNelson, setShowNelson] = useState(false);
    const [showVandega, setShowVandega] = useState(false);
    const [showIndana, setShowIndana] = useState(false);
    const [showAlbert, setShowAlbert] = useState(false);
    const [showAlma, setShowAlma] = useState(false);
    const [showAudy, setShowAudy] = useState(false);
  
    // Toggle functions for each section
    const SoftDevClick = () => {
      setShowSoftDev(!showSoftDev);
      setShowUIUX(false);
      setShowDatSci(false);
      setShowProdMan(false);
    };
  
    const UIUXClick = () => {
      setShowUIUX(!showUIUX);
      setShowSoftDev(false);
      setShowDatSci(false);
      setShowProdMan(false);
    };
  
    const DatSciClick = () => {
      setShowDatSci(!showDatSci);
      setShowSoftDev(false);
      setShowUIUX(false);
      setShowProdMan(false);
    };
  
    const ProdManClick = () => {
      setShowProdMan(!showProdMan);
      setShowSoftDev(false);
      setShowUIUX(false);
      setShowDatSci(false);
    };

    const DickyClick = () => {
        setShowDicky(!showDicky);
        setShowSharon(false);
        setShowFilbert(false);
        setShowTimur(false);
        setShowKenneth(false);
        setShowNelson(false);
        setShowVandega(false);
        setShowIndana(false);
        setShowAlbert(false);
        setShowAlma(false);
        setShowAudy(false);
    };

    const SharonClick = () => {
        setShowSharon(!showSharon);
        setShowDicky(false);
        setShowFilbert(false);
        setShowTimur(false);
        setShowKenneth(false);
        setShowNelson(false);
        setShowVandega(false);
        setShowIndana(false);
        setShowAlbert(false);
        setShowAlma(false);
        setShowAudy(false);
    };

    const FilbertClick = () => {
        setShowFilbert(!showFilbert);
        setShowSharon(false);
        setShowDicky(false);
        setShowTimur(false);
        setShowKenneth(false);
        setShowNelson(false);
        setShowVandega(false);
        setShowIndana(false);
        setShowAlbert(false);
        setShowAlma(false);
        setShowAudy(false);

    };
    const TimurClick = () => {
        setShowTimur(!showTimur);
        setShowSharon(false);
        setShowDicky(false);
        setShowFilbert(false);
        setShowKenneth(false);
        setShowNelson(false);
        setShowVandega(false);
        setShowIndana(false);
        setShowAlbert(false);
        setShowAlma(false);
        setShowAudy(false);

    };
    const KennethClick = () => {
        setShowKenneth(!showKenneth);
        setShowTimur(false);
        setShowSharon(false);
        setShowDicky(false);
        setShowFilbert(false);
        setShowNelson(false);
        setShowVandega(false);
        setShowIndana(false);
        setShowAlbert(false);
        setShowAlma(false);
        setShowAudy(false);

    };
    const NelsonClick = () => {
        setShowNelson(!showNelson);
        setShowKenneth(false);
        setShowTimur(false);
        setShowSharon(false);
        setShowDicky(false);
        setShowFilbert(false);
        setShowVandega(false);
        setShowIndana(false);
        setShowAlbert(false);
        setShowAlma(false);
        setShowAudy(false);

    };
    const VandegaClick = () => {
        setShowVandega(!showVandega);
        setShowNelson(false);
        setShowKenneth(false);
        setShowTimur(false);
        setShowSharon(false);
        setShowDicky(false);
        setShowFilbert(false);
        setShowIndana(false);
        setShowAlbert(false);
        setShowAlma(false);
        setShowAudy(false);

    };
    const IndanaClick = () => {
        setShowIndana(!showIndana);
        setShowVandega(false);
        setShowNelson(false);
        setShowKenneth(false);
        setShowTimur(false);
        setShowSharon(false);
        setShowDicky(false);
        setShowFilbert(false);
        setShowAlbert(false);
        setShowAlma(false);
        setShowAudy(false);
    };
    const AlbertClick = () => {
        setShowAlbert(!showAlbert);
        setShowIndana(false);
        setShowVandega(false);
        setShowNelson(false);
        setShowKenneth(false);
        setShowTimur(false);
        setShowSharon(false);
        setShowDicky(false);
        setShowFilbert(false);
        setShowAlma(false);
        setShowAudy(false);

    };
    const AlmaClick = () => {
        setShowAlma(!showAlma);
        setShowAlbert(false);
        setShowIndana(false);
        setShowVandega(false);
        setShowNelson(false);
        setShowKenneth(false);
        setShowTimur(false);
        setShowSharon(false);
        setShowDicky(false);
        setShowFilbert(false);
        setShowAudy(false);

    };
    const AudyClick = () => {
        setShowAudy(!showAudy);
        setShowAlma(false);
        setShowAlbert(false);
        setShowIndana(false);
        setShowVandega(false);
        setShowNelson(false);
        setShowKenneth(false);
        setShowTimur(false);
        setShowSharon(false);
        setShowDicky(false);
        setShowFilbert(false);
    };



  return (
    <div className="bg-green-300 p-4 rounded-lg" style ={{ backgroundColor: '#E7F0DC'}}>
        <div className="text-center"> 
            <h1 className="text-xl font-bold text-green-700 font-inter text-center mb-10"> About Us </h1>
            <section className="text-m text-green-700 font-inter text-center mb-7">
                <p className="mb-7">
                    <span className="font-bold">Bin Buddy</span> is an application that functions as a trash can locator around Institut Teknologi Bandung's Ganesha Campus area
                    to help students keep the surroundings clean. 
                </p>

                <p>
                    <span className="font-bold">Bin Buddy</span> is created by a group of students trying to take care of their own environment while also 
                    implementing their knowledge about software and technology.
                </p>
            </section>

            <hr className="my-5 border-green-700 border-4"></hr>
            <section className="text-m text-green-700 font-inter text-center mb-5">
            <p className="font-bold mb-5 text-xl">
                Our Team
            </p>
            <p className="mb-5">    
                Our team consists of 4 different units each with their own expertise.
            </p>

            <p className="mb-5">    
                Click on our units to learn more about them!
            </p>
        <div className="flex flex-col items-center">
            <button
                onClick={SoftDevClick}
                className="font-bold text-l mb-3 block">  
                Software Development
            </button>
        
            {showSoftDev && (
                <div className="mb-4 flex flex-col items-center">

                    <button
                        onClick={DickyClick}
                        className="text-m mb-3 block">  
                        Muhammad Dicky Isra
                    </button>

                    {showDicky && (
                        <img src="/Photos/Dicky.jpg" alt="Dicky" style={{width : '400px', height : '500px' }} className="rounded-full"></img>
                    )}

                    <button
                        onClick={SharonClick}
                        className="text-m mb-3 block">  
                        Sharon Darma Putra
                    </button>

                    {showSharon && (
                        <img src="/Photos/Sharon.jpg" alt="Sharon" style={{width : '400px', height : '500px' }} className="rounded-full"></img>
                    )}

                    <button
                        onClick={FilbertClick}
                        className="text-m mb-3 block">  
                        Filbert Engyo
                    </button>

                    {showFilbert && (
                        <img src="/Photos/Filbert.jpg" alt="Filbert" style={{width : '400px', height : '500px' }} className="rounded-full"></img>
                    )}

                    <button
                        onClick={TimurClick}
                        className="text-m mb-3 block">  
                        Muhammad Timur Kanigara
                    </button>

                    {showTimur && (
                        <img src="/Photos/Timur.jpg" alt="Timur" style={{width : '400px', height : '400px' }} className="rounded-full"></img>
                    )}

                    <button
                        onClick={KennethClick}
                        className="text-m mb-3 block">  
                        Kenneth Ricardo Chandra
                    </button>

                    {showKenneth && (
                        <img src="/Photos/Kenneth.jpg" alt="Kenneth" style={{width : '400px', height : '500px' }} className="rounded-full"></img>
                    )}
                </div>
            )}

            <button
                onClick={UIUXClick}
                className="font-bold text-l mb-3 block">  
                UI/UX
            </button>

            {showUIUX && (
                <div className="mb-4 flex flex-col items-center">
                    <button
                        onClick={NelsonClick}
                        className="text-m mb-3 block">  
                        Benedict Nelson
                    </button>

                    {showNelson && (
                        <img src="/Photos/Nelson.jpg" alt="Nelson" style={{width : '400px', height : '500px' }} className="rounded-full"></img>
                    )}
                </div>
            )}

            <button
                onClick={DatSciClick}
                className="font-bold text-l mb-3 block">  
                Data Science
            </button>

            
            {showDatSci && (
                <div className="mb-4 flex flex-col items-center">
                    <button
                        onClick={AlbertClick}
                        className="text-m mb-3 block">  
                        Albertus Christian Poandy
                    </button>

                    {showAlbert && (
                        <img src="/Photos/Albert.jpg" alt="Albert" style={{width : '400px', height : '400px' }} className="rounded-full"></img>
                    )}

                    <button
                        onClick={AlmaClick}
                        className="text-m mb-3 block">  
                        Alma Felicia Vielrizki
                    </button>

                    {showAlma && (
                        <img src="/Photos/Alma.jpg" alt="Alma" style={{width : '400px', height : '500px' }} className="rounded-full"></img>
                    )}

                    <button
                        onClick={AudyClick}
                        className="text-m mb-3 block">  
                        Audy Alicia Renatha Tirayoh
                    </button>

                    {showAudy && (
                        <img src="/Photos/Audy.jpg" alt="Audy" style={{width : '400px', height : '500px' }} className="rounded-full"></img>
                    )}
                </div>
            )}

            <button
                onClick={ProdManClick}
                className="font-bold text-l mb-3 block">  
                Product Manager
            </button>

            {showProdMan && (
                <div className="mb-4 flex flex-col items-center">
                    <button
                        onClick={VandegaClick}
                        className="text-m mb-3 block">  
                        Vandega Arozan Musholine
                    </button>

                    {showVandega && (
                        <img src="/Photos/Vandega.jpg" alt="Vandega" style={{width : '400px', height : '500px' }} className="rounded-full"></img>
                    )}

                    <button
                        onClick={IndanaClick}
                        className="text-m mb-3 block">  
                        Indana Aulia Ayundazulfa
                    </button>

                    {showIndana && (
                        <img src="/Photos/Indana.jpg" alt="Indana" style={{width : '400px', height : '400px' }} className="rounded-full"></img>
                    )}
                </div>
            )}
        </div>

            
            </section>
            <p className="text-m text-green-700 font-inter text-center ">
            <span className="font-bold">Contact Us</span> at <a href="mailto:binbuddyitb@gmail.com" className="font-bold text-green-700 underline">binbuddyitb@gmail.com</a>
            </p>
        </div>
    </div> 

  )
};

export default page;
