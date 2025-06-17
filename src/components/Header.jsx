import logo from './../assets/logo.png';


const Header = () => {
  return (
    <div className='bg-blue-50 bg-gradient-to-b from-blue-700 px-10 pt-5 pb-3 flex justify-evenly'>
         <h1 className='font-bold text-2xl text-blue-900'><img src={logo} alt='logo' className='w-[40px] inline'/> SplitEase</h1>
         <select className='text-blue-900 font-bold '>
            <option value="english">English</option>
            <option value="hindi">Hindi</option>
         </select>
    </div>
  )
}

export default Header