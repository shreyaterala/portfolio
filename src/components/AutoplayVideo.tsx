"use client";

import React, { useRef, useEffect } from 'react';

interface AutoplayVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
    children?: React.ReactNode;
}

export default function AutoplayVideo({ children, ...props }: AutoplayVideoProps) {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Play when visible
                        // We must ensure muted is true for autoplay to work in most browsers
                        if (videoRef.current) {
                            videoRef.current.muted = true;
                            videoRef.current.play().catch((e) => {
                                // interactions-only or power-save modes might block this
                                console.warn("Autoplay prevented:", e);
                            });
                        }
                    } else {
                        // Pause when not visible
                        videoRef.current?.pause();
                    }
                });
            },
            { threshold: 0.5 } // Trigger when 50% of the video is visible
        );

        const currentVideo = videoRef.current;
        if (currentVideo) {
            observer.observe(currentVideo);
        }

        return () => {
            if (currentVideo) {
                observer.unobserve(currentVideo);
            }
        };
    }, []);

    return (
        <video
            ref={videoRef}
            muted
            playsInline
            loop
            {...props}
        >
            {children}
        </video>
    );
}
