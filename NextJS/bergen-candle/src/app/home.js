import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
    return (
        <main className="l-site__main">
            <section className="info-section">
                <div className="info-section__content-area">
                    <h2>Butikk</h2>
                    <p>Du finner et stort utvalg av håndlagde lys i alle regnbuens farger på lysstølperiet vårt i
                        Steinkjellergaten. Vi selger kronelys, kulelys, samt lys i flere uvanlige former. Vi lager for
                        eksempel lys i formen av husene på Bryggen, som blir perfekte suvenirer fra en tur til Bergen.
                        Stikk innom for å se vår flotte utstilling!</p>
                    <h3>Adresse</h3>
                    <p>Du finner oss på Steinkjellergaten 9, 5003 Bergen (<a
                        href="https://maps.app.goo.gl/tKqvShpJTJPaLBSC8">Se i kart</a>)</p>
                    <h3>Åpningstider</h3>
                    <dl className="info-list">
                        <dt className="info-list__label">Mandag:</dt>
                        <dd className="info-list__value">Stengt</dd>
                        <dt className="info-list__label">Tirsdag:</dt>
                        <dd className="info-list__value">Stengt</dd>
                        <dt className="info-list__label">Onsdag:</dt>
                        <dd className="info-list__value">12 - 20</dd>
                        <dt className="info-list__label">Torsdag:</dt>
                        <dd className="info-list__value">12 - 20</dd>
                        <dt className="info-list__label">Fredag:</dt>
                        <dd className="info-list__value">12 - 20</dd>
                        <dt className="info-list__label">Lørdag:</dt>
                        <dd className="info-list__value">12 - 20</dd>
                        <dt className="info-list__label">Søndag:</dt>
                        <dd className="info-list__value">12 - 20</dd>
                    </dl>
                </div>
            </section>
            <section className="info-section">
                <div className="info-section__content-area">
                    <h2>Kurs</h2>
                    <p>Vi tilbyr lyslagingskurs der du kan lære flere ulike teknikker og velge mellom flotte farge,
                        dufter og former. Du kan bl.a. lage kulelys, dyppede lys og mosaikklys.</p>
                    <p>Kurset passer perfekt for utdrikningslag, teambuilding eventer, familier, eller for vennegjenger
                        som har lyst til å prøve et kreativt aktivitet sammen!</p>
                    <dl className="info-list">
                        <dt className="info-list__label">Varighet:</dt>
                        <dd className="info-list__value">3-4 timer</dd>
                        <dt className="info-list__label">Pris:</dt>
                        <dd className="info-list__value">500kr per person</dd>
                    </dl>
                    <p>Ring eller send SMS til <strong>91275525</strong> for å arrangere kurs.</p>
                </div>
            </section>
        </main>
    );
}