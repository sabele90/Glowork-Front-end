import WorldMap from "react-svg-worldmap";
import "./Map.css";
import { useNavigate } from "react-router-dom";

function Map() {
  const navigate = useNavigate();
  const data = [
    { country: "dz", value: 7 }, // Algeria
    { country: "ao", value: 7 }, // Angola
    { country: "bj", value: 7 }, // Benin
    { country: "bw", value: 7 }, // Botswana
    { country: "bf", value: 7 }, // Burkina Faso
    { country: "bi", value: 7 }, // Burundi
    { country: "cv", value: 7 }, // Cabo Verde
    { country: "cm", value: 7 }, // Cameroon
    { country: "cf", value: 7 }, // Central African Republic
    { country: "td", value: 7 }, // Chad
    { country: "km", value: 7 }, // Comoros
    { country: "cd", value: 7 }, // Democratic Republic of the Congo
    { country: "dj", value: 7 }, // Djibouti
    { country: "eg", value: 7 }, // Egypt
    { country: "gq", value: 7 }, // Equatorial Guinea
    { country: "er", value: 7 }, // Eritrea
    { country: "sz", value: 7 }, // Eswatini (formerly Swaziland)
    { country: "et", value: 7 }, // Ethiopia
    { country: "ga", value: 7 }, // Gabon
    { country: "gm", value: 7 }, // Gambia
    { country: "gh", value: 7 }, // Ghana
    { country: "gn", value: 7 }, // Guinea
    { country: "gw", value: 7 }, // Guinea-Bissau
    { country: "ci", value: 7 }, // Ivory Coast
    { country: "ke", value: 7 }, // Kenya
    { country: "ls", value: 7 }, // Lesotho
    { country: "lr", value: 7 }, // Liberia
    { country: "ly", value: 7 }, // Libya
    { country: "mg", value: 7 }, // Madagascar
    { country: "mw", value: 7 }, // Malawi
    { country: "ml", value: 7 }, // Mali
    { country: "mr", value: 7 }, // Mauritania
    { country: "mu", value: 7 }, // Mauritius
    { country: "ma", value: 7 }, // Morocco
    { country: "mz", value: 7 }, // Mozambique
    { country: "na", value: 7 }, // Namibia
    { country: "ne", value: 7 }, // Niger
    { country: "ng", value: 7 }, // Nigeria
    { country: "rw", value: 7 }, // Rwanda
    { country: "st", value: 7 }, // Sao Tome and Principe
    { country: "sn", value: 7 }, // Senegal
    { country: "sc", value: 7 }, // Seychelles
    { country: "sl", value: 7 }, // Sierra Leone
    { country: "so", value: 7 }, // Somalia
    { country: "za", value: 7 }, // South Africa
    { country: "ss", value: 7 }, // South Sudan
    { country: "sd", value: 7 }, // Sudan
    { country: "tz", value: 7 }, // Tanzania
    { country: "tg", value: 7 }, // Togo
    { country: "tn", value: 7 }, // Tunisia
    { country: "ug", value: 7 }, // Uganda
    { country: "zm", value: 7 }, // Zambia
    { country: "zw", value: 7 }, // Zimbabwe
    { country: "cg", value: 7 }, // Republic of the Congo
    { country: "eh", value: 7 }, // Republic of the Congo

    { country: "al", value: 5 }, // Albania
    { country: "ad", value: 5 }, // Andorra
    { country: "am", value: 5 }, // Armenia
    { country: "at", value: 5 }, // Austria
    { country: "az", value: 5 }, // Azerbaijan
    { country: "by", value: 5 }, // Belarus
    { country: "be", value: 5 }, // Belgium
    { country: "ba", value: 5 }, // Bosnia and Herzegovina
    { country: "bg", value: 5 }, // Bulgaria
    { country: "hr", value: 5 }, // Croatia
    { country: "cy", value: 5 }, // Cyprus
    { country: "cz", value: 5 }, // Czech Republic
    { country: "dk", value: 5 }, // Denmark
    { country: "ee", value: 5 }, // Estonia
    { country: "fi", value: 5 }, // Finland
    { country: "fr", value: 5 }, // France
    { country: "ge", value: 5 }, // Georgia
    { country: "de", value: 5 }, // Germany
    { country: "gr", value: 5 }, // Greece
    { country: "hu", value: 5 }, // Hungary
    { country: "is", value: 5 }, // Iceland
    { country: "ie", value: 5 }, // Ireland
    { country: "it", value: 5 }, // Italy
    { country: "kz", value: 5 }, // Kazakhstan
    { country: "kg", value: 5 }, // Kyrgyzstan
    { country: "lv", value: 5 }, // Latvia
    { country: "lt", value: 5 }, // Lithuania
    { country: "lu", value: 5 }, // Luxembourg
    { country: "mt", value: 5 }, // Malta
    { country: "md", value: 5 }, // Moldova
    { country: "mc", value: 5 }, // Monaco
    { country: "me", value: 5 }, // Montenegro
    { country: "nl", value: 5 }, // Netherlands
    { country: "mk", value: 5 }, // North Macedonia
    { country: "no", value: 5 }, // Norway
    { country: "pl", value: 5 }, // Poland
    { country: "pt", value: 5 }, // Portugal
    { country: "ro", value: 5 }, // Romania
    { country: "ru", value: 5 }, // Russia
    { country: "sm", value: 5 }, // San Marino
    { country: "rs", value: 5 }, // Serbia
    { country: "sk", value: 5 }, // Slovakia
    { country: "si", value: 5 }, // Slovenia
    { country: "es", value: 5 }, // Spain
    { country: "se", value: 5 }, // Sweden
    { country: "ch", value: 5 }, // Switzerland
    { country: "tj", value: 5 }, // Tajikistan
    { country: "tr", value: 5 }, // Turkey
    { country: "tm", value: 5 }, // Turkmenistan
    { country: "ua", value: 5 }, // Ukraine
    { country: "gb", value: 5 }, // United Kingdom
    { country: "uz", value: 5 }, // Uzbekistan

    { country: "ar", value: 4 }, // Argentina
    { country: "bo", value: 4 }, // Bolivia
    { country: "br", value: 4 }, // Brazil
    { country: "cl", value: 4 }, // Chile
    { country: "co", value: 4 }, // Colombia
    { country: "ec", value: 4 }, // Ecuador
    { country: "gy", value: 4 }, // Guyana
    { country: "py", value: 4 }, // Paraguay
    { country: "pe", value: 4 }, // Peru
    { country: "sr", value: 4 }, // Suriname
    { country: "uy", value: 4 }, // Uruguay
    { country: "ve", value: 4 }, // Venezuela
    { country: "fk", value: 4 }, // Venezuela

    { country: "gl", value: 2 }, // Canada
    { country: "ca", value: 2 }, // Canada
    { country: "us", value: 2 }, // United States
    { country: "mx", value: 2 }, // Mexico

    { country: "bz", value: 9 }, // Belize
    { country: "cr", value: 9 }, // Costa Rica
    { country: "sv", value: 9 }, // El Salvador
    { country: "gt", value: 9 }, // Guatemala
    { country: "hn", value: 9 }, // Honduras
    { country: "ni", value: 9 }, // Nicaragua
    { country: "pa", value: 9 }, // Panama
    { country: "cu", value: 9 }, // Panama
    { country: "bs", value: 9 }, // Panama
    { country: "jm", value: 9 }, // Panama
    { country: "do", value: 9 }, // Panama
    { country: "ht", value: 9 }, // Panama
    { country: "pr", value: 9 }, // Panama

    { country: "af", value: 1 }, // Afghanistan
    { country: "am", value: 1 }, // Armenia
    { country: "az", value: 1 }, // Azerbaijan
    { country: "bh", value: 1 }, // Bahrain
    { country: "bd", value: 1 }, // Bangladesh
    { country: "bt", value: 1 }, // Bhutan
    { country: "bn", value: 1 }, // Brunei
    { country: "kh", value: 1 }, // Cambodia
    { country: "cn", value: 1 }, // China
    { country: "cy", value: 1 }, // Cyprus
    { country: "ge", value: 1 }, // Georgia
    { country: "in", value: 1 }, // India
    { country: "id", value: 1 }, // Indonesia
    { country: "ir", value: 1 }, // Iran
    { country: "iq", value: 1 }, // Iraq
    { country: "il", value: 1 }, // Israel
    { country: "jp", value: 1 }, // Japan
    { country: "jo", value: 1 }, // Jordan
    { country: "kz", value: 1 }, // Kazakhstan
    { country: "kw", value: 1 }, // Kuwait
    { country: "kg", value: 1 }, // Kyrgyzstan
    { country: "la", value: 1 }, // Laos
    { country: "lb", value: 1 }, // Lebanon
    { country: "my", value: 1 }, // Malaysia
    { country: "mv", value: 1 }, // Maldives
    { country: "mn", value: 1 }, // Mongolia
    { country: "mm", value: 1 }, // Myanmar (Burma)
    { country: "np", value: 1 }, // Nepal
    { country: "kp", value: 1 }, // North Korea
    { country: "om", value: 1 }, // Oman
    { country: "pk", value: 1 }, // Pakistan
    { country: "ps", value: 1 }, // Palestine
    { country: "ph", value: 1 }, // Philippines
    { country: "qa", value: 1 }, // Qatar
    { country: "sa", value: 1 }, // Saudi Arabia
    { country: "sg", value: 1 }, // Singapore
    { country: "kr", value: 1 }, // South Korea
    { country: "lk", value: 1 }, // Sri Lanka
    { country: "sy", value: 1 }, // Syria
    { country: "tw", value: 1 }, // Taiwan
    { country: "tj", value: 1 }, // Tajikistan
    { country: "th", value: 1 }, // Thailand
    { country: "tl", value: 1 }, // Timor-Leste
    { country: "tr", value: 1 }, // Turkey
    { country: "tm", value: 1 }, // Turkmenistan
    { country: "ae", value: 1 }, // United Arab Emirates
    { country: "uz", value: 1 }, // Uzbekistan
    { country: "vn", value: 1 }, // Vietnam
    { country: "ye", value: 1 }, // Yemen

    { country: "au", value: 8 }, // Australia
    { country: "fj", value: 8 }, // Fiji
    { country: "ki", value: 8 }, // Kiribati
    { country: "mh", value: 8 }, // Marshall Islands
    { country: "fm", value: 8 }, // Micronesia
    { country: "nr", value: 8 }, // Nauru
    { country: "nz", value: 8 }, // New Zealand
    { country: "pw", value: 8 }, // Palau
    { country: "pg", value: 8 }, // Papua New Guinea
    { country: "ws", value: 8 }, // Samoa
    { country: "sb", value: 8 }, // Solomon Islands
    { country: "to", value: 8 }, // Tonga
    { country: "tv", value: 8 }, // Tuvalu
    { country: "vu", value: 8 }, // Vanuatu
    // Puedes agregar más países según sea necesario
  ];

  const clickAction = (e) => {
    const continentValue = e.countryValue;
    if (continentValue) {
      navigate(`/offer/continent/${continentValue}`);
    }

    // Puedes hacer más cosas aquí, como navegar a una página específica para ese país, etc.
  };
  return (
    <div className="App">
   <WorldMap
  color="blue"
  size="xxl"
  data={data}
  onClickFunction={(e) => clickAction(e)}
  className="WorldMap"

/>

    </div>
  );
}
export default Map;
