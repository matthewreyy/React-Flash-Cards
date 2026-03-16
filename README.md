# The React Flash Cards

Aplikasi flash cards untuk belajar React dari konsep beginner hingga advanced.

## Cara Menjalankan

1. Install dependencies:
```bash
npm install
```

2. Jalankan development server:
```bash
npm run dev
```

3. Buka browser di `http://localhost:5173`

## Struktur Project

```
src/
├── components/
│   ├── Navbar.jsx          # Komponen navigasi atas
│   ├── Navbar.module.css
│   ├── Header.jsx          # Judul & subtitle halaman
│   ├── Header.module.css
│   ├── Badge.jsx           # Badge difficulty (Easy/Medium/Hard)
│   ├── Badge.module.css
│   ├── FlashCard.jsx       # Satu kartu dengan flip animation
│   ├── FlashCard.module.css
│   ├── FlashCardGrid.jsx   # Grid yang menampung semua kartu
│   └── FlashCardGrid.module.css
├── data/
│   └── flashcards.js       # Data pertanyaan & jawaban
├── App.jsx                 # Root component + useState
├── App.module.css
├── main.jsx
└── index.css
```

## Fitur

- Klik kartu untuk melihat jawaban (flip animation)
- Klik kartu yang sama atau kartu lain untuk kembali / pindah
- Badge warna berbeda per tingkat kesulitan
- Responsive grid layout
