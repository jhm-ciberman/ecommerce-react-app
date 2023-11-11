import { useEffect, useState } from "react";

export default function TypewriterText({
    phrases,
    characterDelay = 100,
    removeCharacterDelay = 50,
    phraseDelay = 1500,
}) {
    const [state, setState] = useState('writing'); // 'writing' | 'waiting' | 'removing' | 'done'
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [characterIndex, setCharacterIndex] = useState(0);

    useEffect(() => {
        const currentPhrase = phrases[phraseIndex];
        const i = characterIndex;

        function handleWriting() {
            if (i < currentPhrase.length) {
                const timeoutId = setTimeout(() => {
                    setCharacterIndex(i + 1);
                }, characterDelay);

                return () => clearTimeout(timeoutId);
            } else {
                // If we are in the last phrase, we are done. Otherwise, we wait for a while and then start removing
                if (phraseIndex === phrases.length - 1) {
                    setState('done');
                } else {
                    setState('waiting');
                }
            }

            return () => { };
        }

        function handleWaiting() {
            const timeoutId = setTimeout(() => {
                setState('removing');
            }, phraseDelay);

            return () => clearTimeout(timeoutId);
        }

        function handleRemoving() {
            if (i > 0) {
                const timeoutId = setTimeout(() => {
                    setCharacterIndex(i - 1);
                }, removeCharacterDelay);

                return () => clearTimeout(timeoutId);
            }

            // Next phrase
            setState('writing');
            setPhraseIndex(phraseIndex + 1);
        }

        function handleDone() {
            return () => { };
        }

        return {
            writing: handleWriting,
            waiting: handleWaiting,
            removing: handleRemoving,
            done: handleDone,
        }[state]();
    }, [state, phraseIndex, characterIndex, phrases, characterDelay, removeCharacterDelay, phraseDelay]);


    const currentText = (characterIndex > 0)
        ? phrases[phraseIndex].slice(0, characterIndex)
        : <span aria-hidden="true" className="text-transparent">_</span>; // Empty element with transparent text to keep the height of the text element and avoid layout shifts

    return (<> {currentText} </>);
}
