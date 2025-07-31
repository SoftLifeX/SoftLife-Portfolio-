"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { reviewItems } from "./constants";

gsap.registerPlugin(ScrollTrigger);

export default function Reviews() {
  const cardsRef = useRef([]);
  const stickyHeaderRef = useRef(null);
  const stickySectionRef = useRef(null);

  useEffect(() => {
    const stickyHeight = window.innerHeight * 5;

    // You can adjust transforms or remove if you want simpler movement
    const transforms = [
      [
        [10, 50, -10, 10],
        [20, -10, -45, 10],
      ],
      [
        [0, 47.5, -10, 15],
        [-25, 15, -45, 30],
      ],
      [
        [0, 52.5, -10, 5],
        [15, -5, -40, 60],
      ],
      [
        [10, 50, -10, 10],
        [20, -10, -45, 90],
      ],
      [
        [0, 55, -15, 30],
        [25, -15, 60, 120],
      ],
    ];

    const trigger = ScrollTrigger.create({
      trigger: stickySectionRef.current,
      start: "top top",
      end: `+=${stickyHeight}px`,
      pin: true,
      pinSpacing: true,
      onUpdate: (self) => {
        const progress = self.progress;

        if (stickyHeaderRef.current) {
          const maxTranslate =
            stickyHeaderRef.current.offsetWidth - window.innerWidth;
          const translateX = -progress * maxTranslate;
          gsap.set(stickyHeaderRef.current, { x: translateX });
        }

        cardsRef.current.forEach((card, index) => {
          const delay = index * 0.1125;
          const cardProgress = Math.max(0, Math.min((progress - delay) * 2, 1));

          if (cardProgress > 0) {
            const cardStartX = 25;
            const cardEndX = -650;
            const yPos = transforms[index]?.[0] || [0];
            const rotations = transforms[index]?.[1] || [0];

            const cardX = gsap.utils.interpolate(cardStartX, cardEndX, cardProgress);
            const yProgress = cardProgress * 3;
            const yIndex = Math.min(Math.floor(yProgress), yPos.length - 2);
            const yInterpolation = yProgress - yIndex;

            const cardY = gsap.utils.interpolate(
              yPos[yIndex],
              yPos[yIndex + 1],
              yInterpolation
            );
            const cardRotation = gsap.utils.interpolate(
              rotations[yIndex],
              rotations[yIndex + 1],
              yInterpolation
            );

            gsap.set(card, {
              xPercent: cardX,
              yPercent: cardY,
              rotation: cardRotation,
              opacity: 1,
            });
          } else {
            gsap.set(card, { opacity: 0 });
          }
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <section className="reviews-section" id="reviews" ref={stickySectionRef}>
     <h5>Top Reviews</h5>
      <div className="sticky-header" ref={stickyHeaderRef}>
        <h2 className="header-text">What Our Clients Our Saying!</h2>
      </div>

      {reviewItems.map((review, index) => (
        <div
          key={review.id}
          className="review-card"
          ref={(el) => (cardsRef.current[index] = el)}
        >
          <p className="review-text">{review.text}</p>
          <h3 className="review-name">{review.name}</h3>
          <p className="review-role">{review.role}</p>
        </div>
      ))}
    </section>
  );
}
