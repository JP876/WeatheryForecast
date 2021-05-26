const isItSaved = (location, savedCity) => {
    let foundCity;
    if (location) {
        let { city, country } = location;

        if (savedCity && savedCity.length > 0) {
            foundCity = savedCity.findIndex(
                c =>
                    (c.savedLocation.city === city) &
                    (c.savedLocation.country === country)
            );
        } else {
            foundCity = -1;
        }

        return foundCity;
    }
};

export default isItSaved;
