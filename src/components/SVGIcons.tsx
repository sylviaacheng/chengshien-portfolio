import React from 'react';

import avatarImage from '../assets/avatar.jpg';

// Common stroke properties for neobrutalist style
const strokeProps = {
  stroke: '#000000',
  strokeWidth: '3.5',
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

export const AvatarMain: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`w-full h-full rounded-[40px] overflow-hidden border-5 border-black ${className}`}>
      <img 
        src={avatarImage} 
        alt="Avatar" 
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export const WebDesignServiceIcon: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <svg 
      viewBox="0 0 240 200" 
      className={`w-full select-none ${className}`}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Shadow behind browser window */}
      <rect x="25" y="25" width="190" height="150" rx="16" fill="#000000" />
      
      {/* Browser Window */}
      <rect x="20" y="20" width="190" height="150" rx="16" fill="#FFFFFF" {...strokeProps} strokeWidth="4" />
      
      {/* Browser bar */}
      <path d="M20,52 L210,52" {...strokeProps} strokeWidth="4" />
      
      {/* Red, Yellow, Green window dots */}
      <circle cx="38" cy="36" r="6" fill="#FF6B7A" {...strokeProps} strokeWidth="2" />
      <circle cx="54" cy="36" r="6" fill="#FFD214" {...strokeProps} strokeWidth="2" />
      <circle cx="70" cy="36" r="6" fill="#37D67A" {...strokeProps} strokeWidth="2" />

      {/* Content lines inside browser */}
      <line x1="40" y1="75" x2="110" y2="75" {...strokeProps} strokeWidth="3.5" />
      <line x1="40" y1="92" x2="95" y2="92" {...strokeProps} strokeWidth="3.5" />
      <line x1="40" y1="109" x2="115" y2="109" {...strokeProps} strokeWidth="3.5" />
      
      <rect x="40" y="128" width="35" height="14" rx="4" fill="#000000" {...strokeProps} />

      {/* Big Blue Square UI Widget */}
      <rect x="130" y="70" width="60" height="60" rx="10" fill="#3B82F6" {...strokeProps} strokeWidth="4" />
      <rect x="135" y="75" width="40" height="40" rx="6" fill="#FFFFFF" opacity="0.15" />

      {/* Floating design elements (Circle nodes) */}
      <circle cx="60" cy="158" r="8" fill="#FFF" {...strokeProps} strokeWidth="3" />
      <circle cx="120" cy="158" r="8" fill="#3B82F6" {...strokeProps} strokeWidth="3" />
      <circle cx="180" cy="158" r="8" fill="#FFF" {...strokeProps} strokeWidth="3" />

      {/* Neobrutalist Cursor Arrow (Yellow) */}
      <path 
        d="M185,115 L215,122 L202,135 L215,152 L202,158 L190,141 L178,150 L185,115 Z" 
        fill="#FFD214" 
        {...strokeProps} 
        strokeWidth="3.5"
      />
    </svg>
  );
};

export const UIUXServiceIcon: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <svg 
      viewBox="0 0 240 200" 
      className={`w-full select-none ${className}`}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer bounding blueprint frame */}
      <rect x="50" y="20" width="135" height="160" stroke="#3B82F6" strokeWidth="2" strokeDasharray="6,4" />
      
      {/* Corner alignment nodes for grid */}
      <rect x="46" y="16" width="8" height="8" fill="#3B82F6" {...strokeProps} strokeWidth="2" />
      <rect x="181" y="16" width="8" height="8" fill="#3B82F6" {...strokeProps} strokeWidth="2" />
      <rect x="46" y="176" width="8" height="8" fill="#3B82F6" {...strokeProps} strokeWidth="2" />
      <rect x="181" y="176" width="8" height="8" fill="#3B82F6" {...strokeProps} strokeWidth="2" />

      {/* Mobile Shadow */}
      <rect x="74" y="24" width="92" height="152" rx="18" fill="#000000" />
      
      {/* Mobile Phone Mockup */}
      <rect x="70" y="20" width="92" height="152" rx="18" fill="#FFFFFF" {...strokeProps} strokeWidth="4" />
      
      {/* Mobile Speaker & Camera */}
      <rect x="105" y="28" width="22" height="4" rx="2" fill="#000" />
      <circle cx="134" cy="30" r="2" fill="#000" />
      
      {/* UI Elements - Banner Overlay (Neo Pink) */}
      <rect x="56" y="52" width="86" height="32" rx="8" fill="#FF6B7A" {...strokeProps} strokeWidth="3.5" />
      <line x1="68" y1="68" x2="110" y2="68" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />

      {/* Grid Wireframe blocks */}
      <rect x="80" y="100" width="32" height="32" rx="6" fill="#FFFFFF" {...strokeProps} strokeWidth="3" />
      {/* Plus sign inside left block */}
      <path d="M96,110 L96,122 M90,116 L102,116" {...strokeProps} strokeWidth="3" />

      <rect x="118" y="100" width="34" height="32" rx="6" fill="#FFFFFF" {...strokeProps} strokeWidth="3" />
      
      <circle cx="82" cy="42" r="4" fill="#FF6B7A" />
      <line x1="92" y1="42" x2="120" y2="42" stroke="#000" strokeWidth="3" strokeLinecap="round" />
      
      {/* Scrollbar outline or UI divider */}
      <line x1="80" y1="148" x2="152" y2="148" {...strokeProps} strokeWidth="3" />
      <line x1="80" y1="158" x2="130" y2="158" {...strokeProps} strokeWidth="3" />
    </svg>
  );
};

export const ProductDesignServiceIcon: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <svg 
      viewBox="0 0 240 200" 
      className={`w-full select-none ${className}`}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Left Widget: Smartwatch */}
      {/* Watch band shadow */}
      <rect x="74" y="14" width="46" height="172" rx="10" fill="#000000" />
      <rect x="70" y="10" width="46" height="172" rx="10" fill="#EAEAEA" {...strokeProps} strokeWidth="3.5" />
      
      {/* Band lines */}
      <path d="M70,40 L116,40 M70,150 L116,150" {...strokeProps} strokeWidth="3" />

      {/* Watch screen case shadow */}
      <rect x="58" y="52" width="70" height="86" rx="20" fill="#000000" />
      {/* Watch screen case */}
      <rect x="54" y="48" width="70" height="86" rx="20" fill="#FFFFFF" {...strokeProps} strokeWidth="4" />
      
      {/* Smartwatch Screen - Neon Green */}
      <rect x="62" y="56" width="54" height="70" rx="14" fill="#37D67A" {...strokeProps} strokeWidth="3" />
      
      {/* Screen widgets */}
      <circle cx="74" cy="72" r="5" fill="#FFFFFF" {...strokeProps} strokeWidth="2.5" />
      <line x1="85" y1="72" x2="105" y2="72" stroke="#000" strokeWidth="3" strokeLinecap="round" />
      
      {/* Dynamic graph line */}
      <path d="M68,110 L76,100 L84,115 L94,95 L102,112 L110,105" fill="none" stroke="#000000" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />

      {/* Side Dial Button */}
      <rect x="122" y="80" width="6" height="20" rx="2" fill="#000000" {...strokeProps} strokeWidth="2" />

      {/* Right Widget: Neobrutalist Ruler */}
      {/* Ruler shadow */}
      <rect x="159" y="34" width="28" height="132" rx="6" fill="#000000" />
      {/* Ruler body */}
      <rect x="155" y="30" width="28" height="132" rx="6" fill="#FFFFFF" {...strokeProps} strokeWidth="4" />
      
      {/* Ruler tick marks */}
      <line x1="155" y1="42" x2="167" y2="42" stroke="#000" strokeWidth="3" />
      <line x1="155" y1="52" x2="162" y2="52" stroke="#000" strokeWidth="2.5" />
      <line x1="155" y1="62" x2="167" y2="62" stroke="#000" strokeWidth="3" />
      <line x1="155" y1="72" x2="162" y2="72" stroke="#000" strokeWidth="2.5" />
      <line x1="155" y1="82" x2="171" y2="82" stroke="#000" strokeWidth="3.5" />
      <line x1="155" y1="92" x2="162" y2="92" stroke="#000" strokeWidth="2.5" />
      <line x1="155" y1="102" x2="167" y2="102" stroke="#000" strokeWidth="3" />
      <line x1="155" y1="112" x2="162" y2="112" stroke="#000" strokeWidth="2.5" />
      <line x1="155" y1="122" x2="167" y2="122" stroke="#000" strokeWidth="3" />
      <line x1="155" y1="132" x2="162" y2="132" stroke="#000" strokeWidth="2.5" />
      <line x1="155" y1="142" x2="171" y2="142" stroke="#000" strokeWidth="3.5" />
      <line x1="155" y1="152" x2="162" y2="152" stroke="#000" strokeWidth="2.5" />
    </svg>
  );
};

export const BrandPromotionServiceIcon: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <svg 
      viewBox="0 0 240 200" 
      className={`w-full select-none ${className}`}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background shadow */}
      <path d="M54,74 L144,44 L144,164 L54,134 Z" fill="#000000" />
      <path d="M144,44 L184,24 L184,184 L144,164 Z" fill="#000000" />
      
      {/* Megaphone body */}
      <path d="M50,70 L140,40 L140,160 L50,130 Z" fill="#FFD214" {...strokeProps} strokeWidth="4" />
      
      {/* Megaphone bell */}
      <path d="M140,40 L180,20 L180,180 L140,160 Z" fill="#3B82F6" {...strokeProps} strokeWidth="4" />
      
      {/* Megaphone handle */}
      <rect x="75" y="145" width="20" height="40" rx="6" fill="#000000" />
      <rect x="71" y="141" width="20" height="40" rx="6" fill="#FFFFFF" {...strokeProps} strokeWidth="4" />
      
      {/* Sound waves */}
      <path d="M195,50 Q215,100 195,150" fill="none" stroke="#FF6B7A" strokeWidth="6" strokeLinecap="round" />
      <path d="M210,35 Q235,100 210,165" fill="none" stroke="#37D67A" strokeWidth="6" strokeLinecap="round" />
      
      {/* Detail lines on body */}
      <line x1="80" y1="75" x2="80" y2="125" stroke="#000" strokeWidth="4" strokeLinecap="round" />
      <line x1="110" y1="65" x2="110" y2="135" stroke="#000" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
};

export const AvatarCircleLaptop: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <svg 
      viewBox="0 0 300 300" 
      className={`w-full h-full select-none ${className}`}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Circular outer neobrutalist border with pink background */}
      <circle cx="150" cy="150" r="135" fill="#FF6B7A" {...strokeProps} strokeWidth="5" />
      
      {/* Body of the person inside circle */}
      <path 
        d="M75,280 C75,200 110,175 160,175 C210,175 245,200 245,280" 
        fill="#FFD214" 
        {...strokeProps} 
        strokeWidth="4"
      />
      {/* Dotted pattern on sweater */}
      <circle cx="100" cy="215" r="5" fill="#FF6B7A" />
      <circle cx="130" cy="235" r="5" fill="#FF6B7A" />
      <circle cx="160" cy="205" r="5" fill="#FF6B7A" />
      <circle cx="190" cy="230" r="5" fill="#FF6B7A" />
      <circle cx="225" cy="210" r="5" fill="#FF6B7A" />
      <circle cx="120" cy="265" r="5" fill="#FF6B7A" />
      <circle cx="180" cy="265" r="5" fill="#FF6B7A" />
      
      {/* Sweater collar */}
      <rect x="120" y="162" width="70" height="20" rx="10" fill="#FFD214" {...strokeProps} strokeWidth="4" />

      {/* Head / Neck */}
      <rect x="135" y="130" width="30" height="40" fill="#FFEAE2" {...strokeProps} />
      
      {/* Head / Face */}
      <path 
        d="M115,95 C115,70 132,52 155,52 C178,52 195,70 195,95 C195,120 178,138 155,138 C132,138 115,120 115,95 Z" 
        fill="#FFF" 
        {...strokeProps} 
        strokeWidth="4"
      />
      
      {/* Ears */}
      <circle cx="112" cy="105" r="8" fill="#FFF" {...strokeProps} />
      <circle cx="198" cy="105" r="8" fill="#FFF" {...strokeProps} />
      
      {/* Hair */}
      <path 
        d="M115,90 C113,68 130,42 165,42 C190,42 200,58 195,80 C185,72 172,72 165,76 C155,80 142,68 132,78 C124,84 120,83 115,90 Z" 
        fill="#1A1A1A" 
        {...strokeProps} 
        strokeWidth="4"
      />
      
      {/* Face details */}
      <circle cx="143" cy="98" r="3" fill="#000" />
      <circle cx="171" cy="98" r="3" fill="#000" />
      <path d="M153,95 L156,108 L150,111" fill="none" {...strokeProps} strokeWidth="3" />
      
      {/* Beard */}
      <path 
        d="M120,115 C120,140 135,152 155,152 C175,152 190,140 190,115 C190,114 180,120 155,120 C130,120 120,114 120,115 Z" 
        fill="#1A1A1A" 
        {...strokeProps} 
        strokeWidth="4"
      />
      
      {/* Hands holding / typing on laptop */}
      {/* Laptop outline standing out of circle */}
      <path 
        d="M180,195 L280,195 L240,250 L160,250 Z" 
        fill="#1A1A1A" 
        {...strokeProps} 
        strokeWidth="4"
      />
      
      {/* Hands drawing */}
      <path 
        d="M140,215 C160,210 185,200 205,205 L225,190" 
        fill="none" 
        {...strokeProps} 
        strokeWidth="4"
      />
      
      {/* Person fingers typing */}
      <path 
        d="M205,195 C208,188 228,188 232,195 M195,198 C198,192 215,192 220,198" 
        fill="none" 
        {...strokeProps} 
        strokeWidth="3.5"
      />

      {/* Laptop White circular decoration */}
      <circle cx="210" cy="223" r="8" fill="#FFF" />
    </svg>
  );
};

export const StudioCaseStudyLaptop: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <svg 
      viewBox="0 0 320 220" 
      className={`w-full select-none ${className}`}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Back Base Stand Shadow */}
      <path d="M25,182 L295,182 L285,198 L35,198 Z" fill="#000" />
      
      {/* Laptop Keyboard Base */}
      <path d="M20,178 L300,178 C306,178 308,183 302,188 L278,206 C275,208 270,210 265,210 L55,210 C50,210 45,208 42,206 L18,188 C12,183 14,178 20,178 Z" fill="#FFFFFF" {...strokeProps} strokeWidth="4" />
      
      {/* Trackpad */}
      <rect x="130" y="195" width="60" height="10" rx="4" fill="#FFFFFF" {...strokeProps} strokeWidth="3" />
      
      {/* Screen Frame Shadow */}
      <rect x="42" y="24" width="236" height="154" rx="12" fill="#000" />
      
      {/* Screen Frame */}
      <rect x="38" y="20" width="236" height="154" rx="12" fill="#FFFFFF" {...strokeProps} strokeWidth="4.5" />
      
      {/* Video / Content screen inside */}
      <rect x="48" y="30" width="216" height="134" rx="6" fill="#FFFFFF" {...strokeProps} strokeWidth="3" />
      
      {/* Play Video Dashboard elements */}
      {/* Video placeholder with deep purple play */}
      <rect x="56" y="42" width="128" height="88" rx="10" fill="#7047EB" {...strokeProps} strokeWidth="3.5" />
      
      {/* Play Triangle Icon */}
      <path d="M110,74 L132,86 L110,98 Z" fill="#FFFFFF" {...strokeProps} strokeWidth="3" />
      
      {/* Left panel vertical controls */}
      <line x1="56" y1="140" x2="140" y2="140" {...strokeProps} strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="152" cy="140" r="4" fill="#000" />
      
      {/* UI Dashboard controls inside laptop screen */}
      <circle cx="198" cy="46" r="4" fill="#3B82F6" {...strokeProps} />
      <line x1="206" y1="46" x2="235" y2="46" stroke="#000" strokeWidth="3" />
      
      <circle cx="198" cy="62" r="4" fill="#FF6B7A" {...strokeProps} />
      <line x1="206" y1="62" x2="245" y2="62" stroke="#000" strokeWidth="3" />
      
      <circle cx="198" cy="78" r="4" fill="#FFD214" {...strokeProps} />
      <line x1="206" y1="78" x2="240" y2="78" stroke="#000" strokeWidth="3" strokeLinecap="round" />

      <circle cx="198" cy="94" r="4" fill="#37D67A" {...strokeProps} />
      <line x1="206" y1="94" x2="235" y2="94" stroke="#000" strokeWidth="3" strokeLinecap="round" />

      <circle cx="198" cy="110" r="4" fill="#000" {...strokeProps} />
      <line x1="206" y1="110" x2="245" y2="110" stroke="#000" strokeWidth="3" strokeLinecap="round" />

      {/* Button Mock */}
      <rect x="198" y="126" width="48" height="15" rx="4" fill="#FFFFFF" {...strokeProps} strokeWidth="3" />

      {/* Under-video progress widgets */}
      <circle cx="68" cy="148" r="3" fill="#000" />
      <line x1="76" y1="148" x2="105" y2="148" stroke="#000" strokeWidth="2.5" />
    </svg>
  );
};
