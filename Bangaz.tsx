import React, { useState, useRef } from 'react';
import MidiSelector from '../latest/MidiSelector';
import EmanatorCanvas from '../latest/EmanatorCanvas';
import type { EmanatorCanvasHandle } from '../latest/EmanatorCanvas';
import LatestDemoBangaz from '../src/components/LatestDemoBangaz';
import MidiKeyboard from '../src/components/MidiKeyboard';

// Extend window type for inlet_5_emanator
declare global {
    interface Window {
        inlet_5_emanator?: string;
    }
}

const NUM_CANVASES = 10; // Easily changeable for arbitrary number

const Bangaz: React.FC = () => {
    // Store MIDI data in state
    const [midiData, setMidiData] = useState<{ note: number; velocity: number; isCC: boolean } | null>(null);
    // Array of refs for EmanatorCanvas, initialized once
    const refsArray: React.RefObject<EmanatorCanvasHandle | null>[] = Array.from({ length: NUM_CANVASES }, () => React.createRef<EmanatorCanvasHandle>());
    const arpyCanvasRefs = useRef(refsArray);
    // Handler for note on
    const handleNoteOn = (note: number, velocity: number) => {
        window.inlet_5_emanator = '1';
        setMidiData({ note, velocity, isCC: false });
        arpyCanvasRefs.current.forEach(ref => {
            if (ref.current) {
                ref.current.callKasmFunction('update_canvas_data', { pitch: note, velocity, cc: false });
                ref.current.postHello();
            }
        });
    };
    // Handler for note off
    const handleNoteOff = (note: number) => {
        setMidiData({ note, velocity: 0, isCC: false });
        arpyCanvasRefs.current.forEach(ref => {
            if (ref.current) {
                ref.current.callKasmFunction('update_canvas_data', { pitch: note, velocity: 0, cc: false });
            }
        });
    };
    return (
        <div className="kasm-landing-container">
            <h1 className="main-title">Bangaz Drum Pattern Browser and Editor</h1>
            <p>
                Bangaz are a collection step sequences meant to be played out General MIDI Drum kits and Ableton Drum Racks
                Drum patterns are effectively emanators, where the current step is expected to map musically and consistently
                over time</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', margin: '16px 0' }}>
                <button
                    className="kasm-demo-btn"
                    title="Download this LFO as Ableton Live 12.2 M4L device"
                    onClick={() => {
                        const link = document.createElement('a');
                        link.href = '/latest/Kasm%20Bangaz.amxd';
                        link.download = 'Kasm%20Bangaz.amxd';
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                    }}
                >
                    ⬇️<br/>Kasm Bangaz.amxd
                </button>
            </div>

            <LatestDemoBangaz />

            <p>
                Pattern gallery/browser<br/>
                {arpyCanvasRefs.current.map((ref, idx) => (
                    <EmanatorCanvas
                        key={idx}
                        ref={ref}
                        title={`Bangaz Canvas ${idx + 1}`}
                        midiData={midiData}
                    />
                ))}
            </p>
            <MidiSelector/>
            <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
                <MidiKeyboard onNoteOn={handleNoteOn} onNoteOff={handleNoteOff} />
            </div>
        </div>
    );
};


export default Bangaz;
