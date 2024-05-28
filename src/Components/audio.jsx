import React from 'react'
import { useState } from 'react';

const Audio = () => {
    const [audioFile, setAudioFile] = useState(null);
    const [submittedAudioData, setSubmittedAudioData] = useState("");
    const [name, setName] = useState("");

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setAudioFile(file);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (audioFile) {
            const reader = new FileReader();
            reader.onload = function(event) {
                const audioData = event.target.result;
                setSubmittedAudioData(audioData);
            };
            reader.readAsDataURL(audioFile);
        }
    };

    return (
        <div className="qr-code-form">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Upload Your Music</label>
                    <input
                        type="file"
                        accept="audio/*"
                        onChange={handleFileChange}
                    />
                </div>
                <div className="form-group">
                    <label>Name your QR (optional)</label>
                    <input
                        type="text"
                        placeholder="Name your QR (optional)"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <input type="submit" value="Generate QR Code" />
            </form>
            {submittedAudioData && (
                <div>
                    <p>Generated Audio QR Code:</p>
                    <audio controls>
                        <source src={submittedAudioData} type="audio/mpeg" />
                        Your browser does not support the audio element.
                    </audio>
                    {name && (
                        <p>{name}</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default Audio;
