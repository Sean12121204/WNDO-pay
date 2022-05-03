import React, { FC } from 'react';
import { WNDOPayLogo } from '../images/WNDOPayLogo';
import css from './PoweredBy.module.css';

export const PoweredBy: FC = () => {
    return (
        <div className={css.root}>
            Powered by <WNDOPayLogo />
        </div>
    );
};
