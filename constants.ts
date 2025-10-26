
import type { Person, EventDetails, LoveStory, Gift } from './types';

export const groom: Person = {
    nickname: '[Pria]',
    fullName: '[Nama Lengkap Mempelai Pria]',
    fatherName: '[Nama Ayah Mempelai Pria]',
    motherName: '[Nama Ibu Mempelai Pria]',
};

export const bride: Person = {
    nickname: '[Wanita]',
    fullName: '[Nama Lengkap Mempelai Wanita]',
    fatherName: '[Nama Ayah Mempelai Wanita]',
    motherName: '[Nama Ibu Mempelai Wanita]',
};

export const events: EventDetails[] = [
    {
        name: 'Akad Nikah',
        date: new Date('2026-08-16T08:00:00'),
        time: 'Pukul : 08:00 WIB',
        venue: '[Nama Gedung/Lokasi]',
        address: '[Alamat Lengkap Lokasi Akad]',
        mapLink: 'https://maps.google.com',
    },
    {
        name: 'Resepsi',
        date: new Date('2026-08-16T10:00:00'),
        time: 'Pukul : 10:00 WIB - Selesai',
        venue: '[Nama Gedung/Lokasi]',
        address: '[Alamat Lengkap Lokasi Resepsi]',
        mapLink: 'https://maps.google.com',
    },
];

export const loveStories: LoveStory[] = [
    {
        title: 'Awal Cerita',
        description: '[Placeholder untuk cerita awal pertemuan. Deskripsikan bagaimana pasangan ini pertama kali bertemu dan memulai hubungan mereka.]',
        imageUrl: 'https://picsum.photos/800/600?random=1',
    },
    {
        title: 'Lamaran',
        description: '[Placeholder untuk cerita momen lamaran. Deskripsikan suasana dan perasaan saat salah satu pasangan melamar yang lain.]',
        imageUrl: 'https://picsum.photos/800/600?random=2',
    },
    {
        title: 'Pernikahan',
        description: '[Placeholder untuk cerita menuju pernikahan. Deskripsikan persiapan dan harapan menjelang hari bahagia.]',
        imageUrl: 'https://picsum.photos/800/600?random=3',
    },
];

export const galleryImages: string[] = [
    'https://picsum.photos/600/800?random=10',
    'https://picsum.photos/800/600?random=11',
    'https://picsum.photos/600/800?random=12',
    'https://picsum.photos/800/600?random=13',
    'https://picsum.photos/600/800?random=14',
    'https://picsum.photos/800/600?random=15',
    'https://picsum.photos/600/800?random=16',
    'https://picsum.photos/800/600?random=17',
];

export const gifts: Gift[] = [
    {
        bankName: '[Nama Bank 1]',
        accountNumber: '1234567890',
        accountHolder: '[Nama Pemilik Rekening 1]',
        logoUrl: 'https://picsum.photos/150/50?random=20'
    },
    {
        bankName: '[E-Wallet/Bank 2]',
        accountNumber: '0987654321',
        accountHolder: '[Nama Pemilik Rekening 2]',
        logoUrl: 'https://picsum.photos/150/50?random=21'
    }
];

export const physicalGift = {
    name: '[Nama Penerima Hadiah]',
    address: '[Alamat Lengkap untuk Kirim Hadiah Fisik]'
};
