export const getCustomCrimeTypes = (response) => {
    const crimeTypes = response.map(crime => crime.title_type);
    let unique = [...new Set(crimeTypes)];
    return unique;
}