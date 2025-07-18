import React from 'react';

const DecorativeBlobs = () => {
  const isDark = typeof window !== 'undefined' && window.location.pathname === '/home-dark';
  // У світлій темі завжди рендеримо великі еліпси
  const ellipse1 = isDark
    ? { width: 93, height: 93, background: '#FFD200', opacity: 0.9 }
    : { width: 109, height: 109, background: '#FFCC06', opacity: 0.7 };
  const ellipse2 = isDark
    ? { width: 109, height: 109, background: '#FF0004', opacity: 0.9 }
    : { width: 93, height: 93, background: '#FF0004', opacity: 0.7 };

  if (!isDark) {
    return (
      <>
        <div className="pointer-events-none absolute z-0"
             style={{
               width: 109,
               height: 109,
               left: '45%',
               top: '32%',
               background: '#FFCC06',
               opacity: 0.7,
               filter: 'blur(270px)',
               borderRadius: '50%',
               position: 'absolute',
             }} />
        <div className="pointer-events-none absolute z-0"
             style={{
               width: 93,
               height: 93,
               left: '62%',
               top: '40%',
               background: '#FF0004',
               opacity: 0.7,
               filter: 'blur(290px)',
               borderRadius: '50%',
               position: 'absolute',
             }} />
      </>
    );
  }

  return (
    <>
      <div className="pointer-events-none absolute z-0"
           style={{
             width: ellipse1.width,
             height: ellipse1.height,
             left: '40%',
             top: '30%',
             background: ellipse1.background,
             opacity: ellipse1.opacity,
             filter: 'blur(120px)',
             borderRadius: '50%',
             position: 'absolute',
             display: 'block', // гарантуємо рендер
           }} />
      <div className="pointer-events-none absolute z-0"
           style={{
             width: ellipse2.width,
             height: ellipse2.height,
             left: '60%',
             top: '50%',
             background: ellipse2.background,
             opacity: ellipse2.opacity,
             filter: 'blur(120px)',
             borderRadius: '50%',
             position: 'absolute',
             display: 'block', // гарантуємо рендер
           }} />
    </>
  );
};

export default DecorativeBlobs; 