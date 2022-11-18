import logo from './logo.svg';
import './App.css';

function App() {
  let data = [{
    name : "திருவிளையாடல்",
    rating : "10/10",
    pic : "https://www.cinemaazi.com/uploads/film/thiruvaidayal.jpg",
    details : "திருவிளையாடல் 1965 ஆம் ஆண்டு வெளிவந்த தமிழ்த் திரைப்படமாகும். இத்திரைப்படம் திருவிளையாடல் புராணம் எனும் புகழ் பெற்ற சைவ இலக்கியத்தை அடிப்படையாகக் கொண்டது."
    
   },
   {
    name : "கந்தன் கருணை",
    rating : "9/10",
    pic : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXQLz-xzRzGrH8xpIOqUwspXuPvfBl8xscTw&usqp=CAU",
    details : "முருகக் கடவுளின் பிறப்பு, அவர் சிறுவனாயிருந்தபோது ஒரு மாம்பழத்துக்காகக் கோபித்துக் கொண்டு பழனிமலை சென்றது, சூரபதுமன் வதம், தெய்வயானை மற்றும் வள்ளியுடனான திருமணம் ஆகிய கந்தபுராண நிகழ்வுகளைக் கதைக்கருவாகக் கொண்டு எடுக்கப்பட்டத் திரைப்படம் ஆகும்."
    
   },
   {
    name : "தசாவதாரம்",
    rating : "8.5/10",
    pic : "https://1601606126.rsc.cdn77.org/raagaimg/r_img/250/t/td02012.jpg",
    details : "தசாவதாரம், 'பத்து அவதாரங்கள்', விஷ்ணுவின் அருளால் நீங்கள் எவ்வளவு தூரம் அடையலாம் என்பதைப் பற்றிய ஒரு எழுத்துப் பிணைப்புக் கதையைச் சொல்கிறது."
    
   },
   {
    name : "சக்தி லீலை",
    rating : "8/10",
    pic : "https://upload.wikimedia.org/wikipedia/en/9/93/Shakthi_Leelai.jpg",
    details : "சக்தி லீலை என்பது 1972ஆவது ஆண்டில் டி. ஆர். ராமண்ணா இயக்கத்தில் வெளியான ஒரு இந்தியத் தமிழ்த் திரைப்படமாகும். இப்படத்தில் ஜெமினி கணேசன், ஜெயலலிதா, கே. பி. சுந்தராம்பாள், உஷா நந்தினி ஆகியோர் முக்கிய கதாபாத்திரங்களில் நடித்திருந்தனர்."
    
   }

   ]
  
  return (
    
    <div className='App'>      
   {data.map(movie=> <User mpic={movie.pic} mname={movie.name} rating={movie.rating} mdetails={movie.details}/>)}
   </div>
  );  
}
function User({mpic,mname,rating,mdetails}) {
  
  return ( 
    <section className='box'>        
          <img className='movie-pic' src={mpic} alt="movie pic"></img>
          <h3 className='movie-name'>{mname}<span>&nbsp;&#11088;&nbsp;{rating}</span></h3>
          <p className='movie-details'>{mdetails}</p>        
     </section> 

  );          

}

export default App;
