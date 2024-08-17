import spinner from './assets/spinner (1).gif';

function Spinner() {
  return (
    <div className='mt-20'>
      <img
        width={180}
        className='text-center mx-auto'
        src={spinner}
        alt='Loading...'
      />
    </div>
  );
}

export default Spinner;
