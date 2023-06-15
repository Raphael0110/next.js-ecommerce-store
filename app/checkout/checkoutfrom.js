'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from './chekoutform.module.scss';

export default function CheckoutForm() {
  const router = useRouter();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [postal, setPostal] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [creditCard, setCreditCard] = useState('');
  const [expiration, setExpiration] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    const formData = [
      firstName,
      lastName,
      email,
      address,
      postal,
      city,
      country,
      creditCard,
      expiration,
      securityCode,
    ];
    setFormValid(formData.every((formField) => formField !== ''));
  }, [
    firstName,
    lastName,
    email,
    address,
    postal,
    city,
    country,
    creditCard,
    expiration,
    securityCode,
  ]);

  return (
    <main className={styles.CheckoutFormhead}>
      <form>
        <div className={styles.firstdiv}>Please fill out the checkout:</div>

        <div className={styles.seconddiv}>
          First Name :
          <input
            className="styles.seconddivv"
            placeholder="First Name"
            value={firstName}
            onChange={(event) => setFirstName(event.currentTarget.value)}
          />
        </div>
        <section className={styles.dritterdiv}>
          Last Name :
          <input
            placeholder="Last Name"
            value={lastName}
            onChange={(event) => setLastName(event.currentTarget.value)}
          />
        </section>
        <section className={styles.vierterdiv}>
          Email :
          <input
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.currentTarget.value)}
          />
        </section>
        <section className={styles.fünfterdiv}>
          Address :
          <input
            placeholder="Address"
            value={address}
            onChange={(event) => setAddress(event.currentTarget.value)}
          />
        </section>
        <div className={styles.sechsterdiv}>
          Postal Code :
          <input
            placeholder="Postal Code"
            value={postal}
            onChange={(event) => setPostal(event.currentTarget.value)}
          />
        </div>
        <section className={styles.siebterdiv}>
          City :
          <input
            placeholder="City"
            value={city}
            onChange={(event) => setCity(event.currentTarget.value)}
          />
        </section>
        <div className={styles.achterdiv}>
          Country :
          <input
            placeholder="Country"
            value={country}
            onChange={(event) => setCountry(event.currentTarget.value)}
          />
        </div>
        <div className={styles.neunterdiv}>Payment information</div>
        <div className={styles.zenterdiv}>
          Credit Cart Number :
          <input
            placeholder="00000000000000"
            value={creditCard}
            onChange={(event) => setCreditCard(event.currentTarget.value)}
          />
        </div>
        <div className={styles.elfterdiv}>
          Expiration Date :
          <input
            placeholder="06/23"
            value={expiration}
            onChange={(event) => setExpiration(event.currentTarget.value)}
          />
        </div>
        <div className={styles.dreizenterdiv}>
          Security Code :
          <input
            placeholder="123"
            value={securityCode}
            onChange={(event) => setSecurityCode(event.currentTarget.value)}
          />
        </div>

        <div className={styles.zwölfterdiv}>
          <button
            formAction={() => {
              router.push('/Thankyou');
            }}
          >
            Confirm Order
          </button>
        </div>
      </form>
    </main>
  );
}
