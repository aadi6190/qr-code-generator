import React, { useState } from 'react';

const MapForm = () => {
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [submittedMapData, setSubmittedMapData] = useState("");
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const mapData = `https://www.google.com/maps?q=${latitude},${longitude}`;
        setSubmittedMapData(mapData);
    };

    return (
        <div className="qr-code-form">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Latitude</label>
                    <input
                        type="text"
                        value={latitude}
                        placeholder="Enter latitude"
                        required
                        onChange={(e) => setLatitude(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Longitude</label>
                    <input
                        type="text"
                        value={longitude}
                        placeholder="Enter longitude"
                        required
                        onChange={(e) => setLongitude(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Name your Map (optional)</label>
                    <input
                        type="text"
                        placeholder="Name your Map (optional)"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <input type="submit" value="Generate Map Link" />
            </form>
            {submittedMapData && (
                <div>
                    <p>Generated Map Link:</p>
                    <a href={submittedMapData} target="_blank" rel="noopener noreferrer">{submittedMapData}</a>
                    {name && (
                        <p>{name}</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default MapForm;
