import React, { useEffect, useRef, useState } from 'react';
import { tw } from 'twind';

import { ToggleProps } from './toggle.definition';

import * as S from './toggle.styles';

export const Toggle = ({
    onChange,
    name,
    active,
}: ToggleProps): React.ReactElement<ToggleProps> => {
    const spanRef = useRef<HTMLSpanElement>(null);

    const [isActive, setIsActive] = useState<boolean>(active);

    const onToggle = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        event.stopPropagation();

        setIsActive(isActive ? false : true);
    };

    useEffect(() => {
        onChange(spanRef);
    }, [isActive]);

    return (
        <div className={tw(S.ContainerCss)}>
            <label className={tw(S.ToggleCss)} onClick={onToggle}>
                <span
                    className={tw(S.SpanCss, S.SpanStyles)}
                    data-active={isActive}
                    data-name={name}
                    ref={spanRef}
                />
            </label>
        </div>
    );
};
