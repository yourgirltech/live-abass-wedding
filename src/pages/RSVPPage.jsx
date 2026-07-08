import RSVPForm from '../components/RSVPForm';
import Nav from '../components/Nav';

export default function RSVPPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: 0 }}>
        <RSVPForm />
      </main>
    </>
  );
}