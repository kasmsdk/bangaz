import React from 'react';

const Bangaz: React.FC = () => {
    return (
        <div className="bangaz-main-ui" data-testid="bangaz-root" style={{ padding: '2em' }}>
            <h1 style={{ fontSize: '2.5em', marginBottom: '0.5em' }}>Bangaz MIDI Arpeggiator Editor</h1>
            <p style={{ marginBottom: '2em' }}>
                WebMIDI Bangaz Drum Pattern Browser and Editor Tool.<br />
                <em>Mechanism to view drum sequences and edit them coming soon...</em>
            </p>
        </div>
    );
};

export default Bangaz;
