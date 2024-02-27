import React from 'react';
import css from 'styles/Section.module.css'; // Import the 'css' module

export const Section = ({ title, children }) => {
    return (
        <section>
            <h2 className={css.heading}>{title}</h2>
            {children}
        </section>
    );
}