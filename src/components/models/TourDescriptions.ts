/**
 * Created by NhatHo on 2016-07-03.
 */

export interface TourDescription {
    id: string;
    steps: StepDescription[];
    retries?: number;
    waitIntervals?: number;
    endOnEsc?: boolean;
    endOnOverlayClick?: boolean;
    delay?: number;
    transition?: TransitionDesc;
    nextButton?: string;
    backButton?: string;
    skipButton?: string;
    doneButton?: string;
}

export interface StepDescription {
    content: string;
    title?: string;
    target?: string;
    canInteract?: boolean;
    nextOnTargetClick?: boolean;
    waitIntervals?: number;
    retries?: number;
    modal?: boolean;
    scrollLock?: boolean;
    styles?: string;
    position?: string;
    prerequisites?: string[];
    type?: string;
    noBack?: boolean;
    noButtons?: boolean;
}

export interface TransitionDesc {
    title: string;
    content: string;
}