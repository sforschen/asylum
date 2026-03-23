'use client';

import React, { useEffect, useRef } from 'react';
import styles from './cards.module.css';

type Props = {
  html?: string;
  children?: React.ReactNode;
};

export default function Cards({ html, children }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const block = ref.current;
    if (!block) return;

    // If content already transformed, skip
    if (block.querySelector('ul')) return;

    const ul = document.createElement('ul');
    Array.from(block.children).forEach((row) => {
      const li = document.createElement('li');
      while (row.firstElementChild) li.append(row.firstElementChild);
      Array.from(li.children).forEach((div) => {
        if (div.children.length === 1 && div.querySelector('picture')) {
          div.classList.add(styles.cardsCardImage);

          // overlay text
          const overlayText = document.createElement('div');
          overlayText.className = styles.overlayText;
          overlayText.textContent = 'EXPAND';
          div.appendChild(overlayText);

          const handleClick = () => {
            div.classList.toggle(styles.expanded);
            overlayText.textContent = div.classList.contains(styles.expanded) ? 'CLOSE' : 'EXPAND';
          };

          const updateEventListeners = () => {
            if (window.innerWidth > 640) {
              div.addEventListener('click', handleClick);
            } else {
              div.removeEventListener('click', handleClick);
              div.classList.add(styles.expanded);
              overlayText.style.display = 'none';
            }
          };

          updateEventListeners();
          window.addEventListener('resize', updateEventListeners);
        } else {
          div.classList.add(styles.cardsCardBody);
        }
      });
      ul.append(li);
    });

    // replace content with transformed list
    block.textContent = '';
    block.append(ul);
  }, [html, children]);

  return (
    <div ref={ref} className={styles.cards} dangerouslySetInnerHTML={html ? { __html: html } : undefined}>
      {!html && children}
    </div>
  );
}
