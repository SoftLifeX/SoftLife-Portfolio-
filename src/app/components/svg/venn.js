import * as React from "react";

const VennDiagram = (props) => (
      <svg width="" height="" viewBox="0 0 700 700">
        {/* Circles */}
        <circle id="venncircle" cx="182" cy="182" r="130" stroke="" strokeWidth="1.5" fill="none" />
        <circle id="venncircle" cx="338" cy="182" r="130" stroke="" strokeWidth="1.5" fill="none" />
        <circle id="venncircle" cx="260" cy="312" r="130" stroke="" strokeWidth="1.5" fill="none" />

        {/* Overlap area - approximate with path or polygon */}
        <path
          id="vennmid" 
          d="M180 165
             A30 30 0 0 1 220 165
             A30 30 0 0 1 200 200
             A30 30 0 0 1 180 165
             Z"
          fill=""
          opacity="1"
        />

        {/* Text - BRAND */}
        <text id="venntext" x="100" y="130" textAnchor="middle" fill="" fontSize="14" fontWeight="bold">BRANDS</text>
        
        {/* Text - PERFORMANCE */}
        <text id="venntext" x="300" y="130" textAnchor="middle" fill="" fontSize="14" fontWeight="bold">PERFORMANCE</text>
        
        {/* Text - AESTHETICS */}
        <text id="venntext" x="200" y="270" textAnchor="middle" fill="" fontSize="14" fontWeight="bold">AESTHETICS</text>
        
        {/* Bottom text */}
        <circle id="vennline" cx="120" cy="360" r="3" fill="" />
        <text id="venntext" x="200" y="370" textAnchor="middle" fill="" fontSize="12">FIND THE OVERLAP</text>
      </svg>
);

export default VennDiagram;
