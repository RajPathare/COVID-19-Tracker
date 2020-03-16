import { overwrite } from 'country-list';


const countryOverwrite = overwrite([{code: 'IR',name: 'Iran'},{code: 'KR',name: 'S. Korea'},{code: 'US',name: 'USA'},{code: 'GB',name: 'UK'},
        {code: 'AE',name: 'UAE'},{code: 'RU',name: 'Russia'},{code: 'TW',name: 'Taiwan'},{code: 'VN',name: 'Vietnam'},
        {code: 'BN',name: 'Brunei'},{code: 'PS',name: 'Palestine'},{code: 'MD',name: 'Moldova'},{code: 'FO',name: 'Faeroe Islands'},
        {code: 'VE',name: 'Venezuela'},{code: 'BO',name: 'Bolivia'},{code: 'CI',name: 'Ivory Coast'},{code: 'BL',name: 'St. Barth'},
        {code: 'CD',name: 'DRC'},{code: 'MF',name: 'Saint Martin'},{code: 'CF',name: 'CAR'},{code: 'VA',name: 'Vatican City'},
        {code: 'VC',name: 'St. Vincent Grenadines'},{code: 'TZ',name: 'Tanzania'},{code: 'VI',name: 'U.S. Virgin Islands'}])

export default countryOverwrite;