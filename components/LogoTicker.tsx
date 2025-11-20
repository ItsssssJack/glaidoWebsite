import React from 'react';

const LOGO_FILES = [
  '685bf79d52ba7949d554faee_chatgpt.webp',
  '685bf79d16d7eef0e501c4ef_slack.webp',
  '685bf79db4af2305e30a1c47_gmail.webp',
  '685bf79d62123cc342bcbc7a_github.webp',
  '685bf79ded2f57a63288e023_outlook.webp',
  '685bf79dadaf5b9ec3e4d993_notion.webp',
  '685bf79d3348ad42bd4f1085_telegram.webp',
  '685bf79dd99dd275c84910b5_perplexity.webp',
  '685bf79dd1cdb7336b3bd90c_whatsapp.webp',
  '685bf79dbd085cf0d09838f2_obsidian.webp',
  '685bf79d50ca87bcacc58468_teams.webp',
  '685bf79dea7b28162fd04606_figma.webp',
  '685bf79d200bebc83172e7e2_messenger.webp',
  '685bf79d2cecfca83be94287_imessage.webp',
  '685bf79eca5b85edc09231ad_x.webp',
  '685bf79d2dc29ed5b8bcee92_replit.webp',
  '685bf79d98a50e661d7a9c72_onenote.webp',
  '6863d1d93e34a35502947250_google.webp',
  '6863d1da8deb70cbceba471c_microsoft-excel.webp',
  '685bf79d16d7eef0e501c4ec_snap.webp'
];

export const LogoTicker: React.FC = () => {
  return (
    <div className="w-full py-16 border-y border-white/5 bg-black overflow-hidden relative">
      <p className="text-center text-sm text-gray-500 mb-12 uppercase tracking-widest">
        Works in the apps you already use
      </p>

      {/* Fade Edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-black to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-black to-transparent pointer-events-none" />

      <div className="flex w-[200%] animate-scroll hover:[animation-play-state:paused]">
        {/* First set */}
        {LOGO_FILES.map((logo, idx) => (
          <div
            key={`first-${idx}`}
            className="flex items-center justify-center w-32 flex-shrink-0 px-6"
          >
            <img
              src={`/logos/${logo}`}
              alt="App logo"
              className="w-12 h-12 object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {LOGO_FILES.map((logo, idx) => (
          <div
            key={`second-${idx}`}
            className="flex items-center justify-center w-32 flex-shrink-0 px-6"
          >
            <img
              src={`/logos/${logo}`}
              alt="App logo"
              className="w-12 h-12 object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};