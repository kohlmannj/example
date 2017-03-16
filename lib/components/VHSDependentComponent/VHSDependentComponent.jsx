import VHS from 'vhs';

const VHSDependentComponent = () => (
    <div>
        <p>VHS is an internal video player used by The New York Times.</p>
        <p>The library is intended for use either as a global script or an AMD module. It also
            depends on VHS.</p>
        <p>Since Styleguidist cannot be configured to build an AMD module (nor would I want it
            to, we've had issues previewing components that use VHS.</p>
        <p>In the past (circa rsg <code>5.0.0-beta.13</code>), I've worked around this by configuring Styleguidist to use:</p>
        <ol>
            <li>A custom HTML template that loads jQuery and VHS via script tags</li>
            <li>A custom Webpack config that specifies <code>jquery</code> and <code>VHS</code> as <code>externals</code></li>
        </ol>
        <p>This demo compoent simply imports <code>vhs</code>; it's sufficient to demonstrate the problem.</p>
    </div>
);

export default VHSDependentComponent;
