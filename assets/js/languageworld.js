document.addEventListener("DOMContentLoaded", function () {
    fetch("https://ipapi.co/json/")
    .then((response) => response.json())
    .then((data) => {
        const countryCode = data.country_code;
        let targetLang = "id"; // Default Indonesia

        // Pemetaan kode negara ke kode bahasa (lebih dari 180 negara)
        const countryLangMap = {
            "AF": "fa", // Afghanistan - Persian (Dari)
            "AL": "sq", // Albania - Albanian
            "DZ": "ar", // Algeria - Arabic
            "AD": "ca", // Andorra - Catalan
            "AO": "pt", // Angola - Portuguese
            "AG": "en", // Antigua and Barbuda - English
            "AR": "es", // Argentina - Spanish
            "AM": "hy", // Armenia - Armenian
            "AU": "en", // Australia - English
            "AT": "de", // Austria - German
            "AZ": "az", // Azerbaijan - Azerbaijani
            "BH": "ar", // Bahrain - Arabic
            "BD": "bn", // Bangladesh - Bengali
            "BB": "en", // Barbados - English
            "BY": "be", // Belarus - Belarusian
            "BE": "nl", // Belgium - Dutch
            "BZ": "en", // Belize - English
            "BJ": "fr", // Benin - French
            "BT": "dz", // Bhutan - Dzongkha
            "BO": "es", // Bolivia - Spanish
            "BA": "bs", // Bosnia and Herzegovina - Bosnian
            "BW": "en", // Botswana - English
            "BR": "pt", // Brazil - Portuguese
            "BN": "ms", // Brunei - Malay
            "BG": "bg", // Bulgaria - Bulgarian
            "BF": "fr", // Burkina Faso - French
            "BI": "fr", // Burundi - French
            "KH": "km", // Cambodia - Khmer
            "CM": "fr", // Cameroon - French
            "CA": "en", // Canada - English
            "CV": "pt", // Cape Verde - Portuguese
            "CF": "fr", // Central African Republic - French
            "TD": "fr", // Chad - French
            "CL": "es", // Chile - Spanish
            "CN": "zh", // China - Mandarin Chinese
            "CO": "es", // Colombia - Spanish
            "KM": "ar", // Comoros - Arabic
            "CG": "fr", // Congo - French
            "CR": "es", // Costa Rica - Spanish
            "HR": "hr", // Croatia - Croatian
            "CU": "es", // Cuba - Spanish
            "CY": "el", // Cyprus - Greek
            "CZ": "cs", // Czech Republic - Czech
            "DK": "da", // Denmark - Danish
            "DJ": "fr", // Djibouti - French
            "DO": "es", // Dominican Republic - Spanish
            "EC": "es", // Ecuador - Spanish
            "EG": "ar", // Egypt - Arabic
            "SV": "es", // El Salvador - Spanish
            "EE": "et", // Estonia - Estonian
            "ET": "am", // Ethiopia - Amharic
            "FJ": "en", // Fiji - English
            "FI": "fi", // Finland - Finnish
            "FR": "fr", // France - French
            "GA": "fr", // Gabon - French
            "GM": "en", // Gambia - English
            "GE": "ka", // Georgia - Georgian
            "DE": "de", // Germany - German
            "GH": "en", // Ghana - English
            "GR": "el", // Greece - Greek
            "GT": "es", // Guatemala - Spanish
            "GN": "fr", // Guinea - French
            "GY": "en", // Guyana - English
            "HT": "ht", // Haiti - Haitian Creole
            "HN": "es", // Honduras - Spanish
            "HU": "hu", // Hungary - Hungarian
            "IS": "is", // Iceland - Icelandic
            "IN": "hi", // India - Hindi
            "ID": "id", // Indonesia - Indonesian
            "IR": "fa", // Iran - Persian
            "IQ": "ar", // Iraq - Arabic
            "IE": "ga", // Ireland - Irish
            "IL": "he", // Israel - Hebrew
            "IT": "it", // Italy - Italian
            "JM": "en", // Jamaica - English
            "JP": "ja", // Japan - Japanese
            "JO": "ar", // Jordan - Arabic
            "KZ": "kk", // Kazakhstan - Kazakh
            "KE": "sw", // Kenya - Swahili
            "KW": "ar", // Kuwait - Arabic
            "LA": "lo", // Laos - Lao
            "LV": "lv", // Latvia - Latvian
            "LB": "ar", // Lebanon - Arabic
            "LS": "st", // Lesotho - Sotho
            "LY": "ar", // Libya - Arabic
            "LT": "lt", // Lithuania - Lithuanian
            "LU": "lb", // Luxembourg - Luxembourgish
            "MG": "mg", // Madagascar - Malagasy
            "MW": "en", // Malawi - English
            "MY": "ms", // Malaysia - Malay
            "ML": "fr", // Mali - French
            "MT": "mt", // Malta - Maltese
            "MX": "es", // Mexico - Spanish
            "MA": "ar", // Morocco - Arabic
            "MZ": "pt", // Mozambique - Portuguese
            "NA": "en", // Namibia - English
            "NP": "ne", // Nepal - Nepali
            "NL": "nl", // Netherlands - Dutch
            "NZ": "en", // New Zealand - English
            "NI": "es", // Nicaragua - Spanish
            "NG": "en", // Nigeria - English
            "NO": "no", // Norway - Norwegian
            "OM": "ar", // Oman - Arabic
            "PK": "ur", // Pakistan - Urdu
            "PA": "es", // Panama - Spanish
            "PY": "es", // Paraguay - Spanish
            "PE": "es", // Peru - Spanish
            "PH": "tl", // Philippines - Filipino
            "PL": "pl", // Poland - Polish
            "PT": "pt", // Portugal - Portuguese
            "QA": "ar", // Qatar - Arabic
            "RO": "ro", // Romania - Romanian
            "RU": "ru", // Russia - Russian
            "SA": "ar", // Saudi Arabia - Arabic
            "SN": "fr", // Senegal - French
            "RS": "sr", // Serbia - Serbian
            "SG": "en", // Singapore - English
            "SK": "sk", // Slovakia - Slovak
            "SI": "sl", // Slovenia - Slovenian
            "ZA": "af", // South Africa - Afrikaans
            "KR": "ko", // South Korea - Korean
            "ES": "es", // Spain - Spanish
            "LK": "si", // Sri Lanka - Sinhala
            "SD": "ar", // Sudan - Arabic
            "SE": "sv", // Sweden - Swedish
            "CH": "de", // Switzerland - German
            "SY": "ar", // Syria - Arabic
            "TW": "zh", // Taiwan - Mandarin Chinese
            "TH": "th", // Thailand - Thai
            "TN": "ar", // Tunisia - Arabic
            "TR": "tr", // Turkey - Turkish
            "UA": "uk", // Ukraine - Ukrainian
            "AE": "ar", // United Arab Emirates - Arabic
            "GB": "en", // United Kingdom - English
            "US": "en", // United States - English
            "UY": "es", // Uruguay - Spanish
            "VE": "es", // Venezuela - Spanish
            "VN": "vi", // Vietnam - Vietnamese
            "YE": "ar", // Yemen - Arabic
            "ZM": "en", // Zambia - English
            "ZW": "en"  // Zimbabwe - English
        };

        // Cek apakah negara pengguna ada dalam daftar, jika ya gunakan bahasa yang sesuai
        if (countryLangMap[countryCode]) {
            targetLang = countryLangMap[countryCode];
        }

        translatePage(targetLang);
    })
    .catch((error) => console.error("Error fetching IP data:", error));
});

function translatePage(targetLang) {
    const elements = document.querySelectorAll("body *");
    elements.forEach((element) => {
        if (element.children.length === 0 && element.textContent.trim() !== "") {
            const originalText = element.textContent;
            fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${encodeURIComponent(originalText)}`)
            .then((response) => response.json())
            .then((data) => {
                if (data[0] && data[0][0]) {
                    element.textContent = data[0][0][0];
                }
            })
            .catch((error) => console.error("Error translating text:", error));
        }
    });
}