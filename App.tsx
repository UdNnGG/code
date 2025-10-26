
import React, { useState, useEffect, useRef } from 'react';
import AOS from 'aos';
import { Countdown } from './components/Countdown';
import { Guestbook } from './components/Guestbook';
import { AudioPlayer } from './components/AudioPlayer';
import { Gallery } from './components/Gallery';
import { Lightbox } from './components/Lightbox';
import { LoveStoryItem } from './components/LoveStoryItem';
import { GiftCard } from './components/GiftCard';
import type { Comment } from './types';
import { groom, bride, events, loveStories, galleryItems, gifts, physicalGift, cover } from './constants';

const App: React.FC = () => {
    const [isCoverOpen, setCoverOpen] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);
    const [comments, setComments] = useState<Comment[]>([]);
    const [lightboxImage, setLightboxImage] = useState<string | null>(null);
    const [isGiftSectionOpen, setIsGiftSectionOpen] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 1500,
            once: false,
            mirror: true,
            easing: 'ease-in-out-quad',
        });
    }, []);

    const handleOpenInvitation = () => {
        setCoverOpen(true);
        setIsPlaying(true);
        audioRef.current?.play();
    };

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current?.pause();
        } else {
            audioRef.current?.play();
        }
        setIsPlaying(!isPlaying);
    };
    
    const handleCommentSubmit = (comment: Comment) => {
        setComments([comment, ...comments]);
    };

    const copyToClipboard = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            alert('Nomor rekening berhasil disalin!');
        } catch (err) {
            alert('Gagal menyalin nomor rekening.');
        }
    };
    
    return (
        <>
            <div 
                className={`fixed inset-0 bg-background z-50 flex items-center justify-center transition-transform duration-[1.5s] ease-in-out ${isCoverOpen ? '-translate-y-full' : 'translate-y-0'}`}
                style={{ 
                    backgroundImage: `url(${cover.imageUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: cover.imagePosition || 'center center',
                }}
            >
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative text-center text-white p-8" data-aos="fade-up">
                    <h2 className="font-playfair text-2xl md:text-3xl">The Wedding of</h2>
                    <h1 className="font-playfair text-6xl md:text-8xl my-4">Agil &amp; Ajizah</h1>
                    <p className="mt-8 text-lg">Kepada Yth.</p>
                    <p className="font-bold text-2xl">[Nama Tamu]</p>
                    <button
                        onClick={handleOpenInvitation}
                        className="mt-8 bg-accent hover:bg-text-secondary text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg"
                    >
                        Buka Undangan
                    </button>
                </div>
            </div>

            <main className={`transition-opacity duration-1000 ${isCoverOpen ? 'opacity-100' : 'opacity-0'}`}>
                {/* Hero Section */}
                <section 
                    className="relative h-screen w-full flex flex-col justify-center items-center text-white text-center bg-cover bg-center"
                    style={{ backgroundImage: 'url(https://i.imgur.com/GKInTr8.jpeg)' }}
                >
                    <div className="absolute inset-0 bg-black/35"></div>
                    <div className="relative z-10 p-9" data-aos="fade-down" data-aos-delay="600">
                        <h2 className="font-playfair text-3xl md:text-4xl">The Wedding of</h2>
                        <h1 className="font-playfair text-7xl md:text-9xl my-4">AGIL &amp; AJIZAH</h1>
                        <p className="text-xl md:text-2xl border-y-2 border-white/50 py-2 inline-block px-4">{events[0].date.toLocaleDateString('id-ID', { day: '2-digit', month: '2-digit', year: 'numeric' }).replace(/\//g, '. ')}</p>
                    </div>
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </section>
                
                {/* Quran Verse Section */}
                <section className="py-20 px-6 text-center bg-background" data-aos="fade-up">
                     <p className="text-3xl text-accent font-playfair mb-4">“</p>
                    <p className="max-w-3xl mx-auto italic text-gray-700 leading-relaxed">"Dan Diantara Tanda-tanda (Kebesaran) -Nya Ialah Dia Menciptakan Pasangan-pasangan Untukmu Dari Jenismu Sendiri, Agar Kamu Cenderung Dan Merasa Tenteram Kepadanya, Dan Dia Menjadikan Diantaramu Rasa Kasih Dan Sayang. Sungguh, Pada Yang Demikian Itu Benar-benar Terdapat Tanda-tanda (Kebesaran Allah) Bagi Kaum Yang Berfikir"</p>
                    <p className="mt-4 font-semibold text-text-primary">(Q.S. Ar-Rum: 21)</p>
                </section>

                {/* Bride & Groom Section */}
                <section className="py-20 px-6 text-center bg-background bg-cover bg-center" style={{ backgroundImage: 'url(https://picsum.photos/1000/1200?blur=2)' }}>
                    <h2 className="font-playfair text-4xl md:text-5xl text-text-primary" data-aos="fade-up">Bride & Groom</h2>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-20 mt-12">
                       {/* Groom */}
                       <div className="flex flex-col items-center" data-aos="fade-up">
                           <img src="https://picsum.photos/400/500" alt="Groom" className="w-48 h-64 object-cover rounded-t-full shadow-lg"/>
                           <h3 className="font-playfair text-4xl mt-4 text-accent">{groom.nickname}</h3>
                           <p className="font-semibold text-lg text-text-primary mt-1">{groom.fullName}</p>
                           <p className="text-text-secondary mt-2">Putra dari</p>
                           <p className="text-text-primary">{groom.fatherName} & {groom.motherName}</p>
                       </div>
                       
                       <div className="font-playfair text-6xl text-accent" data-aos="zoom-in" data-aos-delay="100">&</div>

                       {/* Bride */}
                       <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="200">
                           <img src="https://picsum.photos/400/501" alt="Bride" className="w-48 h-64 object-cover rounded-t-full shadow-lg"/>
                           <h3 className="font-playfair text-4xl mt-4 text-accent">{bride.nickname}</h3>
                           <p className="font-semibold text-lg text-text-primary mt-1">{bride.fullName}</p>
                           <p className="text-text-secondary mt-2">Putri dari</p>
                           <p className="text-text-primary">{bride.fatherName} & {bride.motherName}</p>
                       </div>
                    </div>
                </section>
                
                {/* Event Details & Countdown */}
                <section className="py-20 px-6 text-center bg-background">
                    <h2 className="font-playfair text-4xl md:text-5xl text-text-primary" data-aos="fade-up">Wedding Event</h2>
                    <p className="max-w-2xl mx-auto mt-4 text-text-secondary" data-aos="fade-up" data-aos-delay="200">
                        [Placeholder: Kalimat pembuka untuk bagian acara, tentang syukur dan menanti hari istimewa.]
                    </p>
                    <Countdown targetDate={events[0].date} />
                    
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {events.map((event, index) => (
                            <div key={index} className="bg-white/50 p-8 rounded-lg shadow-md border border-accent/20" data-aos="fade-up" data-aos-delay={index * 200}>
                                <h3 className="font-playfair text-3xl text-accent">{event.name}</h3>
                                <div className="w-20 h-px bg-accent mx-auto my-4"></div>
                                <p className="font-semibold text-lg">{event.date.toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                                <p className="text-text-secondary mt-1">{event.time}</p>
                                <p className="text-text-primary font-semibold mt-4">{event.venue}</p>
                                <p className="text-text-secondary mt-1">{event.address}</p>
                                <a href={event.mapLink} target="_blank" rel="noopener noreferrer" className="inline-block mt-6 bg-accent text-white py-2 px-6 rounded-full hover:bg-text-secondary transition-colors">
                                    Lihat Lokasi
                                </a>
                            </div>
                        ))}
                    </div>
                </section>
                
                {/* Love Story Section */}
                <section className="py-20 px-6 bg-background">
                    <h2 className="font-playfair text-4xl md:text-5xl text-text-primary text-center mb-12" data-aos="fade-up">Love Story</h2>
                    <div className="relative max-w-4xl mx-auto">
                        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-accent/30 transform -translate-x-1/2 hidden md:block"></div>
                        {loveStories.map((story, index) => (
                            <LoveStoryItem key={index} story={story} index={index} />
                        ))}
                    </div>
                </section>
                
                {/* Gallery Section */}
                <section className="py-20 bg-background">
                    <h2 className="font-playfair text-4xl md:text-5xl text-text-primary text-center mb-12" data-aos="fade-up">Gallery</h2>
                    <Gallery images={galleryItems} onImageClick={setLightboxImage} />
                </section>
                
                 {/* Gift Section */}
                <section className="py-20 px-6 text-center bg-background bg-cover bg-center" style={{ backgroundImage: 'url(https://picsum.photos/1000/800?blur=2)' }}>
                    <h2 className="font-playfair text-4xl md:text-5xl text-text-primary" data-aos="fade-up">Kirim Hadiah</h2>
                    <p className="max-w-2xl mx-auto mt-4 text-text-secondary" data-aos="fade-up" data-aos-delay="200">
                        [Placeholder: Kalimat pembuka untuk bagian hadiah, sebagai pengganti kehadiran.]
                    </p>
                    <button
                        onClick={() => setIsGiftSectionOpen(!isGiftSectionOpen)}
                        className="mt-8 bg-accent hover:bg-text-secondary text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg inline-flex items-center gap-2"
                        data-aos="fade-up" data-aos-delay="300"
                    >
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5 5a3 3 0 013-3h4a3 3 0 013 3v2a3 3 0 01-3 3H8a3 3 0 01-3-3V5zm3-1a1 1 0 00-1 1v2a1 1 0 001 1h4a1 1 0 001-1V5a1 1 0 00-1-1H8zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
                        Amplop Digital
                    </button>
                    {isGiftSectionOpen && (
                        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto" data-aos="zoom-in">
                            {gifts.map((gift, index) => (
                                <GiftCard key={index} gift={gift} onCopy={copyToClipboard} />
                            ))}
                            <div className="md:col-span-2 bg-white/50 p-6 rounded-lg shadow-md border border-accent/20">
                                <h3 className="font-playfair text-2xl text-accent">Kirim Hadiah Fisik</h3>
                                <p className="mt-2 text-text-secondary">Penerima: {physicalGift.name}</p>
                                <p className="mt-1 text-text-secondary">{physicalGift.address}</p>
                            </div>
                        </div>
                    )}
                </section>
                
                {/* Guestbook Section */}
                <Guestbook comments={comments} onCommentSubmit={handleCommentSubmit} />
                
                {/* Thank You Section */}
                <section 
                    className="py-20 px-6 text-center text-white bg-cover bg-center"
                    style={{ backgroundImage: 'url(https://picsum.photos/1080/800?grayscale)' }}
                >
                    <div className="absolute inset-0 bg-black/75"></div>
                     <div className="relative z-10" data-aos="fade-up">
                        <p className="max-w-3xl mx-auto italic leading-relaxed">
                           [Placeholder: Ucapan terima kasih atas kehadiran dan doa restu.]
                        </p>
                        <p className="mt-8">Kami yang berbahagia,</p>
                        <h2 className="font-playfair text-5xl mt-2">{groom.nickname} &amp; {bride.nickname}</h2>
                        
                        <div className="mt-12 text-sm">
                          <p>Made with ❤️ by Rumah Undangan</p>
                          <div className="flex justify-center gap-4 mt-2">
                             <a href="#" className="hover:opacity-75">Instagram</a>
                             <a href="#" className="hover:opacity-75">TikTok</a>
                             <a href="#" className="hover:opacity-75">WhatsApp</a>
                          </div>
                        </div>
                    </div>
                </section>

            </main>
            
            <AudioPlayer isPlaying={isPlaying} onTogglePlay={togglePlay} isVisible={isCoverOpen} />
            <audio ref={audioRef} src="https://picsum.photos/200/300.mp3" loop />

            {lightboxImage && (
                <Lightbox imageUrl={lightboxImage} onClose={() => setLightboxImage(null)} />
            )}
        </>
    );
};

export default App;
