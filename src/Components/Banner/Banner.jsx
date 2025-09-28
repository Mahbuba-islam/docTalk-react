import banner from '../../assets/banner-img-1.png'

const Banner = () => {
 return (
        <div className='my-12'>
             <div class="hero my-4">
  <div class="hero-content text-center">
    <div class="max-w-[290px] md:max-w-lg lg:max-w-3xl">
      <h1 class="md:text-5xl text-2xl font-bold">Dependable Care, Backed by Trusted Professionals.</h1>
      <p class="py-6 text-xs px-2">
       Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, 
       book appointments in minutes and receive quality care you can trust.
      </p>
   </div>
  </div>
</div>
  {/* banner img */}
  <div>
    <img className='mx-auto w-4xl px-4' src={banner} alt="" />
  </div>
 </div>
      
    );
};

export default Banner;