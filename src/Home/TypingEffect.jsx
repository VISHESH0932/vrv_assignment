import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypingEffect = ({ strings, typeSpeed, backSpeed, backDelay, loop }) => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings,
      typeSpeed,
      backSpeed,
      backDelay,
      loop,
    });

    return () => {
      typed.destroy();
    };
  }, [strings, typeSpeed, backSpeed, backDelay, loop]);

  return <span ref={el} />;
};

export default TypingEffect;
