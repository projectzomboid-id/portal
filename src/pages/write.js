import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';


export default function Write() {
    return (
    <Layout title="Write Contribute" description="Contribute IPZ Portal page">
        <div
            className='Contribute'
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '120vh',
                fontSize: '20px',
            }}>
                <iframe width="1350" height="720" src="https://dillinger.io/" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </Layout>
    );
}