import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



const URLLink = () => {
    const [url, setUrl] = useState("");
    const [submittedUrl, setSubmittedUrl] = useState("");
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedUrl(url);
    };

    return (
        <div className="qr-code-form">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Put your link here</label>
                    <input
                        type="url"
                        value={url}
                        placeholder="Put your link here"
                        required
                        onChange={(e) => setUrl(e.target.value)}
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
                <input type="submit" value="Generate QR Code" className='btn' />
            </form>
            {submittedUrl && (
                <div className='qr'>
                    <img
                        src={`https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(submittedUrl)}`}
                        alt="QR Code"
                    />
                    {name && (
                        <p>{name}</p>
                    )}
                </div>
            )}
        </div>
     
    );
};

const TextForm = () => {
    const [text, setText] = useState("");
    const [submittedText, setSubmittedText] = useState("");
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedText(text);
    };

    return (
        <div className="qr-code-form">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Enter your text</label>
                    <input
                        value={text}
                        placeholder="Enter your text"
                        required
                        onChange={(e) => setText(e.target.value)}
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
                <input type="submit" value="Generate QR Code" className='btn' />
            </form>
            {submittedText && (
                <div className='qr'>
                    <img
                        src={`https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(submittedText)}`}
                        alt="QR Code"
                    />
                    {name && (
                        <p>{name}</p>
                    )}
                </div>
            )}
        </div>
            
    );
};

// Similar components for MapForm, WiFiForm, AudioForm, PDFForm, WhatsAppForm
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
                <input type="submit" value="Generate Map Link"  className='btn'/>
            </form>
            {submittedMapData && (
                <div className='qr'>
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
const WiFiForm = () => {
    const [networkName, setNetworkName] = useState("");
    const [password, setPassword] = useState("");
    const [encryption, setEncryption] = useState("None");
    const [submittedWiFiData, setSubmittedWiFiData] = useState("");
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const wifiData = `WIFI:S:${networkName};T:${encryption};P:${password};;`;
        setSubmittedWiFiData(wifiData);
    };

    return (
        <div className="qr-code-form">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Network Name (SSID)</label>
                    <input
                        type="text"
                        value={networkName}
                        placeholder="Enter network name"
                        required
                        onChange={(e) => setNetworkName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        placeholder="Enter password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Encryption</label>
                    <div>
                        <label>
                            <input
                                type="radio"
                                value="None"
                                checked={encryption === "None"}
                                onChange={() => setEncryption("None")}
                            />
                            None
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="WPA/WPA2"
                                checked={encryption === "WPA/WPA2"}
                                onChange={() => setEncryption("WPA/WPA2")}
                            />
                            WPA/WPA2
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="WEP"
                                checked={encryption === "WEP"}
                                onChange={() => setEncryption("WEP")}
                            />
                            WEP
                        </label>
                    </div>
                </div>
                <div className="form-group">
                    <label>Name your WiFi QR (optional)</label>
                    <input
                        type="text"
                        placeholder="Name your WiFi QR (optional)"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <input type="submit" value="Generate WiFi QR Code" className='btn' />
            </form>
            {submittedWiFiData && (
                <div className='qr'>
                    <p>Generated WiFi QR Code:</p>
                    <img
                        src={`https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(submittedWiFiData)}`}
                        alt="WiFi QR Code"
                    />
                    {name && (
                        <p>{name}</p>
                    )}
                </div>
            )}
        </div>
    );
};
const AudioForm = () => { const [audioFile, setAudioFile] = useState(null);
    const [submittedAudioData, setSubmittedAudioData] = useState("");
    const [submittedQRCode, setSubmittedQRCode] = useState("");
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
                // Generate QR Code for audio file link
                const qrCodeData = `data:audio/mpeg;base64,${btoa(audioData)}`;
                setSubmittedQRCode(qrCodeData);
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
                <input type="submit" value="Generate QR Code"  className='btn'/>
            </form>
            {submittedAudioData && (
                <div className='qr'>
                    <p>Generated Audio QR Code:</p>
                    <audio controls>
                        <source src={submittedAudioData} type="audio/mpeg" />
                        Your browser does not support the audio element.
                    </audio>
                    {submittedQRCode && (
                        <img src={`https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(submittedQRCode)}`} alt="Audio QR Code" />
                    )}
                    {name && (
                        <p>{name}</p>
                    )}
                </div>
            )}
        </div>
    );
};
const PDFForm = () => { /* Similar structure to URLLink and TextForm */ };
const WhatsAppForm = () => {  const [whatsappLink, setWhatsappLink] = useState("");
const [submittedWhatsAppLink, setSubmittedWhatsAppLink] = useState("");
const [name, setName] = useState("");

const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedWhatsAppLink(whatsappLink);
};

return (
    <div className="qr-code-form">
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>WhatsApp Link</label>
                <input
                    type="text"
                    value={whatsappLink}
                    placeholder="Enter WhatsApp link"
                    required
                    onChange={(e) => setWhatsappLink(e.target.value)}
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
            <input type="submit" value="Generate QR Code" className='btn' />
        </form>
        {submittedWhatsAppLink && (
            <div className='qr'>
                <p>Generated WhatsApp QR Code:</p>
                <img
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(submittedWhatsAppLink)}`}
                    alt="WhatsApp QR Code"
                />
                {name && (
                    <p>{name}</p>
                )}
            </div>
        )}
    </div>
); };

const Main = () => {
    return (
        <Router>
            <div className="tab-selector">
                <a href="/url-link">URL / Link</a>
                <a href="/whatsapp">WhatsApp</a>
                <a href="/text">Text</a>
                <a href="/map">Map</a>
                <a href="/wifi">Wi-Fi</a>
           
                <a href="/audio">Audio</a>
            </div>

            <Routes>
                <Route path="/url-link" element={<URLLink />} />
                <Route path="/text" element={<TextForm />} />
                <Route path="/map" element={<MapForm />} />
                <Route path="/wifi" element={<WiFiForm />} />
                <Route path="/audio" element={<AudioForm />} />
                <Route path="/pdf" element={<PDFForm />} />
                <Route path="/whatsapp" element={<WhatsAppForm />} />
                <Route path="/" element={<URLLink />} />
            </Routes>
        </Router>
        
    );

};

export default Main;
