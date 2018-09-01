var conversionObject = {
    special: {
        "Temperature": {
            "Kelvin": {
                toKelvin: function (e) {
                    return e;
                },
                toCelsius: function (e) {
                    return (e - 273.15);
                },
                toFahrenheit: function (e) {
                    return (e * (9 / 5) - 459.67);
                },
                toRankine: function (e) {
                    return (e * (9 / 5));
                }
            },
            "Celsius": {
                toKelvin: function (e) {
                    return (e + 273.15);
                },
                toCelsius: function (e) {
                    return e;
                },
                toFahrenheit: function (e) {
                    return (e * (9 / 5) + 32);
                },
                toRankine: function (e) {
                    return ((e + 273.15) * (9 / 5));
                }
            },
            "Fahrenheit": {
                toKelvin: function (e) {
                    return ((e + 459.67) * 5 / 9);
                },
                toCelsius: function (e) {
                    return ((e - 32) * 5 / 9);
                },
                toFahrenheit: function (e) {
                    return e;
                },
                toRankine: function (e) {
                    return (e + 459.67);
                }
            },
            "Rankine": {
                toKelvin: function (e) {
                    return (e * 5 / 9);
                },
                toCelsius: function (e) {
                    return ((e - 491.67) * 5 / 9);
                },
                toFahrenheit: function (e) {
                    return e;
                },
                toRankine: function (e) {
                    return (e * 9 / 5);
                }
            }
        }
    },
    master: {
        "Acceleration": {
            "Meter/Second": "1",
            "Kilometer/Second": "0.001",
            "Millimeter/Second": "1000",
            "Micrometer/Second": "1000000",
            "Nanometer/Second": "1000000000",
            "Galileo": "100",
            "Mile/Second": "0.000621371",
            "Mile(nautical)/Second": "0.0007150611",
            "Yard/Second": "1.093613298",
            "Foot/Second": "3.280839895",
            "Inch/Second": "39.37007874",
            "Gravity": "0.101971621",
            "Knots/Second": "1.94384"
        },
        "Angle": {
            "Degree": "1",
            "Grad": "1.11111",
            "Mil": "17.7778",
            "Radian": Math.PI / 180,
            "Revolution": "0.00277778",
            "Arcminute": "60",
            "Arcsecond": "3600"
        },
        "Area": {
            "Nanometer": "1000000000000000000",
            "Micrometer": "1000000000000",
            "Millimeter": "1000000",
            "Centimeter": "10000",
            "Decimeter": "100",
            "Meter": "1",
            "Dekameter": "0.01",
            "Hectometer": "0.0001",
            "Kilometer": "0.000001",
            "Are": "0.01",
            "Hectare": "0.0001",
            "Inch": "1550.003100006",
            "Feet": "10.763910417",
            "Yard": "1.195990046",
            "Mile": "0.000000386",
            "Angstrom": "100000000000000000000.00",
            "Millimicron": "1000000000000000000.00",
            "Micron": "1000000000000",
            "Acre": "0.000247105",
            "Barn": "1e+28",
            "Light-Year": "1.1173e-32",
            "Astron.-Unit": "4.46837e-23",
            "Li": "1.500",
            "Fen": "0.15",
            "Mu": "0.0015",
            "Qing": "0.0149999992"
        },
        "Data": {
            "Bit": "1",
            "Kilobit": "0.001",
            "Megabit": "0.000001",
            "Gigabit": "1.0e-9",
            "Terabit": "1.0e-12",
            "Petabit": "1.0e-15",
            "Exabit": "1.0e-18",
            "Zettabit": "1.0e-21",
            "Yottabit": "1.0e-24",
            "Byte": "0.125",
            "Kilobyte": "0.00012207",
            "Megabyte": "1.1920929e-7",
            "Gigabyte": "1.16415322e-10",
            "Terabyte": "1.13686838e-13",
            "Petabyte": "1.11022302e-16",
            "Exabyte": "1.08420217e-19",
            "Zettabyte": "1.05879118e-22",
            "Yottabyte": "1.03397577e-25"
        },
        "Data Transfer": {
            "Bit/Second": "1048576",
            "Bit/Minute": "62914560",
            "Bit/Hour": "3774873600",
            "Byte/Second": "131072",
            "Byte/Minute": "7864320",
            "Byte/Hour": "471859200",
            "Kilobit/Second": "1024",
            "Kilobit/Minute": "61440",
            "Kilobit/Hour": "3686400",
            "Kilobyte/Second": "128",
            "Kilobyte/Minute": "768",
            "Kilobyte/Hour": "460800",
            "Megabit/Second": "1",
            "Megabit/Minute": "60",
            "Megabit/Hour": "3600",
            "Megabyte/Second": "0.125",
            "Megabyte/Minute": "7.5",
            "Megabyte/Hour": "450",
            "Gigabit/Second": "0.000976563",
            "Gigabit/Minute": "0.05859378",
            "Gigabit/Hour": "3.5156268",
            "Gigabyte/Second": "0.00012207",
            "Gigabyte/Minute": "7.3242e-3",
            "Gigabyte/Hour": "0.439452",
            "Terabit/Second": "0.000000954",
            "Terabit/Minute": "5.724e-5",
            "Terabit/Hour": "3.4344e-3",
            "Terabyte/Second": "0.000000119",
            "Terabyte/Minute": "7.14e-6",
            "Terabyte/Hour": "4.284e-4",
            "Ethernet": "0.1048576",
            "Ethernet(fast)": "0.01048576",
            "Ethernet(Gigabit)": "0.001048576",
            "ISDN(single)": "16.384",
            "ISDN(dual)": "8.192",
            "Modem(110)": "9532.509090909",
            "Modem(300)": "3495.253333333",
            "Modem(1200)": "873.8133333333",
            "Modem(2400)": "436.9066666667",
            "Modem(9600)": "109.2266666667",
            "Modem(14.4k)": "72.8177777778",
            "Modem(28.8k)": "36.4088888889",
            "Modem(33.6k)": "31.207619048",
            "Modem(56k)": "18.724571429",
            "USB": "0.0873813333",
            "Firewire(IEEE-1394)": "0.00262144"
        },
        "Density": {
            "Kilogramm/Liter": "0.001",
            "Gramm/Liter": "1",
            "Milligramm/Liter": "1000",
            "Microgramm/Liter": "1000000",
            "Nanogramm/Liter": "1000000000",
            "Kilogramm/Meter": "1",
            "Gramm/Meter": "1000",
            "Kilogramm/Centimeter": "0.000001",
            "Gramm/Centimeter": "0.001",
            "Gramm/Millimeter": "0.000001",
            "Pound/Inch": "0.00003613",
            "Pound/Foot": "0.06242796",
            "Ounze/Inch": "0.00057804",
            "Ounze/Foot": "0.99884737"
        },
        "Distance/Length": {
            "Nanometer": "1e+09",
            "Micrometer": "1e+06",
            "Millimeter": "1000",
            "Centimeter": "100",
            "Decimeter": "10",
            "Meter": "1.000",
            "Kilometer": "0.001",
            "Picometer": "1e+12",
            "Femtometer": "1e+15",
            "Attommeter": "1e+18",
            "Zeptometer": "1e+21",
            "Yoctometer": "1e+24",
            "Inch": "39.3701",
            "Feet": "3.28084",
            "Yard": "1.09361",
            "Mile": "0.000621371",
            "Mile(nautical)": "0.000539957",
            "Light-Year": "1.057e-16",
            "Light-Day": "3.860e-14",
            "Light-Min": "5.5594e-11",
            "Light-Sec": "3.33564e-9",
            "Astron. Unit": "6.68459e-12",
            "Parsec": "3.24078e-17",
            "Chain": "0.0497097",
            "Furlong": "0.00497097",
            "Point": "2834.64",
            "Cun": "30",
            "Chi": "3",
            "Li": "3000",
            "Gongli": "6000"
        },
        "Electrical Charge": {
            "Coulomb": "1",
            "Kilocoulomb": "1e-3",
            "Megacoulomb": "1e-6",
            "Abcoulomb": "0.1",
            "Nanocoulomb": "1000000000",
            "Microcoulomb": "1000000",
            "Millicoulomb": "1000",
            "Milliampere Hour": "0.277778",
            "Ampere Hour": "0.00028",
            "Faraday": "0.00001",
            "Statcoulomb": "2997924580",
            "Elementary Charge": "6.24151e+18"
        },
        "Energy & Work": {
            "Joule": "1",
            "Kilojoule": "0.001",
            "Megajoule": "0.000001",
            "Millijoule": "1000",
            "Kilowatt Hour": "0.000000278",
            "Kilowatt Second": "0.001",
            "Watt Hour": "0.000277778",
            "Watt Second": "1",
            "Newton Meter": "1",
            "Horsepower Hour": "0.00000037",
            "Kilocalorie(int.)": "0.000238846",
            "Kilocalorie(therm.)": "0.000239006",
            "Calorie(int.)": "0.238845897",
            "Calorie(therm.)": "0.239005736",
            "Calorie(Nutrition)": "0.238845897",
            "Kilocalorie(Nutrition)": "0.000238846",
            "Hartree Energy": "2.293710449e+17",
            "Rydberg": "4.587420897e+17",
            "British Thermal Unit": "0.00094782",
            "Erg": "10000000",
            "Electron Volt": "6.24151154e+18",
            "Foot Pound": "0.73756215"
        },
        "Flow Rate": {
            "Meter/Second": "1",
            "Meter/Minute": "60",
            "Meter/Hour": "3600",
            "Kilometer/Second": "1e-9",
            "Kilometer/Minute": "6e-8",
            "Kilometer/Hour": "0.000004",
            "Decimeter/Second": "1000",
            "Decimeter/Minute": "60000",
            "Decimeter/Hour": "3600000",
            "Centimeter/Second": "1000000",
            "Centimeter/Minute": "60000000",
            "Centimeter/Hour": "3600000000",
            "Millimeter/Second": "1000000000",
            "Millimeter/Minute": "60000000000",
            "Millimeter/Hour": "3.6e+12",
            "Foot/Second": "35.314667",
            "Foot/Minute": "2118.880003",
            "Foot/Hour": "1.271328e+5",
            "Liter/Second": "1000",
            "Liter/Minute": "60000",
            "Liter/Hour": "3600000",
            "Gallon(US)/Second": "264.172052",
            "Gallon(US)/Minute": "15850.323141",
            "Gallon(US)/Hour": "9.510194e+5",
            "Gallon(Imperial)/Second": "219.969248",
            "Gallon(Imperial)/Minute": "13198.154898",
            "Gallon(Imperial)/Hour": "7.918893e+5",
            "Morgen-Foot/Second": "0.000811",
            "Morgen-Foot/Minute": "0.048643",
            "Morgen-Foot/Hour": "2.918567",
            "Scheffel(US)/Second": "28.377593",
            "Scheffel(US)/Minute": "1702.655596",
            "Scheffel(US)/Hour": "102159.33573",
            "Scheffel(UK)/Second": "27.496156",
            "Scheffel(UK)/Minute": "1649.769362",
            "Scheffel(UK)/Hour": "98986.161735",
            "Barrel(Oil)/Second": "6.289810771",
            "Barrel(Oil)/Minute": "377.38864623",
            "Barrel(Oil)/Hour": "22643.31877354"
        },
        "Force": {
            "Newton": "1",
            "Kilonewton": "0.001",
            "Millinewton": "1000",
            "Dyne": "100000",
            "Joule/Meter": "1",
            "Pond": "101.971621298",
            "Kilopond": "0.101971621298"
        },
        "Fuel Consumption": {
            "Miles/Liter": "1",
            "Kilometer/Liter": "1.60934",
            "Miles/Gallon(US)": "3.78517704",
            "Miles/Gallon(UK)": "4.5463968",
            "Kilometer/Gallon(US)": "6.09165188",
            "Kilometer/Gallon(UK)": "7.31671632"
        },
        "Luminance": {
            "Candela/Meter": "1",
            "Kilocandela/Meter": "0.001",
            "Candela/Centimeter": "0.0001",
            "Candela/Foot": "0.09",
            "Foot Lambert": "0.29",
            "Lambert": "3.14e-4",
            "Nit": "1",
            "Stilb": "0.0001"
        },
        "Mass/Weight": {
            "Microgramm": "1000000",
            "Milligramm": "1000",
            "Gramm": "1",
            "Kilogramm": "0.001",
            "Ton(US)": "1.10231131e-6",
            "Ton(UK)": "9.84206528e-7",
            "Ounce": "3.5273962e-2",
            "Pound": "2.20462262e-3",
            "Pound(metric)": "2e-3",
            "Stone": "0.000157473",
            "Carat": "5",
            "Grain": "15.43236"
        },
        "Power": {
            "Watt": "1",
            "Milliwatt": "1000",
            "Kilowatt": "0.001",
            "Megawatt": "0.000001",
            "Joule/Second": "1",
            "Kilojoule/Second": "0.001",
            "Horsepower": "0.001341",
            "Horsepower(metric)": "0.0013596",
            "Horsepower(Boiler)": "0.000102",
            "Decibel Milliwatt": "30",
            "Calories/Second": "0.238846",
            "Calories/Hour": "859.8456",
            "Kilocalories/Second": "0.000238846",
            "Kilocalories/Hour": "0.8598456",
            "Foot-Pound/Second": "0.737562",
            "Foot-Pound/Hour": "2655.22",
            "Newton Meter/Second": "1",
            "Newton Meter/Hour": "3600",
            "BTU/Second": "0.000947817",
            "BTU/Minute": "0.056869",
            "BTU/Hour": "3.41214"
        },
        "Pressure": {
            "Pascal": "1.0",
            "Kilopascal": "0.001",
            "Hectopascal": "0.01",
            "Millipascal": "1000",
            "Newton/Meter": "1",
            "Bar": "0.00001",
            "Millibar": "0.01",
            "Kip/Inch": "0.000000145",
            "Pounds/Inch": "0.000145038",
            "Torr": "0.007500617",
            "Millimeter Mercury": "0.00750062",
            "Inches Mercury": "0.000295301"
        },
        "Radioactivity": {
            "Curie": "1",
            "Kilocurie": "0.001",
            "Millicurie": "1000",
            "Microcurie": "1000000",
            "Nanocurie": "1000000000",
            "Picocurie": "1e+12",
            "Becquerel": "3.7e+10",
            "Terabecquerel": "0.037",
            "Gigabecquerel": "37",
            "Megabecquerel": "37000",
            "Kilobecquerel": "37000000",
            "Milliecquerel": "3.7e+13",
            "Rutherford": "37000",
            "1/Second": "3.7e+10",
            "Disintegrations/Second": "3.7e+10",
            "Disintegrations/Minute": "2.22e+12"
        },
        "Speed": {
            "Meter/Second": "4.4704e-1",
            "Meter/Hour": "1.609344e+3",
            "Kilometer/Hour": "1.609344",
            "Foot/Hour": "5.28e+3",
            "Yard/Hour": "1.76e+3",
            "Miles/Hour": "1",
            "Knots": "8.68976242e-1",
            "Mach(SI Standard)": "1.51515152e-3",
            "Speed of Light": "1.49116493e-9"
        },
        "Temperature": {
            "Celsius": "1",
            "Kelvin": "1",
            "Fahrenheit": "1",
            "Rankine": "1"
        },
        "Time": {
            "Millisecond": "604800000",
            "Microsecond": "604800000000",
            "Nanosecond": "604800000000000",
            "Second": "604800",
            "Minute": "10080",
            "Hour": "168",
            "Day": "7",
            "Week": "1",
            "Month(31)": "0.22580645",
            "Month(30)": "0.2333333333",
            "Month(29)": "0.24137931",
            "Month(28)": "0.25",
            "Year": "0.019165"
        },
        "Torque": {
            "Newton Meter": "1",
            "Newton Centimeter": "100",
            "Newton Millimeter": "1000",
            "Kilonewton Meter": "0.001",
            "Meganewton Meter": "0.000001",
            "Micronewton Meter": "1000000",
            "Millinewton Meter": "1000",
            "Pound-Force Foot": "0.73756",
            "Pound-Force Inch": "8.85075",
            "Ounce-Force Foot": "11.80097",
            "Ounce-Force Inch": "141.61165",
            "Kilogramm-Force Meter": "0.10197",
            "Gramm-Force Centimeter": "10197.2",
            "Dyne Meter": "100000",
            "Dyne Centimeter": "10000000",
            "Dyne Millimeter": "100000000"
        },
        "Volume": {
            "Barrel(Oil)": "6.28981",
            "Foot": "35.31466621",
            "Inch": "61023.74409473",
            "Yard": "1.30796773",
            "Millimeter": "1000000000",
            "Centimeter": "1000000",
            "Meter": "1",
            "Fluid Ounze(US)": "33814.02220161",
            "Gallon(US)": "264.17205124",
            "Liter": "1000",
            "Milliliter": "1e+6",
            "Centiliter": "100000",
            "Deciliter": "10000",
            "Hectoliter": "10",
            "Pint(UK)": "1759.75",
            "Pint(US)": "2113.38",
            "Tablespoon(US)": "67613.3",
            "Tablespoon(UK)": "66666.7",
            "Teaspoon(US)": "202840",
            "Teaspoon(UK)": "200000",
            "Cup(US)": "4226.72",
            "Cup(UK)": "3519.89"
        }
    },

    functions: {
        converter: function (context, from, to, subject) {
            context = context.toUpperCase().substring(0, 1) + context.substring(1);
            to = to.toUpperCase().substring(0, 1) + to.substring(1);
            from = from.toUpperCase().substring(0, 1) + from.substring(1);
            //subject = parseInt(subject);
			subject = stringMath(subject);
            var specialTest = false;
            for (var i in conversionObject.special) {
                if (i == context) {
                    specialTest = i;
                }
            }
            if (specialTest !== false) {
                if (typeof conversionObject.special[specialTest][from] !== "undefined") {
                    return conversionObject.special[specialTest][from]["to" + to](subject);
                }
                return false;
            }
            return conversionObject.master[context][to] / conversionObject.master[context][from] * subject;
        }
    }
}