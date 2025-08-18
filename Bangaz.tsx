import React from 'react';
import MidiSelector from '../components/MidiSelector';

const Bangaz: React.FC = () => {
    return (
        <div style={{ padding: '2em' }}>
            <h1>Bangaz Drum Pattern Browser and Editor</h1>
            <p className="sunken-paragraph">
                Bangaz are a collection step sequences meant to be played out General MIDI Drum kits and Ableton Drum Racks
                Drum patterns are effectively emanators, where the current step is expected to map musically and consistently
                over time</p>
            <p className="sunken-paragraph">
                Bangaz drum pattern browser/gallery and web based pattern edit tools are coming here soon...</p>
            <div style={{ margin: '20px 0' }}>
                <div>
                    Connect to your MIDI device... (you might need a <a href="https://help.ableton.com/hc/en-us/articles/209774225-Setting-up-a-virtual-MIDI-bus" target="_blank">virtual MIDI bus</a>)
                    <MidiSelector />
                </div>
            </div>
            <div style={{ marginTop: '2rem', width: '100%', display: 'flex', justifyContent: 'center' }}>
                <iframe
                    src="https://kasmsdk.github.io/latest/bangaz.html"
                    title="Kasm Demo"
                    width="90%"
                    height="1024"
                    style={{ border: '2px solid #ccc', borderRadius: '12px', boxShadow: '0 2px 16px rgba(0,0,0,0.12)' }}
                    allowFullScreen
                />
            </div>

        </div>
    );
};

export default Bangaz;
