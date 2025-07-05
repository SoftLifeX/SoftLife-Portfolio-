'use client';

import React from 'react';

const VennDiagram = () => {
  return (
      <svg width="400" height="400" viewBox="0 0 400 400">
        {/* Circles */}
        <circle id="venncircle" cx="140" cy="140" r="100" stroke="#fff" strokeWidth="1.5" fill="none" />
        <circle cx="260" cy="140" r="100" stroke="#fff" strokeWidth="1.5" fill="none" />
        <circle cx="200" cy="240" r="100" stroke="#fff" strokeWidth="1.5" fill="none" />

        {/* Overlap area - approximate with path or polygon */}
        <path
          d="M180 165
             A30 30 0 0 1 220 165
             A30 30 0 0 1 200 200
             A30 30 0 0 1 180 165
             Z"
          fill="#b19684"
          opacity="0.8"
        />

        {/* Text - BRAND */}
        <text x="100" y="130" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">BRAND</text>
        <text x="100" y="145" textAnchor="middle" fill="#b19684" fontSize="10">the essence of</text>
        <text x="100" y="155" textAnchor="middle" fill="#b19684" fontSize="10">who they are</text>

        {/* Text - GOALS */}
        <text x="300" y="130" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">GOALS</text>
        <text x="300" y="145" textAnchor="middle" fill="#b19684" fontSize="10">business</text>
        <text x="300" y="155" textAnchor="middle" fill="#b19684" fontSize="10">ambitions</text>

        {/* Text - USER */}
        <text x="200" y="270" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">USER</text>
        <text x="200" y="285" textAnchor="middle" fill="#b19684" fontSize="10">the audience’s</text>
        <text x="200" y="295" textAnchor="middle" fill="#b19684" fontSize="10">needs</text>

        {/* Bottom text */}
        <circle cx="120" cy="360" r="3" fill="#b19684" />
        <text x="200" y="370" textAnchor="middle" fill="#b19684" fontSize="12">FIND THE OVERLAP</text>
      </svg>
  );
};

export default VennDiagram;
