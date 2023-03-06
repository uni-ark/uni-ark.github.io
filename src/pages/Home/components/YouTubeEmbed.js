import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import { Row, Col, Container } from 'react-bootstrap';
import '../src/css/youtubeembed.css'

class YoutubeEmbed extends Component {
    render() {
        return (
            <div className="video-responsive">
                <iframe
                    width="800"
                    height="400"
                    src="https://www.youtube.com/embed/sB5PPu6wMqM"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                />
            </div>
        );
    }
}

export default YoutubeEmbed;
