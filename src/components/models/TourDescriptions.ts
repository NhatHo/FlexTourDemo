/**
 * Created by NhatHo on 2016-07-03.
 */

export interface TourDescriptions {
    tours: TourDescription[];
}

export interface TourDescription {
    id: string;
    title: string;
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

interface StepDescription {
    content: string;
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

interface TransitionDesc {
    title: string;
    content: string;
}