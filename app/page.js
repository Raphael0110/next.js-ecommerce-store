import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.scss';

export default function HomePage() {
  return (
    <main>
      <div className={styles.home}>
        <section className={styles.aboutmepierre}>
          <h1>About Me</h1>
          <div className={styles.aboutmetext}>
            <p>
              Hello there, I'm Pierre, the proud owner of Pierre's Store.
              Welcome to my litte little online store!
            </p>
            <br />
            <p>
              Ever since I took over the family business, my goal has been to
              provide the finest quality goods to the hardworking villagers of
              Pelican Town. Whether you need fresh produce, seeds, or farming
              supplies, you can count on Pierre's Store to meet your needs.
            </p>
            <br />
            <p>
              When I'm not running the store, you'll often find me tending to my
              own farm. I take pride in growing the best crops around and
              experimenting with new varieties. It's a joy to see the fruits of
              my labor flourish and bring happiness to the community.
            </p>
            <br />
            <p>
              So, drop by Pierre's General Store, and let me assist you in
              making your farm a thriving success. I'm here to support your
              journey as a dedicated farmer!
            </p>
          </div>
        </section>
        <div className={styles.Imagebox}>
          <Image
            className={styles.pierrehomepage}
            src="/Pierre.png"
            alt="shop owner"
            width="250"
            height="250"
          />
        </div>
      </div>
    </main>
  );
}
