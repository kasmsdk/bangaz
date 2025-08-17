import React from 'react';
import MidiSelector from '../components/MidiSelector';

const Bangaz: React.FC = () => {
    return (
        <div style={{ padding: '2em' }}>
            WebMIDI Bangaz Drum Pattern Browser and Editor Tool.<br />
            <div style={{ margin: '20px 0' }}>
                <div>
                    Connect to your MIDI device... (you might need a <a href="https://help.ableton.com/hc/en-us/articles/209774225-Setting-up-a-virtual-MIDI-bus" target="_blank">virtual MIDI bus</a>)
                    <MidiSelector />
                </div>
            </div>
        </div>
    );
};

export default Bangaz;
