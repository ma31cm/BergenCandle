import "../styles/components/info-list.scss";
import "../styles/components/info-section.scss";

export default function Home() {
    return (
        <main className="l-site__main">
            <section className="info-section">
                <div className="info-section__content-area">
                    <h2>Shop</h2>
                    <p>
                      Welcome to our shop on Steinkjellergaten, where you'll find vast array of handmade candles in all the
                      colours of the rainbow. We sell tall candles, round candles, as well as more unusual shapes such as
                      candles in the shape of the buildings on Bryggen - the perfect souvenir to take home from a trip to Bergen. Pop by to see our fantastic selection!
                    </p>
                    <h3>Address</h3>
                    <p>We're located at Steinkjellergaten 9, 5003 Bergen (<a
                        href="https://maps.app.goo.gl/tKqvShpJTJPaLBSC8">View
                        on map</a>)</p>
                    <h3>Opening Hours</h3>
                    <dl className="info-list">
                        <dt className="info-list__label">Monday:</dt>
                        <dd className="info-list__value">Closed</dd>
                        <dt className="info-list__label">Tuesday:</dt>
                        <dd className="info-list__value">Closed</dd>
                        <dt className="info-list__label">Wednesday:</dt>
                        <dd className="info-list__value">12pm - 8pm</dd>
                        <dt className="info-list__label">Thursday:</dt>
                        <dd className="info-list__value">12pm - 8pm</dd>
                        <dt className="info-list__label">Friday:</dt>
                        <dd className="info-list__value">12pm - 8pm</dd>
                        <dt className="info-list__label">Saturday:</dt>
                        <dd className="info-list__value">12pm - 8pm</dd>
                        <dt className="info-list__label">Sunday:</dt>
                        <dd className="info-list__value">12pm - 8pm</dd>
                    </dl>
                </div>
            </section>
            <section className="info-section">
                <div className="info-section__content-area">
                    <h2>Workshops</h2>
                    <p>We offer candle-making courses where you can learn different techniques and choose from a
                        plethora of
                        colours, scents and shapes. Amongst other things, you can make dipped candles, spherical candles
                        and
                        mosaic candles.</p>
                    <p>The course is perfectly suited to bachelor/bachelorette/hen parties, teambuilding events,
                        families, or
                        for groups of friends who'd like try a creative activity together!</p>
                    <dl className="info-list">
                        <dt className="info-list__label">Duration:</dt>
                        <dd className="info-list__value">3-4 hours</dd>
                        <dt className="info-list__label">Price:</dt>
                        <dd className="info-list__value">500kr per person</dd>
                    </dl>
                    <p>Call or send an SMS to <strong>91275525</strong> to arrange a course.</p>
                </div>
            </section>
        </main>
    );
}
