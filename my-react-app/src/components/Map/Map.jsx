
import WorldMap from 'react-svg-worldmap';
import './Map.css'
import { useNavigate } from 'react-router-dom';
import Offers from '../../pages/Offers/Offers';

function Map() {
    const navigate = useNavigate();
    const data = [
  
        { country: "dz", value: 1 }, // Algeria
        { country: "ao", value: 1 }, // Angola
        { country: "bj", value: 1 }, // Benin
        { country: "bw", value: 1 }, // Botswana
        { country: "bf", value: 1 }, // Burkina Faso
        { country: "bi", value: 1 }, // Burundi
        { country: "cv", value: 1 }, // Cabo Verde
        { country: "cm", value: 1 }, // Cameroon
        { country: "cf", value: 1 }, // Central African Republic
        { country: "td", value: 1 }, // Chad
        { country: "km", value: 1 }, // Comoros
        { country: "cd", value: 1 }, // Democratic Republic of the Congo
        { country: "dj", value: 1 }, // Djibouti
        { country: "eg", value: 1 }, // Egypt
        { country: "gq", value: 1 }, // Equatorial Guinea
        { country: "er", value: 1 }, // Eritrea
        { country: "sz", value: 1 }, // Eswatini (formerly Swaziland)
        { country: "et", value: 1 }, // Ethiopia
        { country: "ga", value: 1 }, // Gabon
        { country: "gm", value: 1 }, // Gambia
        { country: "gh", value: 1 }, // Ghana
        { country: "gn", value: 1 }, // Guinea
        { country: "gw", value: 1 }, // Guinea-Bissau
        { country: "ci", value: 1 }, // Ivory Coast
        { country: "ke", value: 1 }, // Kenya
        { country: "ls", value: 1 }, // Lesotho
        { country: "lr", value: 1 }, // Liberia
        { country: "ly", value: 1 }, // Libya
        { country: "mg", value: 1 }, // Madagascar
        { country: "mw", value: 1 }, // Malawi
        { country: "ml", value: 1 }, // Mali
        { country: "mr", value: 1 }, // Mauritania
        { country: "mu", value: 1 }, // Mauritius
        { country: "ma", value: 1 }, // Morocco
        { country: "mz", value: 1 }, // Mozambique
        { country: "na", value: 1 }, // Namibia
        { country: "ne", value: 1 }, // Niger
        { country: "ng", value: 1 }, // Nigeria
        { country: "rw", value: 1 }, // Rwanda
        { country: "st", value: 1 }, // Sao Tome and Principe
        { country: "sn", value: 1 }, // Senegal
        { country: "sc", value: 1 }, // Seychelles
        { country: "sl", value: 1 }, // Sierra Leone
        { country: "so", value: 1 }, // Somalia
        { country: "za", value: 1 }, // South Africa
        { country: "ss", value: 1 }, // South Sudan
        { country: "sd", value: 1 }, // Sudan
        { country: "tz", value: 1 }, // Tanzania
        { country: "tg", value: 1 }, // Togo
        { country: "tn", value: 1 }, // Tunisia
        { country: "ug", value: 1 }, // Uganda
        { country: "zm", value: 1 }, // Zambia
        { country: "zw", value: 1 } , // Zimbabwe
        { country: "cg", value: 1 }, // Republic of the Congo
        { country: "eh", value: 1 }, // Republic of the Congo
  

          { country: "al", value: 2 }, // Albania
          { country: "ad", value: 2 }, // Andorra
          { country: "am", value: 2 }, // Armenia
          { country: "at", value: 2 }, // Austria
          { country: "az", value: 2 }, // Azerbaijan
          { country: "by", value: 2 }, // Belarus
          { country: "be", value: 2 }, // Belgium
          { country: "ba", value: 2 }, // Bosnia and Herzegovina
          { country: "bg", value: 2 }, // Bulgaria
          { country: "hr", value: 2 }, // Croatia
          { country: "cy", value: 2 }, // Cyprus
          { country: "cz", value: 2 }, // Czech Republic
          { country: "dk", value: 2 }, // Denmark
          { country: "ee", value: 2 }, // Estonia
          { country: "fi", value: 2 }, // Finland
          { country: "fr", value: 2 }, // France
          { country: "ge", value: 2 }, // Georgia
          { country: "de", value: 2 }, // Germany
          { country: "gr", value: 2 }, // Greece
          { country: "hu", value: 2 }, // Hungary
          { country: "is", value: 2 }, // Iceland
          { country: "ie", value: 2 }, // Ireland
          { country: "it", value: 2 }, // Italy
          { country: "kz", value: 2 }, // Kazakhstan
          { country: "kg", value: 2 }, // Kyrgyzstan
          { country: "lv", value: 2 }, // Latvia
          { country: "lt", value: 2 }, // Lithuania
          { country: "lu", value: 2 }, // Luxembourg
          { country: "mt", value: 2 }, // Malta
          { country: "md", value: 2 }, // Moldova
          { country: "mc", value: 2 }, // Monaco
          { country: "me", value: 2 }, // Montenegro
          { country: "nl", value: 2 }, // Netherlands
          { country: "mk", value: 2 }, // North Macedonia
          { country: "no", value: 2 }, // Norway
          { country: "pl", value: 2 }, // Poland
          { country: "pt", value: 2 }, // Portugal
          { country: "ro", value: 2 }, // Romania
          { country: "ru", value: 2 }, // Russia
          { country: "sm", value: 2 }, // San Marino
          { country: "rs", value: 2 }, // Serbia
          { country: "sk", value: 2 }, // Slovakia
          { country: "si", value: 2 }, // Slovenia
          { country: "es", value: 2 }, // Spain
          { country: "se", value: 2 }, // Sweden
          { country: "ch", value: 2 }, // Switzerland
          { country: "tj", value: 2 }, // Tajikistan
          { country: "tr", value: 2 }, // Turkey
          { country: "tm", value: 2 }, // Turkmenistan
          { country: "ua", value: 2 }, // Ukraine
          { country: "gb", value: 2 }, // United Kingdom
          { country: "uz", value: 2 }, // Uzbekistan

          
              { country: "ar", value: 3 }, // Argentina
              { country: "bo", value: 3 }, // Bolivia
              { country: "br", value: 3 }, // Brazil
              { country: "cl", value: 3 }, // Chile
              { country: "co", value: 3 }, // Colombia
              { country: "ec", value: 3 }, // Ecuador
              { country: "gy", value: 3 }, // Guyana
              { country: "py", value: 3 }, // Paraguay
              { country: "pe", value: 3 }, // Peru
              { country: "sr", value: 3 }, // Suriname
              { country: "uy", value: 3 }, // Uruguay
              { country: "ve", value: 3 }, // Venezuela
              { country: "fk", value: 3 }, // Venezuela



    
              { country: "gl", value: 4 }, // Canada
              { country: "ca", value: 4 }, // Canada
              { country: "us", value: 4 }, // United States
              { country: "mx", value: 4 }, // Mexico



  
                { country: "bz", value: 5 }, // Belize
                { country: "cr", value: 5 }, // Costa Rica
                { country: "sv", value: 5 }, // El Salvador
                { country: "gt", value: 5 }, // Guatemala
                { country: "hn", value: 5 }, // Honduras
                { country: "ni", value: 5 }, // Nicaragua
                { country: "pa", value: 5 },  // Panama
                { country: "cu", value: 5 },  // Panama
                { country: "bs", value: 5 },  // Panama
                { country: "jm", value: 5 },  // Panama
                { country: "do", value: 5 },  // Panama
                { country: "ht", value: 5 },  // Panama
                { country: "pr", value: 5 },  // Panama
              


          
     
             
                  { country: "af", value: 6 }, // Afghanistan
                  { country: "am", value: 6 }, // Armenia
                  { country: "az", value: 6 }, // Azerbaijan
                  { country: "bh", value: 6 }, // Bahrain
                  { country: "bd", value: 6 }, // Bangladesh
                  { country: "bt", value: 6 }, // Bhutan
                  { country: "bn", value: 6 }, // Brunei
                  { country: "kh", value: 6 }, // Cambodia
                  { country: "cn", value: 6 }, // China
                  { country: "cy", value: 6 }, // Cyprus
                  { country: "ge", value: 6 }, // Georgia
                  { country: "in", value: 6 }, // India
                  { country: "id", value: 6 }, // Indonesia
                  { country: "ir", value: 6 }, // Iran
                  { country: "iq", value: 6 }, // Iraq
                  { country: "il", value: 6 }, // Israel
                  { country: "jp", value: 6 }, // Japan
                  { country: "jo", value: 6 }, // Jordan
                  { country: "kz", value: 6 }, // Kazakhstan
                  { country: "kw", value: 6 }, // Kuwait
                  { country: "kg", value: 6 }, // Kyrgyzstan
                  { country: "la", value: 6 }, // Laos
                  { country: "lb", value: 6 }, // Lebanon
                  { country: "my", value: 6 }, // Malaysia
                  { country: "mv", value: 6 }, // Maldives
                  { country: "mn", value: 6 }, // Mongolia
                  { country: "mm", value: 6 }, // Myanmar (Burma)
                  { country: "np", value: 6 }, // Nepal
                  { country: "kp", value: 6 }, // North Korea
                  { country: "om", value: 6 }, // Oman
                  { country: "pk", value: 6 }, // Pakistan
                  { country: "ps", value: 6 }, // Palestine
                  { country: "ph", value: 6 }, // Philippines
                  { country: "qa", value: 6 }, // Qatar
                  { country: "sa", value: 6 }, // Saudi Arabia
                  { country: "sg", value: 6 }, // Singapore
                  { country: "kr", value: 6 }, // South Korea
                  { country: "lk", value: 6 }, // Sri Lanka
                  { country: "sy", value: 6 }, // Syria
                  { country: "tw", value: 6 }, // Taiwan
                  { country: "tj", value: 6 }, // Tajikistan
                  { country: "th", value: 6 }, // Thailand
                  { country: "tl", value: 6 }, // Timor-Leste
                  { country: "tr", value: 6 }, // Turkey
                  { country: "tm", value: 6 }, // Turkmenistan
                  { country: "ae", value: 6 }, // United Arab Emirates
                  { country: "uz", value: 6 }, // Uzbekistan
                  { country: "vn", value: 6 }, // Vietnam
                  { country: "ye", value: 6 } , // Yemen


        
                    { country: "au", value: 7 }, // Australia
                    { country: "fj", value: 7 }, // Fiji
                    { country: "ki", value: 7 }, // Kiribati
                    { country: "mh", value: 7 }, // Marshall Islands
                    { country: "fm", value: 7 }, // Micronesia
                    { country: "nr", value: 7 }, // Nauru
                    { country: "nz", value: 7 }, // New Zealand
                    { country: "pw", value: 7 }, // Palau
                    { country: "pg", value: 7 }, // Papua New Guinea
                    { country: "ws", value: 7 }, // Samoa
                    { country: "sb", value: 7 }, // Solomon Islands
                    { country: "to", value: 7 }, // Tonga
                    { country: "tv", value: 7 }, // Tuvalu
                    { country: "vu", value: 7 }  // Vanuatu
                    // Puedes agregar más países según sea necesario
                  ];
                  
  
    const clickAction = (e) => {
      console.log(e.countryValue)
      const countryValue = e.countryValue
      if (countryValue) {
        console.log('Navigating to /offers');
        navigate(`/offers/${countryValue}`)
      }
      
      // Puedes hacer más cosas aquí, como navegar a una página específica para ese país, etc.
    };
    return (
      <div
        className="homeUserContainer"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      > 
        <div className="App">
          <WorldMap
            color="blue"
            size="xxl"
            data={data}
            onClickFunction={(e) =>clickAction(e)}
          />
        </div>
      </div>
    );
  }
  export default Map;