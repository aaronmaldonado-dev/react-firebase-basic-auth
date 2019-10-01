import React from 'react';

const SamplePage = ({ match }) => (
    <div>
        <h1>{match.params.title ? match.params.title : 'home-page'}</h1>
    </div>
);

export default SamplePage;