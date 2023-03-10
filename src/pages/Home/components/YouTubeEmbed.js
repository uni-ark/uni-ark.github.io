import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import { Row, Col, Container } from 'react-bootstrap';
import '../src/css/youtubeembed.css'

class YoutubeEmbed extends Component {
    render() {
        return (
            <div className="video-responsive">
                <iframe
                    width="100%"
                    height="400"
                    src="https://www.youtube.com/embed/sB5PPu6wMqM"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    frameborder="0"
                    allowfullscreen
                />
            </div>
        );
    }
}

export default YoutubeEmbed;
